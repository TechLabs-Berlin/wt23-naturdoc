import { useState } from "react";

// Components
import LayoutHOC from "components/layouts/LayoutHOC";
import SearchBar from "components/results/SearchBar";
import ResultList from "components/results/ResultList";
// Data
import getRemedyRecommendation from "data/getRemedyRecommendation";


const Search = () => {
  const [remedies, setRemedies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = async (terms) => {
    terms.length ? setLoading(true) : setLoading(false);
    const result = await getRemedyRecommendation(terms);
    const remediesToShow = result ? result.slice(0, 10) : [];
    console.log("Selected symptom(s)", terms);
    if (!terms.length) {
      setRemedies([]);
      console.log("no data found");
    } else {
      setRemedies(remediesToShow);
      setLoading(false);
    }
    console.log("Matching recommendations:", remediesToShow);
  };
  return (
    <>
      <SearchBar onChange={handleChange} />
      {remedies ? <ResultList remedies={remedies} loading={loading} /> : null}
    </>
  );
};

export default LayoutHOC(Search);
