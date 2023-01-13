import React, {useState} from "react";
import classes from "../UI/Input.module.css";
import {apiCall} from "../../utils/api";

function Input(props) {
    const [content, setContent] = useState('');

    const contentInputChangeHandler = event => {
        setContent(event.target.value);
    }

    const inputContentSubmitHandler = event => {
        event.preventDefault();
        console.log(content)

        let user = props.user;

        let url = 'http://localhost:8000/api/posts';
        let requestBody = {content, user}

        apiCall(url, 'POST', requestBody)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
            })
            .catch((err)=> console.log(err));

        setContent('');
    }

    return (
        <form method="post" className={classes.create_post}>
            <input
                name = "content"
                type = "text"
                placeholder = "What's on your mind?"
                onChange = {contentInputChangeHandler}
                value = {content}
            />
            <button type="submit" className={classes.post_button} onClick={inputContentSubmitHandler}> Post </button>
        </form>
    )
}

export default Input