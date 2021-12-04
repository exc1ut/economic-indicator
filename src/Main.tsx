import {
  AppBar,
  Avatar,
  Box,
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
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: #fff;
`;

const theme = createMuiTheme({});

function Main() {
  const history = useHistory();

  const { selectedCountry } = useMap();
  const { data } = useUserData();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box style={{ backgroundColor: "#F8F9FC" }}>
        <StyledAppBar color="default" position="static">
          <Toolbar>
            <Box flexGrow={1}>
              <img height={25} src="/logo.png" />
            </Box>
            {data == null ? (
              <Box>
                <Button color="inherit" onClick={() => history.push("/login")}>
                  Login
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/register")}
                >
                  Register
                </Button>
              </Box>
            ) : (
              <Box
                width={200}
                display={"flex"}
                alignItems={"center"}
                style={{ gap: "10%" }}
              >
                <Typography
                  style={{ color: "#11263C", fontWeight: 600 }}
                  variant="h6"
                >
                  {data.name}
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
              </Box>
            )}
          </Toolbar>
        </StyledAppBar>

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
                <Grid item xs={9} spacing={1}>
                  <Map />
                </Grid>
                <Grid item xs={3} spacing={1}>
                  <SideBar />
                </Grid>
              </Grid>
            )}
            <Grid container spacing={1}>
              <Grid item xs={6} className={styles.styledCard}>
                <SelectionChart />
              </Grid>
              <Grid item xs={6}>
                <MyChart />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
