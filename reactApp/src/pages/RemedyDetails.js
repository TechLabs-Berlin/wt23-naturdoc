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
import { Box, IconButton, Alert } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


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

  // Format string to display in accordion
  function formatString(contentMatched) {
    return contentMatched ? contentMatched.toString().replace(/,/g, ", ") : null;
  }

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

              {/* Accordions to refactor */}
              <Box component="div" sx={{ py: 2 }}>
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Other common names'}
                      accordionDetails={formatString(remedy.commonNames)}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Activities'}
                      accordionDetails={formatString(remedy.medicinalUses)}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Uses in Clinical Medicine'}
                      accordionDetails={remedy.treatmentClinical}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Uses in Traditional Medicine'}
                      accordionDetails={remedy.treatmentTraditional}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Uses in Folk Medicine'}
                      accordionDetails={
                          remedy.treatmentFolk ? (
                              <>
                                  {remedy.treatmentFolk}
                                  <Alert
                                      component="span"
                                      variant="outlined"
                                      severity="warning"
                                      sx={{ mt: 4 }}
                                  >
                                      "Folk Medicine" is not supported by
                                      scientific data. Please be extra careful
                                      regarding the suggested use. If you are
                                      unsure, talk to a doctor about it
                                  </Alert>
                              </>
                          ) : null
                      }
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Contraindications'}
                      accordionDetails={remedy.contraindication}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Warnings'}
                      accordionDetails={remedy.warnings}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Adverse Effects'}
                      accordionDetails={remedy.adverseEffects}
                  />
                  <RemedyAccordion
                      remedy={remedy}
                      accordionSummary={'Posology / Dosage'}
                      accordionDetails={remedy.posology}
                  />
              </Box>

              <AddRating remedy={remedy} ratings={ratings} />
              <RatingList ratings={ratings} />
          </Box>
      </>
  );
}

export default LayoutHOC(RemedyDetails);
