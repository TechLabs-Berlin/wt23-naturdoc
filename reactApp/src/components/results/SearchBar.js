import { Paper, Container, Typography } from "@mui/material";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <Container sx={{ m: "auto", mb: 1 }} component="section" maxWidth="sm">
      <Paper component="article" sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
          What are your symptoms?
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <input
            value={term}
            onChange={handleChange}
            placeholder="type something here"
          />
        </form>
      </Paper>
    </Container>
  );
}

export default SearchBar;
