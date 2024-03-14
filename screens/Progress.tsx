import React, { useState, useEffect, useCallback } from 'react';
import { 
        ScrollView, 
        StyleSheet,
        Dimensions, 
        Animated,
        Text,
    } from 'react-native';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import TotalStepsPool from '../components/TotalStepsPool';
import LottieView from 'lottie-react-native';

const { height } = Dimensions.get('window');
const backgroundImageHeight = height * 2;
const backgroundImageWidth = Dimensions.get('window').width;

export default function Progress({ navigation }) {
    const isFocused = useIsFocused();
    const [backgroundOffsetY] = useState(new Animated.Value(0));
    const [showText, setShowText] = useState(false); 
    const [totalSteps, setTotalSteps] = useState(0);
    const [totalDistance, setTotalDistance] = useState(0);

    const getTotalSteps = async () => {
        const totalSteps = 0;
        setTotalSteps(totalSteps);
    }

    const resetBackgroundPosition = useCallback(() => {
        setShowText(false);
        Animated.timing(
            backgroundOffsetY,
            {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }
        ).start(() => { 
            startBackgroundScroll(); 
        });
    }, [backgroundOffsetY]);

    const startBackgroundScroll = () => {
        Animated.timing(
            backgroundOffsetY,
            {
                toValue: backgroundImageHeight - height,
                duration: 2500,
                useNativeDriver: true,
            }
        ).start(() => {
            setShowText(true); 
            getTotalSteps();
        });
    };

    useEffect(() => {
        const calculateTotalDistance = () => {
            const distance = totalSteps * 0.00074;
            setTotalDistance(parseFloat(distance.toFixed(3)));
        };
        calculateTotalDistance();
    }, [totalSteps]);

    useFocusEffect(
        useCallback(() => {
            resetBackgroundPosition();
            return () => {
                resetBackgroundPosition();
                setShowText(false); 
            };
        }, [])
    );

    useEffect(() => {
        if (isFocused) {
            resetBackgroundPosition();
        }
    }, [isFocused, resetBackgroundPosition]);

    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <TotalStepsPool />
            <Animated.Image
                source={require('../assets/Backgrounds/planets.png')} 
                style={[
                    styles.backgroundImage,
                    { height: backgroundImageHeight, width: backgroundImageWidth },
                    { transform: [{ translateY: backgroundOffsetY }] }
                ]}
                resizeMode="cover" 
            />
            <LottieView
                source={require(`../assets/Animations/rocket.json`)}
                autoPlay
                loop
                style={styles.animation}
            />
            {showText && <Text style={styles.text}>{totalDistance} km -&gt;</Text>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        bottom: -140,
        left: 0,
    },
    animation: {
        width: 300,
        height: 350,
        bottom: 60,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        left: 100,
        bottom: 230,
    },
});
