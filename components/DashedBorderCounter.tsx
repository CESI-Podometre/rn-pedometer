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
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 180,
        left: 0,
        right: 0,
        bottom: 0,
      },
});