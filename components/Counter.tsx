import AppleHealthKit, {HealthInputOptions, HealthKitPermissions,} from "react-native-health";

import {initialize, readRecords, requestPermission,} from 'react-native-health-connect';
import {Permission} from 'react-native-health-connect/lib/typescript/types';
import {TimeRangeFilter} from 'react-native-health-connect/lib/typescript/types/base.types';


import {useEffect, useState} from "react";
import {Platform, StyleSheet, Text} from "react-native";


// const {steps, distance, flights} = useHealthData();


const {Permissions} = AppleHealthKit.Constants;

const permissions: HealthKitPermissions = {
    permissions: {
        read: [
            Permissions.Steps,
            Permissions.FlightsClimbed,
            Permissions.DistanceWalkingRunning,
        ],
        write: [],
    },
};


const useHealthData = (date: Date) => {
    const [androidPermissions, setAndroidPermissions] = useState<Permission[]>([]);

    const hasAndroidPermission = (recordType: string) => {
        return androidPermissions.some((perm) => perm.recordType === recordType);
    };

    const [hasPermissions, setHasPermission] = useState(false);
    const [steps, setSteps] = useState(0);


    useEffect(() => {
        if (Platform.OS == 'android') {
            const init = async () => {
                // initialize the client
                const isInitialized = await initialize();
                if (!isInitialized) {
                    console.log('Failed to initialize Health Connect');
                    return;
                }

                // request permissions
                const grantedPermissions = await requestPermission([
                    {accessType: 'read', recordType: 'Steps'},
                    {accessType: 'read', recordType: 'Distance'},
                    {accessType: 'read', recordType: 'FloorsClimbed'},
                ]);

                setAndroidPermissions(grantedPermissions);
            };

            init();
        }

        if (Platform.OS == 'ios') {
            AppleHealthKit.initHealthKit(permissions, (err) => {
                if (err) {
                    console.log('Error getting permissions');
                    return;
                }
                setHasPermission(true);
            });
        }
    }, []);

    useEffect(() => {
        if (!hasAndroidPermission('Steps')) {
            return;
        }
        const getHealthData = async () => {
            const today = new Date();
            const timeRangeFilter: TimeRangeFilter = {
                operator: 'between',
                startTime: new Date(today.getTime() - 86400000).toISOString(),
                endTime: today.toISOString(),
            };

            // Steps
            const steps = await readRecords('Steps', {timeRangeFilter});
            const totalSteps = steps.reduce((sum, cur) => sum + cur.count, 0);
            setSteps(totalSteps);
        };

        getHealthData();
    }, [androidPermissions]);


    useEffect(() => {
        if (!hasPermissions) {
            return;
        }

        // Query Health data
        const options: HealthInputOptions = {
            date: new Date().toISOString(),
        };

        AppleHealthKit.getStepCount(options, (err, results) => {
            if (err) {
                console.log('Error getting the steps');
                return;
            }
            setSteps(results.value);
        });
    }, [hasPermissions]);

    return (
        <Text style={styles.steps}>{steps}</Text>
    )
}

const styles = StyleSheet.create({
    steps: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default useHealthData;