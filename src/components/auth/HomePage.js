import React, {Fragment} from "react";
import classes from "../UI/HomePage.module.css";
import Header from "../Layout/Header";
import LeftContainer from "../Layout/LeftContainer";
import MiddleContainer from "../Layout/MiddleContainer";

function HomePage() {
    return (
        <Fragment>
            <Header />
            <div className={classes.container}>
                <LeftContainer />
                <MiddleContainer/>

            </div>

        </Fragment>
    )
}

export default HomePage;