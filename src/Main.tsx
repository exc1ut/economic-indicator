import {
  AppBar,
  Button,
  Card,
  createMuiTheme,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import {
  Map,
  SideBar,
  SelectionChart,
  Register,
  Login,
  MyChart,
} from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useMap } from "./context/MapContext";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useUserData } from "./context/UserContext";
import styles from "./styles/styles.module.scss";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function Main() {
  const history = useHistory();

  const { selectedCountry } = useMap();
  const { data } = useUserData();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h6">
            Economic indicator
          </Typography>
          {data == null ? (
            <>
              <Button color="inherit" onClick={() => history.push("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => history.push("/register")}>
                Register
              </Button>
            </>
          ) : (
            <Typography variant="h6">{data.name}</Typography>
          )}
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          {selectedCountry === null ? (
            <Grid container spacing={1}>
              (
              <Grid item xs={12} spacing={1}>
                <Map />
              </Grid>
              )
            </Grid>
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={8} spacing={1}>
                <Map />
              </Grid>
              <Grid item xs={4} spacing={1}>
                <SideBar />
              </Grid>
            </Grid>
          )}
          <Grid container spacing={1}>
            <Grid item xs={8} className={styles.styledCard}>
              <SelectionChart />
            </Grid>
            <Grid item xs={4}>
              <MyChart />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default Main;
