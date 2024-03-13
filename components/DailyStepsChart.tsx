import { View, StyleSheet, Text, Image } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import Counter from "./Counter";

const StepsGaugeChart = () => {

  const moon = require('@assets/Planets/moon.png');

  const totalStepsAim = 10000;
  const stepsDoneToday = 5000;
  const unseenSteps = 3000; // Replace with actual steps done today

  const remainingSteps = totalStepsAim - stepsDoneToday;

  const data = [
    {
      value: stepsDoneToday,
      color: '#005ca6', 
      text: '0',
      textColor: '#000000',
      shiftTextX: -8,
      shiftTextY: 110,
    },
    {
      value: remainingSteps,
      color: '#F3F3F3', 
      text: '10K',
      textColor: '#000000',
      shiftTextX: 8,
      shiftTextY: 110,
    },
    {
      value: unseenSteps,
      color: '#000000', 
    }
  ];

  const donutConfig = {
    initialAngle: Math.PI * 1.23, 
    donut: true,
    showGradient: true,
    gradientCenterColor: '#5AA8DF',
    innerRadius: 95,
    innerCircleColor: '#F3F3F3',
    showText: true,
    labelsPosition: 'onBorder' as const,
  };
  
  const centerLabelComponent = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.image} source={moon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Votre journée</Text>
      <PieChart data={data} centerLabelComponent={centerLabelComponent} {...donutConfig} />
      <View style={styles.bottomContainer}>
        <Counter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',

    position: 'relative'
  },
  bottomContainer: {
    width: 300,
    padding: 30,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    // top: -68,
    bottom: -18
  },
  text: {
    marginBottom: 10,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default StepsGaugeChart;