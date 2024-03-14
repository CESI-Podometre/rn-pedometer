import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation/Navigation';
import Login from "@screens/Login";
import { useUserContext } from "@context/UserContext";
import UserIcon from "@components/UserIcon"; // Import UserIcon component

export default function App() {
    const userContext = useUserContext();
    const userToken: string = userContext.userToken;

    return (
        <NavigationContainer theme={{colors: {background: 'white'}}}>
            {userToken === '' ? <Login /> :
                <>
                    <Navigation />
                    <UserIcon />
                </>
            }
        </NavigationContainer>
    );
}
