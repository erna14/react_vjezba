import React from "react";
import classes from "../UI/LeftContainer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../features/auth/authSlice";

function LeftContainer() {
    const username = useSelector(selectCurrentUser)

    const welcome_msg = username ? `Welcome ${username}!` : 'Welcome!'

    return (
        <div className={classes.container}>
            <div className={classes.welcome_msg}>
                <p>{welcome_msg}</p>
            </div>
            <div className={classes.sidebar}>
                <a className={classes.sidebar_link_active}>
                    {/*<span> <FontAwesomeIcon icon={['fas', 'house']} className={classes.icon}/> </span>*/} <h3> Home </h3>
                </a>
                <a className={classes.sidebar_link}>
                    {/*<span> <FontAwesomeIcon icon={['fas', 'bell']}/></span>*/} <h3> Notifications </h3>
                </a>
                <a className={classes.sidebar_link}>
                    {/*<span> <FontAwesomeIcon icon={['fas', 'envelope']}/>*/} {/*</span>*/} <h3> Messages </h3>
                </a>
                <a className={classes.sidebar_link}>
                    {/*<span> <FontAwesomeIcon icon={['fas', 'gear']}/>*/} {/*</span>*/} <h3> Settings </h3>
                </a>
            </div>
        </div>
    )
}

export default LeftContainer