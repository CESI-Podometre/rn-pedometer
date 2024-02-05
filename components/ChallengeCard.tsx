import {View, Text, Image} from "react-native";

export default function ChallengeCard() {
    return (
        <View>
            <Image source={require('../assets/Logos/logo.png')}/>
            <Text>ChallengeCardTitle</Text>
            <Text>ChallengeCardDescription</Text>
        </View>
    );
}