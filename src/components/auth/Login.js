import React, {useEffect, useState} from 'react';
import Form from '../Layout/Form';
import {useNavigate} from "react-router-dom";

function Login() {
    const [spinner, setSpinner] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("userData");

        if (token === null) {
            setSpinner(false);
        } else {
            navigate("/homepage");
        }

    }, []);


    if (spinner) {
        return <p>Spinner... Please wait..</p>
    }

    return (
        <Form
            signUp_option={true}
            title={'Login Form'}
            value={'login'}
        />
    );
}

export default Login;
