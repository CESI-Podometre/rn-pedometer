import {SafeAreaView, ScrollView, View} from "react-native";
import Pool from "../components/Pool";
import DailyStepsChart from "../components/DailyStepsChart";
import ChallengeSlider from "../components/Challenges/ChallengeSlider";
import React from "react";
import NewsSlider from "../components/News/NewsSlider";
import PerformanceSlider from "../components/Performances/PerformanceSlider";

export default function Home() {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Pool/>

                <SafeAreaView style={{gap: 30}}>
                    <DailyStepsChart />
                    <PerformanceSlider/>
                    <ChallengeSlider/>
                    <NewsSlider/>
                </SafeAreaView>
            </ScrollView>

        </View>
    );
}