import { useState } from "react";

// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import SearchBar from "components/results/SearchBar";
import ResultList from "components/results/ResultList";
// Data
import getRemedyRecommendation from "data/getRemedyRecommendation";
// Styles
import "assets/App.css";

const Home = () => {
  const [remedies, setRemedies] = useState([]);

  const handleChange = async (terms) => {
    const result = await getRemedyRecommendation(terms);
    console.log("Do a search with selected symptom(s)", terms);
    if (!terms.length) {
      setRemedies([]);
      console.log("no data found");
    } else {
      setRemedies(result);
    }
    console.log("Display remedy recommendations:", result);
  };
  return (
    <>
      <SearchBar onChange={handleChange} />
      <ResultList remedies={remedies} />
    </>
  );
};

export default LayoutHOC(Home);
