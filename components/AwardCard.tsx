import {Image, StyleSheet, Text, View} from "react-native";

export default function AwardCard({params}: { params: { id : number, name: string, image: any, unlocked : boolean } }) {
    const award = params;

    return (
        <View key={award.id} style={styles.awardCard}>
            <Image source={award.image} style={[styles.awardImage, !award.unlocked && styles.lockedImage]}/>
            <Text>{award.unlocked ? award.name : "???"}</Text>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    awardCard: {
        alignItems: 'center',
        gap: 10,

        width: 150,
    },

    lockedImage: {
        opacity: 0.4,
    },

    awardImage: {
        width: 75,
        height: 75,

        resizeMode: 'cover',

        borderRadius: 50,
    },
});