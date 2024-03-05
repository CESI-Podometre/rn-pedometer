import {View, Text, TextInput, StyleSheet, Button, Image, SafeAreaView} from "react-native";

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/logo.png')}/>

            <Text style={styles.centered}>Connexion</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Mot de passe"/>
            <Button title="Se connecter"/>

            <View style={styles.centered}>
                <Image source={require('../assets/logo-chu.png')}/>
                <Image source={require('../assets/logo-deps.svg')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});