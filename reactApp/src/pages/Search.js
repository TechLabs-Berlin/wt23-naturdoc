import { useState } from "react";

// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import SearchBar from "components/results/SearchBar";
import ResultList from "components/results/ResultList";
// Data
import getRemedyRecommendation from "data/getRemedyRecommendation";
// Styles
import "assets/App.css";

const Search = () => {
  const [remedies, setRemedies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = async (terms) => {
    const result = await getRemedyRecommendation(terms);
    const remediesToShow = result ? result.slice(0, 10) : [];
    console.log("Do a search with selected symptom(s)", terms);
    if (!terms.length) {
      setRemedies([]);
      console.log("no data found");
    } else {
      setRemedies(remediesToShow);
      setLoading(false);
    }
    console.log("Display remedy recommendations:", remediesToShow);
  };
  return (
    <>
      <SearchBar onChange={handleChange} />
      {remedies ? <ResultList remedies={remedies} loading={loading} /> : null}
    </>
  );
};

export default LayoutHOC(Search);
