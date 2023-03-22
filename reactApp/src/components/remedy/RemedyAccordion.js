import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RemedyAccordion(remedy, accordionSummary, accordionDetails) {
  return (
    <>
      {remedy.accordionDetails === null ? (
        " "
      ) : (
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{remedy.accordionSummary}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ wordWrap: "break-word" }}>
            <Typography>{remedy.accordionDetails}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}

export default RemedyAccordion;
