import {View, Text, TextInput, Image, Button} from "react-native";

export default function Login() {
    return (
        <View>
            <View>
                <Image source={require('../assets/Logos/logo.png')}/>
                <Text>Logo</Text>
            </View>
            <View>
                <Text>Accès à l'application</Text>
                <TextInput onTextInput={text => console.log(text)}/>
                <Button title={"Connexion"}/>
            </View>
            <View>
                <Image source={require('../assets/Logos/logo.png')}/>
                <Image source={require('../assets/Logos/logo.png')}/>
                <Text>Logo</Text>
            </View>
        </View>
    );
}