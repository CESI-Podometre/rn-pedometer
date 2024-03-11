import {View} from "react-native";
import Pool from "../components/Pool";
import Counter from "../components/Counter";
import ChallengeSlider from "../components/ChallengeSlider";
import React from "react";

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Pool />
            <Counter />
            <ChallengeSlider />
        </View>
    );
}