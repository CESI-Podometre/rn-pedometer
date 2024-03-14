import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
    HealthUnit,
} from "react-native-health";

// import

import {useEffect, useState} from "react";
import {Platform, StyleSheet, Text} from "react-native";


const {steps, distance, flights} = useHealthData();


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
    const [hasPermissions, setHasPermission] = useState(false);
    const [steps, setSteps] = useState(0);

    useEffect(() => {
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