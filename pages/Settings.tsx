import {Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";

import { useUserContext } from "../context/UserContext";

export default function Settings() {
    const LogoCHY = require('../assets/Logos/logo-chu-colored.png');
    const LogoDEPS = require('../assets/Logos/logo-deps.png');

    const Avatar = require('../assets/Avatars/astro_blue.png');

    const userContext = useUserContext();

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.avatarSelector}>
                <Image source={Avatar} style={{width: 100, height: 100}}/>
                <Pressable style={styles.button}>
                    <Text>Change Avatar</Text>
                </Pressable>
            </View>

            {/*<View style={styles.container}>*/}
            {/*    <Text style={styles.text}>Username</Text>*/}
            {/*    <TextInput style={styles.input}/>*/}
            {/*</View>*/}

            {/*<View style={styles.container}>*/}
            {/*    <Text style={styles.text}>Password</Text>*/}
            {/*    <TextInput style={styles.input}/>*/}
            {/*    <TextInput style={styles.input}/>*/}
            {/*</View>*/}

            {/*<Pressable style={styles.button}>*/}
            {/*    <Text>Save Changes</Text>*/}
            {/*</Pressable>*/}

            <View style={styles.links}>

                <Pressable style={styles.pressable}>
                    <Text>Conditions Générales d'Utilisation</Text>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Text>Politique de confidentialité</Text>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Text>Mentions légales</Text>
                </Pressable>

                <Button title={"Logout"} color={"red"} onPress={() => userContext.removeUserId()}/>

            </View>


            <View style={styles.images}>
                <Image source={LogoCHY} style={styles.image}/>
                <Image source={LogoDEPS} style={styles.image}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        gap: 30,

        alignItems: 'center',
    },

    container: {
        width: "90%",
        gap: 5,
    },

    links: {
        width: "90%",
        alignItems: 'flex-start',
        gap: 15,
    },

    avatarSelector: {
        width: "80%",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 30,
    },

    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',

        textTransform: 'uppercase',
    },

    button: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
    },

    pressable: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
    },

    images: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});