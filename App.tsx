import React from 'react';
import Navigation from './components/Navigation';
import Login from "./pages/Login";
import {useUserContext} from "./context/UserContext";

export default function App() {

    const userContext = useUserContext();
    const userId : string = userContext.userId;

    return (
        userId === '' ? <Login/> : <Navigation/>
    );
}
