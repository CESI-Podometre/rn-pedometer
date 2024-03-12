import {StyleSheet, Text, View} from "react-native";
import ChartCardCompare from "./ChartCardCompare";

export default function PerformanceSlider() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vos Performances</Text>
            <ChartCardCompare/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
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
    }
)