import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// data
import getRemedy from "data/getRemedy";
import getRatings from "data/getRatings";
// components
import RemedyCardMedia from "components/remedy/RemedyCardMedia";
import RemedyHeader from "components/remedy/RemedyHeader";
import RemedyAccordion from "components/remedy/RemedyAccordion";
import AddRating from "components/ratings/AddRating";
import RatingList from "components/ratings/RatingList";
import LayoutHOC from "components/layouts/LayoutHOC";
// material-ui
import { Box, IconButton} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";;


const RemedyDetails = () => {
  const { id } = useParams();
  const [remedy, setRemedy] = useState({});
  const [ratings, setRatings] = useState([]);
  let navigate = useNavigate();

  // API call to get remedy details
  useEffect(() => {
    getRemedy(id).then((response) => {
      setRemedy(response);
    });
  }, [id]);

  // API call to get ratings
  useEffect(() => {
    getRatings(id).then((response) => {
      setRatings(response);
    });
  }, [id]);

  return (
      <>
          <Box>
              <IconButton variant="outlined" onClick={() => navigate(-1)}>
                  <ChevronLeftIcon fontSize="large" />
              </IconButton>
          </Box>

          <RemedyCardMedia remedy={remedy} />

          <Box component="div" sx={{ p: 2 }}>
              <RemedyHeader remedy={remedy} />
              <RemedyAccordion remedy={remedy} />
              <AddRating remedy={remedy} ratings={ratings} />
              <RatingList ratings={ratings} /> 
          </Box>
      </>
  );
}

export default LayoutHOC(RemedyDetails);
