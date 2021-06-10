import React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/Cinema-Logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="CinemaX"
              height="48px"
              className={classes.image}
            />{" "}
            CinemaX
          </Typography>

          {location.pathname !== "/login" && location.pathname !== "/signup" && (
            <Box component="ul" display="flex">
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/watch">
                  Watch
                </Link>
              </Typography>
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/get-tickets">
                  Get Tickets
                </Link>
              </Typography>
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/premiere">
                  Premiere
                </Link>
              </Typography>
            </Box>
          )}

          <div className={classes.grow} />

          {(location.pathname === "/" ||
            location.pathname === "/watch" ||
            location.pathname === "/get-tickets" ||
            location.pathname === "/premiere") && (
            <div className={classes.button}>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                color="primary"
                disableElevation
                className={classes.menuButton}
              >
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                className={classes.menuButton}
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
