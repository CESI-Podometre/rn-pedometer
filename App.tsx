import React from 'react';
import Navigation from './components/Navigation';
import Login from "./pages/Login";

const isUserLoggedIn = false;
export default function App() {
    return (
        <Navigation/>

        // <Login/>

        // {isUserLoggedIn && <Navigation/>}
    );
}
