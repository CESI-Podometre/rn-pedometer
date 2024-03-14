import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native'; 
import { Planets } from '../assets/Backgrounds/Svg';

const { height } = Dimensions.get('window');
const backgroundImageHeight = height * 2;

export default function Progress() {
    const [currentAnimation, setCurrentAnimation] = useState('rocket');
    const background = require('../assets/Backgrounds/background-progress.png');

    const handleSwitchAnimation = () => {
        setCurrentAnimation(currentAnimation === 'rocket' ? 'rocket-wavy' : 'rocket');
    };
    
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Planets style={[styles.image, { height: backgroundImageHeight }]} />
                <View style={styles.container}>
                    <LottieView
                        source={require(`../assets/Animations/rocket.json`)}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    animation: {
        position: 'absolute',
        width: 400,
        height: 400,
        bottom: 50,
    },
});
