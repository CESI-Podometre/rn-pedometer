import {SafeAreaView, ScrollView, View} from "react-native";
import Pool from "@components/Pool";
// import StepsGaugeChart from "@components/DailyStepsChart";
import ChallengeSlider from "@components/Challenges/ChallengeSlider";
import NewsSlider from "@components/News/NewsSlider";
import PerformanceSlider from "@components/Performances/PerformanceSlider";
import StepsGaugeChart from "@components/DailyStepsChart";

export default function Home() {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Pool/>

                <SafeAreaView style={{gap: 30}}>
                    <StepsGaugeChart/>
                    <PerformanceSlider/>
                    <ChallengeSlider/>
                    <NewsSlider/>
                </SafeAreaView>

                <View style={{height: 100}}/>
            </ScrollView>

        </View>
    );
}