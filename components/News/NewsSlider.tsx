import NewsCard from "./NewsCard";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {Key, useEffect, useState} from "react";
import {useUserContext} from "@context/UserContext";
import {useNewsContext} from "@context/NewsContext";


export default function NewsSlider() {

    const userContext = useUserContext();
    const newsContext = useNewsContext();

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://www.storymakerapi.fr/api/v1/articles/user-content', {
            headers: {
                Authorization: `Bearer ${userContext.userToken}`
            }
        }).then((response) => {
            if (response.status === 200) {
                newsContext.setNews(response.data);
                setNews(response.data);
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Actualités</Text>
            <ScrollView horizontal>
                {newsContext.news.slice(0, 3).map((news: any, index: Key | null | undefined) => {
                    return (
                        <NewsCard key={index} params={news}/>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        gap: 20,
    },

    text: {
        fontSize: 20,
        fontWeight: '300',
        textTransform: 'uppercase',
        color: 'black',
    },
});

