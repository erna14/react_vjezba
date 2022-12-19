import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from './components/auth/Login'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
