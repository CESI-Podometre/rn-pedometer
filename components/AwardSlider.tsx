import {StyleSheet, Text, View} from "react-native";
import AwardCard from "./AwardCard";
import React from "react";

export default function AwardSlider() {

    const getAwards = () => {
        const awards = [{id: 1, name: "Saturn", image: require('../assets/Planets/saturn.png')}, {
            id: 2,
            name: "Terre",
            image: require('../assets/Planets/earth.png')
        }, {id: 3, name: "Sylvaria", image: require('../assets/Planets/neptune.png')}];
        return awards;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Liste des récompenses</Text>
            {getAwards().length > 0 && (
                <View style={styles.awardList}>
                    {getAwards().map(award => (
                        <AwardCard key={award.id} params={{id: award.id, name: award.name, image: award.image}}/>
                    ))}
                </View>
            )}
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
        textTransform: 'uppercase',
        fontSize: 20,
    },

    awardList: {
        flexDirection: 'row',

        width: '100%',

        justifyContent: 'space-evenly',
    },
});
