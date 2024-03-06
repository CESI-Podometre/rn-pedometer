import {View, Text, Image, Button, SafeAreaView, StyleSheet, TextInput} from "react-native";

export default function Settings() {
    const LogoCHY = require('../assets/Logos/logo-chu-colored.png');
    const LogoDEPS = require('../assets/Logos/logo-chu.png');

    const Avatar = {uri: 'https://www.pngkey.com/png/full/114-1149878_planet-clipart-transparent-background-planet-clipart.png'};

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={Avatar} style={{width: 100, height: 100}}/>
                <Button title="Change Avatar"/>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Username</Text>
                <TextInput style={{borderWidth: 1, borderColor: 'black', width: 200}}/>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={{borderWidth: 1, borderColor: 'black', width: 200}}/>
                <TextInput style={{borderWidth: 1, borderColor: 'black', width: 200}}/>
            </View>

            <Button title={"Save"}/>

            <View style={styles.images}>
                <Image source={LogoCHY} style={{width: 100, height: 100}}/>
                <Image source={LogoDEPS} style={{width: 100, height: 100}}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        gap: 30,
    },

    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',

        textTransform: 'uppercase',
    },

    images: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});