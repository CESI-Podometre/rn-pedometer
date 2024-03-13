import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Login from "@screens/Login";
import {useUserContext} from "./context/UserContext";
import UserIcon from "@components/UserIcon";
import {View} from "react-native";

export default function App() {

    const userContext = useUserContext();
    const userToken: string = userContext.userToken;

    return (
        userToken === '' ? <Login/> :
            <>
                <Navigation/>
                <UserIcon navigation={null}/>
            </>
    );
}
