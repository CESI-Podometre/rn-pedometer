import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import NewsCard from "../components/News/NewsCard";

export default function News() {
    const background = require('../assets/Backgrounds/background-news.png');

    const getNews = () => [
        { id: 1, title: "News 1", description: "Description 1" },
        { id: 2, title: "News 2", description: "Description 2" },
        { id: 3, title: "News 3", description: "Description 3" }
    ];

    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.text}>Actualités</Text>
                <Text>Ici vous retrouverez les dernières actualités de l'application</Text>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {getNews().map(news => (
                        <NewsCard key={news.id} params={{ title: news.title, description: news.description }} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    safeArea: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        height: '100%',
        gap: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',
        textTransform: 'uppercase',
    },
    scrollView: {
        flexGrow: 1,
        width: '100%',
        paddingBottom: 20,
    }
});
