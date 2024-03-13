import {Image, ScrollView, StyleSheet, View} from "react-native";

export default function Progress() {

    const background = require('@assets/Backgrounds/background-ranking.png');

    return (
        <View>
            <ScrollView>
                <Image source={background} style={styles.image} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        resizeMode: 'cover',

    },
});