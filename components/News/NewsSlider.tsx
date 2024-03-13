import NewsCard from "./NewsCard";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import axios from "@utils/axios";

export default function NewsSlider() {

    const getNews = () => {
        return [
            {id: 1, title: "News 1", description: "Description 1"},
            {id: 2, title: "News 2", description: "Description 2"},
            {id: 3, title: "News 3", description: "Description 3"}
        ];

        // return axios.get('https://www.storymakerapi.fr/api/v1/news')
        //     .then(response => response.data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Actualités :</Text>
            <ScrollView horizontal>
                {getNews().map(news => <NewsCard key={news.id}
                                                 params={{title: news.title, description: news.description}}/>)}
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
        fontSize: 24,
        fontWeight: '300',
        color: 'black',
    },
});

