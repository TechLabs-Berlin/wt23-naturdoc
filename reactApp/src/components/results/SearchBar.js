import { useState, useEffect } from "react";
// dependencies
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
// data
import getSymptoms from "data/getSymptoms";
// Material UI
import { Paper, Container, TextField, Autocomplete  } from "@mui/material";



const  SearchBar= ({ onChange }) => {
  const [options, setOptions] = useState([]);

  // get the complete list of symptoms from the API
  useEffect(() => {
    getSymptoms()
      .then((response) => {
        setOptions(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // update the selected value to pass it back to App via onChange
  const handleChange = (event, value) => {
    const symptomNames = value.map((item) => item.symptomName);
    onChange(symptomNames);

    console.log("User selected symptom(s):", value);
  };

  return (
    <Container sx={{ m: "16px auto" }} component="section" maxWidth="sm">
      <Paper component="article" sx={{ textAlign: "center" }}>
        <Autocomplete
          multiple
          options={options}
          isOptionEqualToValue={(option, value) => option.symptomName === value.symptomName}
          getOptionLabel={(option) => option.symptomName}
          filterSelectedOptions
          autoComplete
          openOnFocus
          autoSelect
          autoHighlight
          clearOnBlur
          onChange={handleChange}
          renderOption={(props, option, { inputValue, selected }) => {
            const matches = match(option.symptomName, inputValue, {
              insideWords: true,
            });
            const parts = parse(option.symptomName, matches);

            return (
              <li {...props} key={option._id}>
                <div>
                  {parts.map((part, index) => {
                    const id = `${option._id}-part-${index}`;
                    return (
                    <span
                      key={id}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                    )
                  })}
                </div>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField autoFocus {...params} label="Pick your symptoms" />
          )}
        />
      </Paper>
    </Container>
  );
}

export default SearchBar;
