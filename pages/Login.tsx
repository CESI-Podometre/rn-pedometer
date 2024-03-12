import React from "react";
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useWindowDimensions } from "react-native";
import { useUserContext } from "../context/UserContext";

export default function Login() {
    const { height } = useWindowDimensions();
    const logo = require('../assets/Logos/logo-text-white.png');

    const userContext = useUserContext();

    return (
        <ImageBackground source={require('../assets/Backgrounds/background-login.png')} style={styles.background}>
            <SafeAreaView style={[styles.container, { height }]}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.formContainer}>
                    <Text style={styles.text}>Accès à l'application</Text>
                    <TextInput style={styles.input} placeholder="Identifiant" />
                    <Button title="Se connecter" onPress={() => userContext.setUserId("100534")} />
                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('../assets/Logos/logo-chu.png')} style={styles.image} />
                    <Image source={require('../assets/Logos/logo-deps.png')} style={styles.image} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 225,
        padding: 20,
        backgroundColor: 'rgba(204,206,206,0.94)',
        borderRadius: 10,
        width: '70%',
    },
    input: {
        height: 40,
        width: 200,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 18,
        color: '#023660',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
});
