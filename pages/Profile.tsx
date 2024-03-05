import React from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

export default function Profile() {
    const profileBackground = require('../assets/Backgrounds/background-login.png');
    const profilePlanet = require('../assets/Planets/moon.png');
    const astronaut = require('../assets/astro.png');

    const earth = require('../assets/Planets/earth.png');
    const neptune = require('../assets/Planets/neptune.png');
    const saturn = require('../assets/Planets/saturn.png');

    const avatar = {uri: 'https://www.pngkey.com/png/full/114-1149878_planet-clipart-transparent-background-planet-clipart.png'};

    const awardList = [
        {
            id: 1,
            name: 'Saturn',
            image: saturn
        },
        {
            id: 2,
            name: 'Terre',
            image: earth
        },
        {
            id: 3,
            name: 'Sylvaria',
            image: neptune
        },
    ];

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground source={profileBackground} style={styles.imageBackground}>
                <ImageBackground source={profilePlanet} style={styles.planet}>
                    <Image source={astronaut} style={styles.image}/>
                </ImageBackground>
            </ImageBackground>

            <View style={styles.profile}>
                <View style={styles.container}>
                    <Image source={avatar} style={styles.avatar}/>
                    <Text style={styles.text}>Username</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Total Step Counter</Text>
                    <Text style={styles.steps}>10000</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>My awards</Text>
                    {awardList.length > 0 && (
                        <View style={styles.awardList}>
                            {awardList.map((award) => (
                                <View key={award.id} style={styles.awardCard}>
                                    <Image source={award.image} style={styles.awardImage}/>
                                    <Text>{award.name}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>My performance</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',

        width: '100%',

        gap: 20,
    },

    imageBackground: {
        width: '100%',
        height: 500,

        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    planet: {
        width: 500,
        height: 500,

        alignItems: 'center',
        justifyContent: 'flex-start',

        position: 'relative',
        top: 300,
    },

    image: {
        width: 150,
        height: 150,

        position: 'relative',
        bottom: 125,
        left: 45,
    },

    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50,
        overflow: 'hidden',
    },

    profile: {
        marginTop: -70,
        width: '100%',
        minHeight: 500,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 20,
        gap: 30,
    },

    text: {
        fontSize: 20,
    },

    steps: {
        fontSize: 20,
        fontWeight: 'bold',
    },


    awardList: {
        flexDirection: 'row',

        width: '100%',

        justifyContent: 'space-evenly',
    },

    awardCard: {
        alignItems: 'center',
        gap: 10,
    },

    awardImage: {
        width: 75,
        height: 75,
        borderRadius: 50,
        overflow: 'hidden',
    },
});
