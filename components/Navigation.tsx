import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
                <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;