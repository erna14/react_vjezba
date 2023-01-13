import React, {Fragment} from "react";
import Input from "./Input";
import Post from "./Post";

function MiddleContainer() {
    return (
        <Fragment>
            <div>
                <Input/>
                <Post/>
            </div>
        </Fragment>
    )
}

export default MiddleContainer