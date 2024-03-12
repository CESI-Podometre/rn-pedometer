import {SafeAreaView, ScrollView, View} from "react-native";
import Pool from "../components/Pool";
import StepsGaugeChart from "../components/StepsGaugeChart";
import ChallengeSlider from "../components/ChallengeSlider";
import React from "react";
import NewsSlider from "../components/News/NewsSlider";
import PerformanceSlider from "../components/Performances/PerformanceSlider";
import DashedBorderCounter from "../components/DashedBorderCounter";

export default function Home() {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Pool/>

                <SafeAreaView style={{gap: 30}}>
                    <StepsGaugeChart />
                    <DashedBorderCounter />
                    <PerformanceSlider/>
                    <ChallengeSlider/>
                    <NewsSlider/>
                </SafeAreaView>
            </ScrollView>

        </View>
    );
}