import { Box, Rating, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import putRating from "data/putRating";
import CircleIcon from "@mui/icons-material/Circle";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const ratingValue = "ratingValue";

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function RatingForm({ remedy, open, handleClose, fullScreen }) {
  const [hover, setHover] = useState(-1);

  const [formValues, setFormValues] = useState({});

  const handleRatingChange = (value, name) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const result = putRating(remedy, formValues);
    console.log("result", result);

    handleClose();
    console.log(
      "Formvalues:" +
        JSON.stringify(formValues) +
        " " +
        remedy._id +
        " " +
        remedy.remedyName
    );
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <form>
          <DialogTitle>
            Share your experience with using {remedy.remedyName}{" "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your experience matters! Here comes some text about why you should
              review the remedy.
            </DialogContentText>
            <Box sx={{ display: "flex", mx: 0, my: 4 }}>
              <Rating
                max={5}
                precision={0.5}
                // value={value}
                name={ratingValue}
                getLabelText={getLabelText}
                icon={<CircleIcon fontSize="inherit" />}
                emptyIcon={
                  <CircleIcon fontSize="inherit" sx={{ color: "#eee" }} />
                }
                onChange={(event, value) =>
                  handleRatingChange(value, ratingValue)
                }
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {ratingValue !== null && (
                <Box sx={{ ml: 2, display: "inline-flex" }}>
                  {labels[hover !== -1 ? hover : ratingValue]}
                </Box>
              )}
            </Box>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              name="reviewName"
              onChange={handleTextFieldChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              name="reviewDescription"
              onChange={handleTextFieldChange}
              rows={3}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default RatingForm;
