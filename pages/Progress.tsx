import {View, Text, ScrollView, StyleSheet, SafeAreaView} from "react-native";

export default function Progress() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Progress</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        gap: 30,
    },

    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',

        textTransform: 'uppercase',
    },
});