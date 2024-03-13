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
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profil', headerShown: false, tabBarIcon: () => null }} />

                <Tab.Screen name="Progession" component={Progress} options={{ title: 'Progression', headerShown: false, tabBarIcon: () => null }} />

                <Tab.Screen name="Home" component={Home} options={{ title: 'Accueil', headerShown: false, tabBarIcon: () => null }} />

                <Tab.Screen name="Actus" component={News} options={{ title: 'Actus', headerShown: false, tabBarIcon: () => null }} />

                <Tab.Screen name="Parametres" component={Settings} options={{ title: 'Paramètres', headerShown: true, tabBarIcon: () => null }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;