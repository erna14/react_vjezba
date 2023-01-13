import React from "react";
import classes from "../UI/Header.module.css";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <header className={classes.nav_bar}>
            <h2>HOME PAGE</h2>

            <button className={classes.logout_btn} onClick={() => {
                localStorage.removeItem('userData');
                navigate("/login")
            }}> Logout
            </button>

        </header>
    )
}

export default Header