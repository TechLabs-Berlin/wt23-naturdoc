import { useState } from "react";
import SearchBar from "./components/results/SearchBar";
import SearchContent from "data/api";
import ResultList from "./components/results/ResultList";

function App() {
  const [remedies, setRemedies] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchContent(term);

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
