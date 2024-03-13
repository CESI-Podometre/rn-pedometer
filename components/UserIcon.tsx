import {Image, Pressable, StyleSheet, View} from "react-native";

// @ts-ignore
export default function UserIcon({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/Avatars/astro_blue.png')} style={{width: 50, height: 50}}/>
                <></>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,


        position: 'absolute',
        top: 50,
        right: 20,
    },
})