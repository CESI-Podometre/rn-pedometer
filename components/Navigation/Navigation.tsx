import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@screens/Home";
import Profile from "@screens/Profile";
// import Progress from "@screens/Progress"; forbidden ne pas le mettre c'est cassé
import News from "@screens/News";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
            <Tab.Navigator initialRouteName="Home" tabBar={TabBar} screenOptions={{ headerShown: false }}>
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
                {/*<Tab.Screen*/}
                {/*    name="Progress"*/}
                {/*    component={Progress}*/}
                {/*    options={{*/}
                {/*        tabBarLabel: 'Progression',*/}
                {/*    }}*/}
                {/*/>*/}
                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                        tabBarLabel: 'Actus',
                    }}
                />
            </Tab.Navigator>
    );
};

export default Navigation;