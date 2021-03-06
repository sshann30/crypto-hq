import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";

import { useNavigate } from 'react-router-dom';
// Navigate replaces this in react router dom v6
// import { useHistory } from "react-router-dom";

import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "#fe3746",
        fontFamily: "Roboto Mono",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fe3746",
        },
        type: "dark",
    },
});

function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();

    console.log(currency)

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        
                        <Typography
                            onClick={() => navigate.push("/")}
                            variant="h6"
                            className={classes.title}
                        >
                            Crypto HQ
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}


                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{ width: 100, height: 40, marginLeft: 15 }}

                            //logic for toggling between USD AND INR
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;