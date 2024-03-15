import {
    Button,
    Image,
    ImageBackground, Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    useWindowDimensions,
    View
} from "react-native";
import {useUserContext} from "@context/UserContext";
import {useState} from "react";
import axios from "axios";

export default function Login() {
    const {height} = useWindowDimensions();
    const logo = require('@assets/Logos/logo-starfit-text-white.png');
    // const background = require('@assets/Backgrounds/background-login.png');
    const background = {uri: "https://img.freepik.com/free-vector/purple-blue-gradient_78370-295.jpg"};

    const [identifier, setIdentifier] = useState('');

    const userContext = useUserContext();

    const tryConnect = async () => {
        const response = await axios.post('https://www.storymakerapi.fr/api/v1/users/login', {identifier: identifier})

        userContext.setUserToken(response.data.token)
    }

    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={[styles.container, {height}]}>
                <Image source={logo} style={styles.logo}/>

                <View style={styles.formContainer}>
                    {/*<Text style={styles.text}>Accès à l'application</Text>*/}
                    <TextInput style={styles.input} placeholder="Identifiant" onChangeText={setIdentifier}/>

                    <Pressable onPress={() => tryConnect()} style={styles.button}>
                        <Text style={styles.text}>Se connecter</Text>
                    </Pressable>
                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('@assets/Logos/logo-chu-white.png')} style={styles.image}/>
                    <Image source={require('@assets/Logos/logo-deps-white.png')} style={styles.image}/>
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
        marginTop: 50,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 225,
        padding: 20,
        borderRadius: 10,
        width: '70%',
    },
    input: {
        height: 40,
        width: 300,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(255,255,255,0.60)',

        borderWidth: 1.5,
        borderColor: 'rgba(243,243,243,0.70)',
        color: '#ffffff',
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
    },
    button: {
        marginTop: 20,
        width: 150,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1.5,
        borderColor: 'rgba(243,243,243,0.70)',
    },
    text: {
        fontSize: 18,
        color: "#24288B",
    }
});
