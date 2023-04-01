import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// data
import getRemedy from "data/getRemedy";
import getRatings from "data/getRatings";
// components
import RemedyAccordion from "components/remedy/RemedyAccordion";
import RemedyRating from "components/remedy/RemedyRating";
import RatingForm from "components/ratings/RatingForm";
import RatingList from "components/ratings/RatingList";
import LayoutHOC from "components/layouts/LayoutHOC";
import AddRating from "components/ratings/AddRating";
// material-ui
import { useMediaQuery, useTheme, CardMedia, Box, IconButton, Typography, Alert } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function RemedyDetails() {
  const { id } = useParams();
  const [remedy, setRemedy] = useState({});
  const [ratings, setRatings] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", id);
    getRemedy(id).then((response) => {
      setRemedy(response);
    });
  }, [id]);

  useEffect(() => {
    console.log("useEffect", id);
    getRatings(id).then((response) => {
      setRatings(response);
    });
  }, [id]);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        {/* Remedy Image */}
        <Box component="div" sx={{ position: "relative", height: "194px" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://placehold.co/600x194"
            alt="Remedy image"
            sx={{ position: "absolute" }}
          />
        </Box>

        <Box component="div" sx={{ p: 2 }}>
          <Box component="div">
            <Typography variant="remedyTitle" component="h1">
              {remedy.remedyName}
            </Typography>
            {!remedy.ratingAverage ? (
              <Box component={"div"} sx={{ my: 2 }}>
                <Typography>
                  No ratings yet.{" "}
                  <Link remedy={remedy} onClick={handleClickOpen}>
                    Be the first to add one.
                  </Link>
                </Typography>
              </Box>
            ) : (
              <RemedyRating remedy={remedy} />
            )}

            {/* COMMENING OUT TO MATCH UX LATESTS CHANGES
            <Typography variant="body" sx={{ fontSize: "0.81rem" }}>
              {remedy.medicinalUses ? "Recommended use for:" : " "}
            </Typography> 
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              {formatString(remedy.medicinalUses)}
            </Typography>
            */}
          </Box>

          <Box component="div" sx={{ py: 2 }}>
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Other common names"}
              accordionDetails={formatString(remedy.commonNames)}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Activities"}
              accordionDetails={formatString(remedy.medicinalUses)}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Uses in Clinical Medicine"}
              accordionDetails={remedy.treatmentClinical}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Uses in Traditional Medicine"}
              accordionDetails={remedy.treatmentTraditional}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Uses in Folk Medicine"}
              accordionDetails=
                {remedy.treatmentFolk ?
                (<>
                {remedy.treatmentFolk}
                <Alert component="span" variant="outlined" severity="warning" sx={{mt:4 }}>
                "Folk Medicine" is not supported by scientific data. Please be extra careful regarding the suggested use. If you are unsure, talk to a doctor about it
                </Alert>
                </>)
                : (null)} 
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Contraindications"}
              accordionDetails={remedy.contraindication}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Warnings"}
              accordionDetails={remedy.warnings}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Adverse Effects"}
              accordionDetails={remedy.adverseEffects}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Posology / Dosage"}
              accordionDetails={remedy.posology}
            />
          </Box>

          <Box component="div" sx={{mt: 2}} id="ratings-section">
            <AddRating remedy={remedy} ratings={ratings}  handleClickOpen />
          </Box>
          <RatingList ratings={ratings} />
        </Box>

      <RatingForm
        key={remedy.id}
        remedy={remedy}
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
      /> 
    </>
  );
}

export default LayoutHOC(RemedyDetails);
