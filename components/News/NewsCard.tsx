import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";

export default function NewsCard({ params }: { params: any }) {
    const { width } = useWindowDimensions();



    // console.log('---------------------------', params);

    const title = params.title.slice(0, 20) + (params.title.length > 20 ? '...' : '');
    const description = params.description.slice(0, 50) + (params.description.length > 50 ? '...' : '');

    return (
        <Pressable onPress={() => console.log('Pressed')} style={[styles.container, { width: width - 20 }]}>
            <Image source={{uri: params.illustrationPath.startsWith('http') ? params.illustrationPath : 'https://www.storymakerapi.fr/' + params.illustrationPath}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#797979",
        backgroundColor: 'white',
        overflow: 'hidden',

    },
    image: {
        width: 100,
        height: 100,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 20,
        height: 100,
        width: 300,
    }
});
