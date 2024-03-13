import { StyleSheet, View } from "react-native";
import Counter from "./Counter";

export default function DashedBorderCounter() {
    return (
        <View style={[styles.container, styles.overlay]}>
            <View style={styles.dashedBorder}>
                <Counter />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    }, 
    dashedBorder: {
        width: 300,
        height: 90,
        paddingBottom: 30,
        backgroundColor: "#F3F3F3",
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'relative',
        top: -100,
      },
});