import {View, Text, Image, Button} from "react-native";
import UserIcon from "../components/UserIcon";

export default function Settings() {
    return (
        <View>
            <View>
                <UserIcon/>
                <Button title="Log Out" onPress={() => {}}/>
            </View>


            <Text>Settings</Text>
            <Image source={require('../assets/Logos/logo.png')}/>
        </View>
    );
}