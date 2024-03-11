import {Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";

export default function Login() {
    const logo = require('../assets/Logos/logo-white.png');

    return (
        <ImageBackground source={require('../assets/Backgrounds/background-login.png')} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.centered}>
                    <Image source={logo}/>
                    <Text style={styles.centered}>Starfit</Text>
                </View>

                {/*<TextInput style={styles.input} placeholder="Email"/>*/}
                {/*<TextInput style={styles.input} placeholder="Mot de passe"/>*/}

                <View style={styles.formContainer}>
                    <Text style={styles.centered}>Accès à l'application</Text>
                    <TextInput style={styles.input} placeholder="Identifiant"/>
                    <Button title="Se connecter"/>

                </View>

                <View style={styles.centered}>
                    <Image source={require('../assets/Logos/logo-chu-colored.png')} style={{width: 100, height: 100}}/>
                    <Image source={require('../assets/Logos/logo-chu.png')} style={{width: 100, height: 100}}/>
                </View>
            </SafeAreaView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
    },

    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        padding: 20,

        backgroundColor: 'rgba(239,239,239,0.5)',

        borderRadius: 10,
    },

    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
    },

    text: {
        color: 'white',
    }
});