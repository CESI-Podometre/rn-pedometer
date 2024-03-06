import { Pedometer } from "expo-sensors";
import {useEffect, useState} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

function Counter() {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    console.log(currentStepCount);
    // console.log("isPedometerAvailable: " + isPedometerAvailable);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - 1);

            if (Platform.OS === "ios") {
                const pastStepCountResult = await Pedometer.getStepCountAsync(
                    start,
                    end
                );
                if (pastStepCountResult) {
                    setPastStepCount(pastStepCountResult.steps);
                }
            }

            return Pedometer.watchStepCount((result) => {
                setCurrentStepCount(result.steps);
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
            {/*<Text>Walk! And watch this go up: {currentStepCount}</Text>*/}

            {isPedometerAvailable && (
                    <Text style={styles.steps}>{pastStepCount}</Text>
            )}
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