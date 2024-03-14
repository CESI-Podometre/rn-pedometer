import React, { useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native'; 

const { height, width } = Dimensions.get('window');
const screenHeight = height;
const backgroundImageHeight = screenHeight * 2;

export default function Progress() {
    const [currentAnimation, setCurrentAnimation] = useState('rocket');
    
    const handleSwitchAnimation = () => {
        setCurrentAnimation(currentAnimation === 'rocket' ? 'rocket-wavy' : 'rocket');
    };
    
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <ImageBackground 
                source={require('../assets/Backgrounds/planets.png')} 
                style={[styles.backgroundImage, { height: backgroundImageHeight }]}
                resizeMode="cover" 
            >
                <LottieView
                    source={require(`../assets/Animations/rocket.json`)}
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    backgroundImage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 400,
        height: 400,
        marginBottom: 50,
    },
});
