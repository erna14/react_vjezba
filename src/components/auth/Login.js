import React from "react";
import Form from "../Layout/Form";

function Login() {
    return (
        <Form
            signUp_option={true}
            title={"Login Form"}
            value={'login'}
        />
    )
}

export default Login