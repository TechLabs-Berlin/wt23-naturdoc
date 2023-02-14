import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchContent from "./api";
import ResultList from "./components/ResultList";

function App() {
  const [remedies, setRemedies] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchContent(term);

    setRemedies(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ResultList remedies={remedies} />
    </div>
  );
}

export default App;
