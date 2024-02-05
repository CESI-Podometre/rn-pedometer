import {View, Text, SafeAreaView} from "react-native";
import UserIcon from "./components/UserIcon";
import ChallengeSlider from "./components/ChallengeSlider";
import Mainpage from "./components/Mainpage";
import Counter from "./components/Counter";

export default function App() {
    return (
        <SafeAreaView>
            <Text>App</Text>
            <Counter/>
        </SafeAreaView>
    );
}
