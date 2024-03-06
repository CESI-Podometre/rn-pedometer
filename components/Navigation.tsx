import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Progress from "../pages/Progress";
import News  from "../pages/News";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerShown: false }} />
                <Tab.Screen name="Progession" component={Progress} options={{ title: 'Progress', headerShown: false }} />

                <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />

                <Tab.Screen name="Actus" component={News} options={{ title: 'News', headerShown: false }} />
                <Tab.Screen name="Parametres" component={Settings} options={{ title: 'Settings', headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;