import React, {createContext, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import HomePage from "./components/auth/HomePage";
import {UserContext} from "./components/Help/Context";
import {store} from "./app/store";
import {Provider} from "react-redux";

function App() {
    const [user, setUser] = useState(null);

    const userHandler = () => {
        setUser()
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
            {/*<UserContext.Provider value={{user, setUser}}>*/}
                <Routes>
                    <Route index={true} path="/login" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path={"/homePage"} element={<HomePage/>}/>
                    <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                </Routes>
            {/*</UserContext.Provider>*/}
            </Provider>
        </BrowserRouter>
    );
}

export default App;
