import {View, StyleSheet, Text} from "react-native";
import {useEffect, useState} from "react";

export default function TotalStepsPool() {

    const [totalSteps, setTotalSteps] = useState(0);

    const getTotalSteps = async () => {
        const totalSteps = 0;
        setTotalSteps(totalSteps);
    }

    useEffect(() => {
        getTotalSteps();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total des pas :</Text>
            <Text style={styles.text}>{totalSteps} pas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#F3F3F3',
        paddingTop: 70,
        paddingBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        zIndex: 1,
        gap: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: '300',
    },
});
