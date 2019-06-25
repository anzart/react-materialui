import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { AddCircle } from "@material-ui/icons";
import SimpleCard from "./Card";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 500,
    display: "flex",
    flexFlow: "column wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
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
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-textarea"
          label="Ajouter votre phrase"
          placeholder="Phrase..."
          className={classes.textField}
          value={values.phrase}
          onChange={handleChange("phrase")}
          margin="normal"
          variant="filled"
          helperText="Une phrase en Kabyle"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton className={classes.content} edge="end" aria-label="Toggle password visibility">
                  <AddCircle className={classes.icon} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
      <h1>{values.phrase}</h1>
      <SimpleCard />
    </>
  );
}
