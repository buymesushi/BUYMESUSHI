import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./NavBar.css";
import { Link, useScrollTrigger } from "@mui/material";
import { withRouter } from "react-router";
import RightMenu from "./Sections/RightMenu";
import MiddleMenu from "./Sections/MiddleMenu";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#fff",
        fontSize: "1.1rem",
    },
    colorText: {
        color: "#3b5998",
    },
    appbarTitle: {
        flexGrow: "1",
        fontSize: "23px",
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 5 }}>
            <ElevationScroll {...props}>
                <AppBar
                    position="fixed"
                    style={{ background: "#82C994", height: "71px" }}
                >
                    <Toolbar>
                        <div>
                            <Link href="/" sx={{ flexGrow: 3, ml: 17, mr: 2 }}>
                                <img
                                    className="navbar-logo"
                                    src="/img/kobe.png"
                                    alt="nada"
                                    style={{ height: "60px", width: "80px" }}
                                />
                            </Link>
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 3, mr: 30 }}
                            style={{ marginTop: "7px" }}
                        >
                            <h2 className={classes.appbarTitle}>
                                ㅋㅋ캠퍼스
                            </h2>
                        </Typography>

                        <MiddleMenu />
                        <RightMenu />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
    );
};

export default withRouter(NavBar);
