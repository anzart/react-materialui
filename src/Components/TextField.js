import React, { useState } from "react";
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

function FilledTextFields() {
  const { container, textField } = useStyles();
  const [values, setValues] = useState({
    sentence: "",
    translateFr: "",
    translateEn: "",
    word: "",
    timeStamp: Date.now()
  });
  console.log(values);
  const handleChange = (prop) => ({ target: { value } }) => {
    setValues({ ...values, [prop]: value });
  };

  return (
    <>
      <form className={container} noValidate autoComplete="off">
        <TextField
          id="filled-textarea"
          label="Ajouter votre phrase"
          placeholder="Phrase..."
          className={textField}
          value={values.sentence}
          onChange={handleChange("sentence")}
          margin="normal"
          variant="filled"
          helperText="Une phrase en Kabyle"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" aria-label="Toggle password visibility">
                  <AddCircle />
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

export default FilledTextFields;

// function Hello() {
//   return (
//     <div>
//       <Text label="Azul" />
//       <Text label="Bonjour" />
//       <Text label="Ansuf" />
//     </div>
//   );
// }

// function Text(props) {
//   const [label, setLabel] = useState("World");

//   return (
//     <>
//       <h1>Hello {label}</h1>
//       <button onClick={(_) => setLabel(props.label)}>OK</button>
//     </>
//   );
// }

/* const age = 23;
const monAge = "monAgeEst";
const name = "Abdenour";

const obj = {
  age,
  [monAge]: "lamriw",
  monAge,
  name
};

console.log(obj); */
