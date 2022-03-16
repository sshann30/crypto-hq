import { Container } from "@material-ui/core";
import {
    //createTheme,
    makeStyles,
    //ThemeProvider,
} from "@material-ui/core/styles";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundImage: "url(./red.jpg)"
    },

    bannerContext: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: "25",
        justifyContent: "space-around",
    },
}));

const Banner = () => {

    const classes = useStyles();


    return (
        <div className={classes.banner}>
            <Container>
                className={classes.banner}
            </Container >
        </div>
    )
}

export default Banner
