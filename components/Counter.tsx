import { Pedometer } from "expo-sensors";
import {useEffect, useState} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

function Counter() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [previousDayStepCount, setPreviousDayStepCount] = useState(0);
    const [currentDayStepCount, setCurrentDayStepCount] = useState(0);

    console.log(isPedometerAvailable);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - 1);

            if (Platform.OS === "ios") {
                const previousDayStepCountResult = await Pedometer.getStepCountAsync(start, end);
                if (previousDayStepCountResult) {
                    setPreviousDayStepCount(previousDayStepCountResult.steps);
                }
            }

            // if  (Platform.OS === "android") {
            //
            // }

            return Pedometer.watchStepCount((result) => {
                setCurrentDayStepCount(result.steps);
                console.log(result);
            });
        } else {
            return "Unavailable";
        }
    };

    useEffect(() => {
        async function getSubscription() {
            const subscription = await subscribe();
            return () => subscription;
        }
        getSubscription();
    }, []);

    return (
        <View style={styles.container}>
            {/*{isPedometerAvailable && (*/}
            {/*        <Text style={styles.steps}>{pastStepCount}</Text>*/}
            {/*)}*/}

            <Text style={styles.steps}>{currentDayStepCount} Pas</Text>
            <Text style={styles.steps}>{previousDayStepCount} Pas (24h)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    steps: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Counter;