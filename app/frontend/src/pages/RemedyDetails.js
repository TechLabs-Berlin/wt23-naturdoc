import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { remedyTransition } from "assets/animations";
// data
import { getRemedy, getRatings } from "data/api";
// components 
import RemedyCardMedia from "components/remedy/RemedyCardMedia";
import RemedyHeader from "components/remedy/RemedyHeader";
import RemedyAccordion from "components/remedy/RemedyAccordion";
import AddRating from "components/ratings/AddRating";
import RatingList from "components/ratings/RatingList";
import BackButton from "components/layouts/BackButton";
import LayoutHOC from "components/layouts/LayoutHOC";
// material-ui
import { Box } from "@mui/material";


const RemedyDetails = () => {
  const { id } = useParams();
  const [remedy, setRemedy] = useState({});
  const [ratings, setRatings] = useState([]);

  // API call to get remedy details
  useEffect(() => {
    getRemedy(id).then((response) => {
      setRemedy(response);
    });
    getRemedy(id)
  },[id] );

  // API call to get ratings
  useEffect(() => {
    getRatings(id).then((response) => {
      setRatings(response);
    });
    getRatings(id)
  },[id] );

  return (
      <motion.div
          initial="in"
          animate="animate"
          exit="out"
          variants={remedyTransition}
      >

          <BackButton />

          <RemedyCardMedia remedy={remedy} />

          <Box component="div" sx={{ p: 2 }}>
              <RemedyHeader remedy={remedy} />
              <RemedyAccordion remedy={remedy} />
              <AddRating remedy={remedy} ratings={ratings} />
              <RatingList ratings={ratings} /> 
          </Box>
      </motion.div>
  );
}

export default LayoutHOC(RemedyDetails);
