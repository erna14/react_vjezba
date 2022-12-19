import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="signUp" element={<SignUp/>}/>
                <Route index={true} path="login" element={<Login/>}/>
                <Route path={'/'} element={<Navigate to={'/login'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
