import {Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";

export default function Settings() {
    const LogoCHY = require('../assets/Logos/logo-chu-colored.png');
    const LogoDEPS = require('../assets/Logos/logo-chu.png');

    const Avatar = {uri: 'https://www.pngkey.com/png/full/114-1149878_planet-clipart-transparent-background-planet-clipart.png'};

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.avatarSelector}>
                <Image source={Avatar} style={{width: 100, height: 100}}/>
                <Pressable style={styles.button}>
                    <Text>Change Avatar</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
            </View>

            <Pressable style={styles.button}>
                <Text>Save Changes</Text>
            </Pressable>

            <View style={styles.links}>

                <Button title={"Delete Account"} color={"red"}/>

                <Button title={"Conditions Générales d'Utilisation"}/>

                <Button title={"Politique de confidentialité"}/>

                <Button title={"Mentions légales"}/>

            </View>


            <View style={styles.images}>
                <Image source={LogoCHY} style={{width: 100, height: 100}}/>
                <Image source={LogoDEPS} style={{width: 100, height: 100}}/>
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
    },

    avatarSelector: {
        width: "80%",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 30,
    },

    input: {
        width: "100%",
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',

        borderRadius: 10,
        overflow: 'hidden',
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

    images: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});