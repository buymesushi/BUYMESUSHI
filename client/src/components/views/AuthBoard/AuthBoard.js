import React from "react";
import { withRouter } from "react-router-dom";
import AuthBoardPost from "./Sections/AuthBoardPost";
import AuthBoardFeedsCard from "./Sections/AuthBoardFeedsCard";

import "./AuthBoard.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/authBoard/bg9.jpg"
        })`,
        backgroundRepeat: "repeat",
    },
}));

const AuthBoard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="authBoard-container">
                <React.Fragment>
                    <AuthBoardPost />
                    <AuthBoardFeedsCard />
                </React.Fragment>
            </div>
        </div>
    );
};

export default withRouter(AuthBoard);
