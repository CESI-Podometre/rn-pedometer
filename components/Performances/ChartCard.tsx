import {BarChart} from "react-native-gifted-charts";

const ChartCard = () => {
    const data = [
        {value: 2500, frontColor: '#006DFF',  label: 'Lun'},

        {value: 3500, frontColor: '#006DFF',  label: 'Mar'},

        {value: 4500, frontColor: '#006DFF',  label: 'Mer'},

        {value: 5200, frontColor: '#006DFF',  label: 'Jeu'},

        {value: 3000, frontColor: '#006DFF',  label: 'Ven'},

        {value: 5000, frontColor: '#006DFF',  label: 'Sam'},

        {value: 6000, frontColor: '#006DFF',  label: 'Dim'},
    ];

    return (
        <BarChart
            data={data}
            barWidth={10}
            width={1000}
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
    );
};

export default ChartCard;
