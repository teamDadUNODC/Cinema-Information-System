import React from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Container className={classes.root}>
        <div className={classes.mainContainer}>
          <Typography
            variant="h1"
            className={classes.title}
            align="center"
            gutterBottom
            gutterTop
          >
            <Box component="span" className={classes.primaryText}>
              Get up-to-date on
            </Box>{" "}
            Your Favorite Movie
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            Track when your favorite movies and shows debut at your local
            cinema.
          </Typography>
          <div className={classes.createAccount}>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              align="center"
              color="primary"
              disableElevation
            >
              Create Account
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
