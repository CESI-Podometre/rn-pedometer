import {SafeAreaView, Text, StyleSheet} from "react-native";

export default function News() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>News</Text>
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
