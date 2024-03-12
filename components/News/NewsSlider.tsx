import NewsCard from "./NewsCard";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Fragment} from "react";

export default function NewsSlider() {

    const getNews = () => {
        return [
            {id: 1, title: "News 1", description: "Description 1"},
            {id: 2, title: "News 2", description: "Description 2"},
            {id: 3, title: "News 3", description: "Description 3"}
        ];
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Actualités</Text>
            <ScrollView horizontal>
                {getNews().map(news => <NewsCard key={news.id}
                                                 params={{title: news.title, description: news.description}}/>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,
    },

    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',

        textTransform: 'uppercase',
    },
});

