import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500
  }
}));

export default function FilledTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-textarea"
        label="Ajouter votre phrase"
        placeholder="Phrase..."
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
    </form>
  );
}
