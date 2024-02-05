import {View, Text, Image} from "react-native";

export default function UserIcon() {
    return (
        <View>
            <Text>UserIcon</Text>
            <Image source={require('../assets/Logos/logo.png')}/>
        </View>
    );
}