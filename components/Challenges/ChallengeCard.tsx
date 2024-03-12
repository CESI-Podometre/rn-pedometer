import {Image, StyleSheet, Text, View} from "react-native";

export default function ChallengeCard({params}: { params: { title: string, description: string } }) {
    const image = require('../../assets/Backgrounds/background-ranking.png');
    const title = params.title.slice(0, 20) + (params.title.length > 20 ? '...' : '');
    const description = params.description.slice(0, 50) + (params.description.length > 50 ? '...' : '');

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 190,
        height: 250,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderColor: "#797979",
        borderWidth: 1,
        borderRadius: 20,

        overflow: 'hidden',

        marginLeft: 10,
        marginRight: 10,
    },

    image: {
        width: "100%",
        height: '50%',

        resizeMode: 'cover',
    },

    textContainer: {
        height: '50%',
        width: '100%',

        padding: 10,
        justifyContent: 'space-evenly',
    }
});