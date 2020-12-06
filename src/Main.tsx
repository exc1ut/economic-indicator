import {
  AppBar,
  createMuiTheme,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import { Map, SideBar } from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useMap } from "./context/MapContext";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function Main() {
  const { selectedCountry } = useMap();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6">Communal Online</Typography>
        </Toolbar>
      </AppBar>

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
    </ThemeProvider>
  );
}

export default Main;
