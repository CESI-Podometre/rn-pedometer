import {Image, StyleSheet, Text, View} from "react-native";

export default function ChallengeCard({params}: { params: any}) {

    const title = params.title.slice(0, 20) + (params.title.length > 20 ? '...' : '');
    const description = params.description.slice(0, 50) + (params.description.length > 50 ? '...' : '');

    return (
        <View style={styles.container}>
            <Image source={{uri: params.badge.iconPath.startsWith('http') ? params.badge.iconPath : 'https://www.storymakerapi.fr/' + params.badge.iconPath}} style={styles.image}/>
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

        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 0.3,
        // shadowRadius: 20,

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