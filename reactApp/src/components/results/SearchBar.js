import { useState, useEffect } from "react";
import { Paper, Container } from "@mui/material";
import { TextField, Autocomplete } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import getSymptoms from "data/getSymptoms";

function SearchBar({ onChange }) {
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
    const titles = value.map((item) => item.title);
    onChange(titles);

    console.log("User selected symptom(s):", value);
  };

  return (
    <Container sx={{ m: "0 auto" }} component="section" maxWidth="sm">
      <Paper component="article" sx={{ textAlign: "center" }}>
        <Autocomplete
          multiple
          options={options}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          autoComplete
          autoSelect
          autoHighlight
          clearOnBlur
          onChange={handleChange}
          renderOption={(props, option, { inputValue, selected }) => {
            const matches = match(option.title, inputValue, {
              insideWords: true,
            });
            const parts = parse(option.title, matches);

            return (
              <li {...props} key={option.id}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField {...params} label="Pick your symptoms" />
          )}
        />
      </Paper>
    </Container>
  );
}

export default SearchBar;
