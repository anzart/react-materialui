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
  const [values, setValues] = React.useState({
    phrase: ""
  });
  console.log(values.phrase);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-textarea"
        label="Ajouter votre phrase"
        placeholder="Phrase..."
        multiline
        className={classes.textField}
        value={values.phrase}
        onChange={handleChange("phrase")}
        margin="normal"
        variant="filled"
        helperText="Phrase Kabyle"
      />
      <h1>{values.phrase}</h1>
    </form>
  );
}
