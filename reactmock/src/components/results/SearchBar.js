import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <h1>Type in your symptom</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          placeholder="type something here"
        />
      </form>
    </div>
  );
}

export default SearchBar;
