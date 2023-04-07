import {Typography, Accordion, AccordionSummary, AccordionDetails, Box, Alert } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RemedyAccordion = ({remedy}) => {

    // Format string to display in accordion
    function formatString(contentMatched) {
        return contentMatched
            ? contentMatched.toString().replace(/,/g, ', ')
            : null;
    }

    // Alert specific for folk medicine
    const alertFolkDetails = () =>
        remedy.treatmentFolk ? (
            <>
                {remedy.treatmentFolk}
                <Alert
                    component="span"
                    variant="outlined"
                    severity="warning"
                    sx={{ mt: 4 }}
                >
                    "Folk Medicine" is not supported by scientific data. Please
                    be extra careful regarding the suggested use. If you are
                    unsure, talk to a doctor about it
                </Alert>
            </>
        ) : null;
        
    // Array of objects to map through
    const accordionRemedies = [
        {
            accordionSummary: 'Other common names', 
            accordionDetails: remedy.commonNames,
        },
        {
            accordionSummary: 'Activities',
            accordionDetails: remedy.medicinalUses,
        },
        {
            accordionSummary: 'Uses in Clinical Medicine',
            accordionDetails: remedy.treatmentClinical,
        },   
        {
            accordionSummary: 'Uses in Traditional Medicine',
            accordionDetails: remedy.treatmentTraditional,
        },   
        {
            accordionSummary: 'Uses in Folk Medicine',
            accordionDetails: remedy.treatmentFolk ,
        },  
        {
            accordionSummary: 'Contraindications',
            accordionDetails: remedy.Contraindications ,
        },  
        {
            accordionSummary: 'Warnings',
            accordionDetails: remedy.Warnings ,
        },  
        {
            accordionSummary: 'Adverse Effects',
            accordionDetails: remedy.adverseEffects ,
        },  
        {
            accordionSummary: 'Posology / Dosage',
            accordionDetails: remedy.posology ,
        },  
      ];

  return (
      <>
          <Box component="div" sx={{ py: 2 }}>
              {accordionRemedies.map((item) => {
                const id = item.accordionSummary;
                return (
                    item.accordionDetails ? (
                      <Box key={id}>
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                              >
                                  <Typography
                                      variant="remedyTitle"
                                      sx={{ fontSize: 18 }}
                                  >
                                      {item.accordionSummary}
                                  </Typography>
                              </AccordionSummary>

                              <AccordionDetails
                                  sx={{ wordWrap: 'break-word', pt: 2 }}
                              >
                                  <Typography component="span">
                                      {item.accordionSummary ===
                                      'Uses in Folk Medicine'
                                          ? alertFolkDetails()
                                          : formatString(item.accordionDetails)}
                                  </Typography>
                              </AccordionDetails>
                          </Accordion>
                      </Box>
                  ) : null
                );
                })
            } 
          </Box>
      </>
  );
};

export default RemedyAccordion;
