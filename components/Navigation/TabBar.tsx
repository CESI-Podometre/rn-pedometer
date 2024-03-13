import {Pressable, StyleSheet, Text, View} from "react-native";

// @ts-ignore
export default function TabBar({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text>Accueil</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profile')} style={styles.button}>
                    <Text>Profil</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Progress')} style={styles.button}>
                    <Text>Progression</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('News')} style={styles.button}>
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
        height: 50,

        borderRadius: 50,

        borderWidth: 1,
        borderColor: 'rgba(88,61,220,0.72)',

        backgroundColor: '#FFF',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});