import React, {useState} from "react";
import classes from "./Form.module.css";
import SignUp from "../auth/SignUp";


function Form(props) {
    const signUpOption = props.signUp_option
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInputChangeHandler = event => {
        setUsername(event.target.value)
    }

    const passwordInputChangeHandler = event => {
        setPassword(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        console.log(username, password)
    }

    return (
        <div className={classes.container}>
            <div className={classes.auth_form}>
                <div className={classes.title_box}>
                    <span> {props.title} </span>
                </div>
                <form onSubmit={formSubmissionHandler}>
                    <input
                        type="hidden"
                        name='path'
                        value={props.value}
                    />
                    <div className={classes.auth_input}>
                        <label>Username</label>
                        <input
                            name='username'
                            type='text'
                            placeholder='Enter your username'
                            onChange={usernameInputChangeHandler}
                            value={username}
                        />
                    </div>
                    <div className={classes.auth_input}>
                        <label>Password</label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            onChange={passwordInputChangeHandler}
                            value={password}
                        />
                    </div>
                    <div className={classes.auth_action}>
                        <button type='submit'> Login </button>
                    </div>
                    {signUpOption && (
                        <div className={classes.signup_option}>
                            <span>
                                Not a member? <a href={'http://localhost:3000/signUp'}> Sign Up </a>
                            </span>
                        </div>
                    )}

                    {!signUpOption && (
                        <div className={classes.signup_option}>
                            <span>
                                Already a member? <a href={'http://localhost:3000/login'}> Login </a>
                            </span>
                        </div>
                    )}
                </form>
            </div>
        </div>

    )
}

export default Form