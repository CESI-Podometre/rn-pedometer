import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Progress from "@screens/Progress";
import News from "@screens/News";
import {StyleSheet, View} from "react-native";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" sceneContainerStyle={{alignItems : 'center', justifyContent: 'center', backgroundColor: '#FFF'}} tabBar={TabBar} screenOptions={{headerShown: false}}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Accueil',
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profil',
                    }}
                />
                <Tab.Screen
                    name="Progress"
                    component={Progress}
                    options={{
                        tabBarLabel: 'Progression',
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                        tabBarLabel: 'Actus',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
})

export default Navigation;
