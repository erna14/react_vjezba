import React, { useState } from 'react';
import classes from './Form.module.css';
import { apiCall } from '../../utils/api';


function Form(props) {
    const isLoginPage = props.signUp_option;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInputChangeHandler = event => {
        setUsername(event.target.value);
    };

    const passwordInputChangeHandler = event => {
        setPassword(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        const requestBody = { username, password };


        let url = isLoginPage ? '.../login' : '.../register';

        apiCall(url, 'POST', requestBody)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
            });
    };

    return (
        <div className={classes.container}>
            <div className={classes.auth_form}>
                <div className={classes.title_box}>
                    <span> {props.title} </span>
                </div>
                <form onSubmit={formSubmissionHandler}>
                    <input
                        type="hidden"
                        name="path"
                        value={props.value}
                    />
                    <div className={classes.auth_input}>
                        <label>Username</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            onChange={usernameInputChangeHandler}
                            value={username}
                        />
                    </div>
                    <div className={classes.auth_input}>
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={passwordInputChangeHandler}
                            value={password}
                        />
                    </div>
                    <div className={classes.auth_action}>
                        <button type="submit"> {isLoginPage ? 'Login' : 'Sign Up'} </button>
                    </div>
                    {isLoginPage && (
                        <div className={classes.signup_option}>
                            <span>
                                Not a member? <a href={'http://localhost:3000/signUp'}> Sign Up </a>
                            </span>
                        </div>
                    )}

                    {!isLoginPage && (
                        <div className={classes.signup_option}>
                            <span>
                                Already a member? <a href={'http://localhost:3000/login'}> Login </a>
                            </span>
                        </div>
                    )}
                </form>
            </div>
        </div>

    );
}

export default Form;
