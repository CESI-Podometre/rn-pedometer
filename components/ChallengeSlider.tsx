import ChallengeCard from "./ChallengeCard";
import {View, Text, ScrollView, StyleSheet} from "react-native";

export default function ChallengeSlider() {

    const getChallenges = () => {
        const challenges = [{id: 1, title: "Challenge 1"}, {id: 2, title: "Challenge 2"}, {id: 3, title: "Challenge 3"}];
        return challenges;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Challenge Slider</Text>
            <ScrollView horizontal={true}>
                {getChallenges().map(challenge => <ChallengeCard key={challenge.id} params={{title: challenge.title, description: "Description"}}/>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        gap: 30,
    },

    text: {
        fontSize: 24,
        fontWeight: '300',
        color: 'black',

        textTransform: 'uppercase',
    },
});
