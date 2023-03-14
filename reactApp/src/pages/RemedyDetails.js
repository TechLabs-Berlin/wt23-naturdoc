import { CardMedia } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemedyIcon from "components/remedy/RemedyIcon";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getRemedy from "data/getRemedy";

function RemedyDetails() {
  const { id } = useParams();
  const [remedy, setRemedy] = useState({});

  useEffect(() => {
    console.log("useEffect", id);
    getRemedy(id).then((response) => {
      setRemedy(response);
    });
  }, [id]);

  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image="https://placehold.co/600x194"
        alt="Remedy image"
      />
      <Typography variant="h4" component="h1" gutterBottom>
        <RemedyIcon remedy={remedy} /> <p>{remedy?.title}</p>
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Other Common names</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Asya Sutasi, Pennywort, Marsh, Pegaga, Brahmi</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Uses in clinical medicine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Treatment of wounds, burns, and ulcerous skin ailments, and
            prevention ofkeloid and hypertrophic scars. Extracts of the plant
            have been employed to treat second- and third-degree burns. Extracts
            have been used topically to accelerate healing, particularly in
            cases of chronic postsurgical andpost-trauma wounds. Extracts have
            been administered orally to treat stress- induced stomach and
            duodenal ulcers
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Uses in traditional medicine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Herba Centellae is reported to be used in the treatment of leprous
            ulcers and venous disorders.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Dosage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dried drug for infusion; galenic preparations for oral
            administration. Powder or extract (liquid or ointment) for topical
            application. Package in well-closed, light-resistant containers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Contraindications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Allergy to plants of the Apiaceae family.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Warning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No information available.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RemedyDetails;
