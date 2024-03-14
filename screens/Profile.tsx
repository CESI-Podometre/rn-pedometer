import {Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import AwardSlider from "@components/Awards/AwardSlider";
import Counter from "@components/Counter";
import ChartCard from "@components/Performances/ChartCard";

import {useUserContext} from "@context/UserContext";

export default function Profile() {
    const profileBackground = require('@assets/Backgrounds/background-login.png');
    const profilePlanet = require('@assets/Planets/moon.png');
    const astronaut = require('@assets/astro.png');

    const userContext = useUserContext();

    let avatar = require('@assets/Avatars/astro_blue.png');

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
                    <Text style={styles.text}>Bienvenue Voyageur</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Nombre de pas total</Text>
                    <Counter/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Liste des récompenses</Text>
                    <AwardSlider/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Mes performances</Text>
                    <ChartCard/>
                </View>
            </View>

            <View style={styles.additionnalLinks}>
                <Pressable style={styles.pressable}>
                    <Text>Conditions Générales d'Utilisation</Text>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Text>Politique de confidentialité</Text>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Text>Mentions légales</Text>
                </Pressable>

                <Button title={"Logout"} color={"red"} onPress={() => userContext.removeUserToken()}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',

        width: '100%',

        position: 'relative',
        top: -75,

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
        top: 250,
    },

    image: {
        width: 150,
        height: 150,

        position: 'relative',
        bottom: 125,
        left: 45,
    },

    avatar: {
        width: 125,
        height: 125,
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
        gap: 60,
    },

    text: {
        textTransform: 'uppercase',
        fontSize: 18,
    },

    additionnalLinks: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 20,

        marginBottom: 75,
    },

    pressable: {

    }
});
