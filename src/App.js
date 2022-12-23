import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import HomePage from "./components/auth/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path="signUp" element={<SignUp/>}/>
                <Route path="login" element={<Login/>}/>

                <Route path={'/'} element={<Navigate to={'/signUp'}/>}/>
                <Route path={"homePage"} element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
