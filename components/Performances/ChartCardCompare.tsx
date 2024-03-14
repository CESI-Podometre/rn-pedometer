import { BarChart } from "react-native-gifted-charts";
import {View} from "react-native";

const ChartCard = () => {
    const data = [
        {value: 2500, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Lun'},
        {value: 2400, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 3500, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Mar'},
        {value: 3000, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 4500, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Mer'},
        {value: 4000, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 5200, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Jeu'},
        {value: 4900, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 3000, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Ven'},
        {value: 2800, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 5000, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Sam'},
        {value: 4800, frontColor: '#7a19ce', gradientColor: '#93FCF8'},

        {value: 6000, frontColor: '#009FFF', gradientColor: '#009FFF', spacing: 6, label:'Dim'},
        {value: 5800, frontColor: '#7a19ce', gradientColor: '#93FCF8'},
    ];

    return(
        <View
            style={{
                // margin: 10,
                borderRadius: 20,
                // backgroundColor: '#232B5D',
            }}>
            <View style={{padding: 20, alignItems: 'center'}}>
                <BarChart
                    data={data}
                    barWidth={10}
                    initialSpacing={10}
                    // spacing={14}
                    // barBorderRadius={4}
                    // showGradient
                    yAxisThickness={0}
                    xAxisType={'dashed'}
                    xAxisColor={'lightgray'}
                    yAxisTextStyle={{color: "#3f3f3f"}}
                    // stepValue={1000}
                    // maxValue={6000}
                    noOfSections={6}
                    yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
                    labelWidth={40}
                    xAxisLabelTextStyle={{color: "#3f3f3f", textAlign: 'center'}}
                    // showLine
                    // lineConfig={{
                    //     color: '#F29C6E',
                    //     thickness: 3,
                    //     curved: true,
                    //     hideDataPoints: true,
                    //     shiftY: 20,
                    //     initialSpacing: -30,
                    // }}
                />
            </View>
        </View>
  );
};

export default ChartCard;
