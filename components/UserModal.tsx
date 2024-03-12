import {View, Text, StyleSheet} from "react-native";

export default function UserModal() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Modal</Text>
        </View>
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