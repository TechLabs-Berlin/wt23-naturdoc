import { useState } from 'react';
import putRating from 'data/putRating';
import {
    Box,
    Card,
    Rating,
    Button,
    TextField,
    Typography
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const ratingValue = 'ratingValue';

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RatingForm = ({ remedy, open, handleClose }) => {
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
        console.log('result', result);

        handleClose();
        console.log(
            'Formvalues:' +
                JSON.stringify(formValues) +
                ' ' +
                remedy._id +
                ' ' +
                remedy.remedyName
        );
    };

    return (
        <>
            <Card variant="reviewCard" open={open} onClose={handleClose}>
                <Typography
                    variant="body1"
                    sx={{ textAlign: 'center' }}
                    paragraph
                >Write a review
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form>
                        <Box sx={{ display: 'flex', mx: 0, my:2 }}>
                            <Rating
                                max={5}
                                precision={0.5}
                                name={ratingValue}
                                getLabelText={getLabelText}
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={<CircleIcon fontSize="inherit" />}
                                onChange={(event, value) =>
                                    handleRatingChange(value, ratingValue)
                                }
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                            />
                            {ratingValue !== null && (
                                <Box sx={{ ml: 2, display: 'inline-flex' }}>
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
                        <Box sx={{ py: 2, px: 0, display:"flex", justifyContent: "flex-end" }}>
                            <Button onClick={handleClose} variant="outlined" sx={{mr: 2}}>
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Card>
        </>
    );
}

export default RatingForm;
