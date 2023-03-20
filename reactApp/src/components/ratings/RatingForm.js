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

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function RatingForm({ open, handleClose }) {
  const [value, setValue] = useState();
  const [hover, setHover] = useState(-1);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Your experience matters!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here comes some text about why you should review the remedy.
          </DialogContentText>
          <Box sx={{ display: "flex", mx: 0, my: 4 }}>
            <Rating
              max={5}
              precision={0.5}
              defaultValue={Math.floor()}
              value={value}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
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
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="" onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RatingForm;
