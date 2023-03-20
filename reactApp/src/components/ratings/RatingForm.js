import { Box, Rating, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

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

const reviewName = "review";

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function RatingForm({ open, handleClose, remedy }) {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const [formValues, setFormValues] = useState({});
  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRatingChange = (value, name) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    fetch("https://my-json-server.typicode.com/rjeantet/server-mock/ratings/", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(
      "formValues",
      formValues + " " + remedy.id + " " + remedy.title
    );
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>
            Share your experience with using {remedy.title}{" "}
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
                value={value}
                name={reviewName}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  handleRatingChange(value, reviewName);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box sx={{ ml: 2, display: "inline-flex" }}>
                  {labels[hover !== -1 ? hover : value]}
                </Box>
              )}
            </Box>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              name="title"
              onChange={handleTextFieldChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              name="description"
              onChange={handleTextFieldChange}
              rows={3}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="" onClick={(handleClose, handleSubmit)}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default RatingForm;
