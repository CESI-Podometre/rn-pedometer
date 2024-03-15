import {Image, StyleSheet, Text, View} from "react-native";
import * as Progress from 'react-native-progress';


export default function ChallengeCard({params}: { params: any}) {

    const title = params.title.slice(0, 20) + (params.title.length > 20 ? '...' : '');
    const description = params.description.slice(0, 50) + (params.description.length > 50 ? '...' : '');

    console.log('params challenge card', params)

    const progress = params.objective / params.progression > 1 ? 1 : params.objective / params.progression;

    return (
        <View style={styles.container}>
            <Image source={{uri: params.illustrationPath.startsWith('http') ? params.illustrationPath : 'https://www.storymakerapi.fr/' + params.illustrationPath}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Progress.Bar progress={progress} color={'#005ca6'} width={170}/>
            </View>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 190,
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