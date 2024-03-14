import ChallengeCard from "./ChallengeCard";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useUserContext} from "@context/UserContext";
import {Key, useEffect, useState} from "react";
import {useChallengeContext} from "@context/ChallengeContext";

export default function ChallengeSlider() {

    const userContext = useUserContext();
    const challengeContext = useChallengeContext()

    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        axios.get('https://www.storymakerapi.fr/api/v1/challenges/user-content', {
            headers: {
                Authorization: `Bearer ${userContext.userToken}`
            }
        }).then((response) => {
                setChallenges(response.data);
                challengeContext.setChallenges(response.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vos Challenges</Text>
            <ScrollView horizontal>
                {challengeContext.challenge.map((challenge: any, index: Key | null | undefined) => {
                    return (
                        <ChallengeCard key={index} params={challenge}/>
                    )
                })}
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
        fontSize: 20,
        fontWeight: '300',
        textTransform: 'uppercase',
        color: 'black',
    },
});
