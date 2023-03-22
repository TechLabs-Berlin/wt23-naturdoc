import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// data
import getRemedy from "data/getRemedy";
import getUserRatings from "data/getUserRatings";
// components
import RemedyIcon from "components/remedy/RemedyIcon";
import RemedyAccordion from "components/remedy/RemedyAccordion";
import RatingForm from "components/ratings/RatingForm";
import RatingList from "components/ratings/RatingList";
import LayoutHOC from "components/layouts/LayoutHOC";
// material-ui
import {
  CardMedia,
  Box,
  Container,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RemedyRating from "components/remedy/RemedyRating";

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
    getUserRatings(id).then((response) => {
      setRatings(response);
    });
  }, [id]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
        }}
        component="main"
      >
        <Container sx={{ pl: 0, pr: 0 }} component="section" maxWidth="sm">
          <Paper>
            <Box>
              <IconButton variant="outlined" onClick={() => navigate(-1)}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ position: "relative", height: "215px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://placehold.co/600x194"
                alt="Remedy image"
                sx={{ position: "absolute" }}
              />
              <Box sx={{ position: "absolute", top: "156px", left: "16px" }}>
                <RemedyIcon remedy={remedy} smallIcon={false} />
              </Box>
            </Box>

            <Box sx={{ p: 2, pb: 4, pt: -2 }}>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }} component="h1">
                {remedy.remedyName}
              </Typography>
              {!remedy.ratingAverage ? (
                <Box component={"div"}>
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

              <Typography variant="body" color="text.secondary">
                <b>Best use for: </b>
                {remedy.symptomsMatched}
              </Typography>
            </Box>

            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Other common names"}
              accordionDetails={remedy.commonNames}
            />
            <RemedyAccordion
              remedy={remedy}
              accordionSummary={"Activities"}
              accordionDetails={remedy.medicinalUses}
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
              accordionDetails={remedy.treatmentFolk}
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Write a Review
            </Button>
            <RatingList ratings={ratings} />
          </Paper>{" "}
        </Container>
      </Box>
      <RatingForm
        key={remedy.id}
        remedy={remedy}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default LayoutHOC(RemedyDetails);