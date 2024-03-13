import {StyleSheet, Text, View} from "react-native";
import ChartCardCompare from "./ChartCardCompare";

export default function PerformanceSlider() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vos performances</Text>
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
            fontSize: 20,
            fontWeight: '300',
            textTransform: 'uppercase',
            color: 'black',
        },
    }
)