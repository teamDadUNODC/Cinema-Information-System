import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6)
  },
  mainContainer: {
    marginTop: theme.spacing(2)
  },
  title: {
    fontWeight: "bold"
  },
  toolbar: theme.mixins.toolbar,
  primaryText: {
    color: theme.palette.primary.main
  },
  createAccount: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center"
  }
}));
