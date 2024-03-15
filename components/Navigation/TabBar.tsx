import {Image, Pressable, StyleSheet, Text, View} from "react-native";

// @ts-ignore
export default function TabBar({navigation}) {

    const HomeIcon = require('@assets/Planets/earth.png')
    const ProgressIcon = require('@assets/Icon/spaceship.png')
    const NewsIcon = require('@assets/Icon/news.png')


    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Image source={HomeIcon} style={styles.image}/>
                    <Text>Accueil</Text>
                </Pressable>
                {/*<Pressable onPress={() => navigation.navigate('Progress')} style={styles.button}>*/}
                {/*    <Image source={ProgressIcon} style={styles.image}/>*/}
                {/*    <Text>Progression</Text>*/}
                {/*</Pressable>*/}
                <Pressable onPress={() => navigation.navigate('News')} style={styles.button}>
                    <Image source={NewsIcon} style={styles.image}/>
                    <Text>Actus</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0)',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    navigation: {
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 60,

        borderRadius: 50,

        borderWidth: 1,
        borderColor: 'rgba(88,61,220,0.72)',

        // box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,

        backgroundColor: '#FFF',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'column',

        gap: 5
    },

    image: {
        width: 25,
        height: 25,
    }
});