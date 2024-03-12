import {StyleSheet, Text, View} from "react-native";
import AwardCard from "./AwardCard";
import React from "react";

export default function AwardSlider() {

    const getAwards = () => {
        const awards = [
            {id: 1, name: "Saturne", image: require('../../assets/Planets/saturn.png'), unlocked: true},
            {id: 2, name: "Terre", image: require('../../assets/Planets/earth.png'), unlocked: false},
            {id: 3, name: "Neptune", image: require('../../assets/Planets/neptune.png'), unlocked: true},
            {id: 4, name: "Mars", image: require('../../assets/Planets/mars.png'), unlocked: false},
            {id: 5, name: "Jupiter", image: require('../../assets/Planets/jupiter.png'), unlocked: true},
            {id: 6, name: "Uranus", image: require('../../assets/Planets/uranus.png'), unlocked: false},
        ];

        awards.sort(award => award.unlocked ? -1 : 1);

        return awards;
    }

    return (
        <View style={styles.container}>
            {getAwards().length > 0 && (
                <View style={styles.awardList}>
                    {getAwards().map(award => (
                        <AwardCard key={award.id} params={{id: award.id, name: award.name, image: award.image, unlocked: award.unlocked}}/>
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
        fontSize: 18,
    },

    awardList: {
        flexDirection: 'row',

        flexWrap: 'wrap',

        width: '100%',

        justifyContent: 'space-evenly',
    },
});
