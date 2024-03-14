import React, {useEffect, useState} from "react";
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import NewsCard from "@components/News/NewsCard";
import axios from "axios";
import {useUserContext} from "@context/UserContext";
import {useNewsContext} from "@context/NewsContext";

export default function News() {
    const background = require('@assets/Backgrounds/background-news.png');

    const userContext = useUserContext();
    const newsContext = useNewsContext()

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://www.storymakerapi.fr/api/v1/articles/user-content', {
            headers: {
                Authorization: `Bearer ${userContext.userToken}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setNews(response.data);
                newsContext.setNews(response.data);
            }
        });
    }, []);

    return (
        <ImageBackground source={background} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.text}>Actualités</Text>
                <Text>Ici vous retrouverez les dernières actualités de l'application</Text>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {newsContext.news.map((news: any, index: React.Key | null | undefined) => {
                        return (
                            <NewsCard key={index} params={news}/>
                        )
                    })}
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
