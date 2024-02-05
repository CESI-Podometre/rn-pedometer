import {View, Text, Image} from "react-native";

export default function NewsCard() {
    return (
        <View>
            <Image source={require('../assets/Logos/logo.png')}/>

            <View>
                <Text>NewsCardTitle</Text>
                <Text>NewsCardDescription</Text>
            </View>
        </View>
    );
}