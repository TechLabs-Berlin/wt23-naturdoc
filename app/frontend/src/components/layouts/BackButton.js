import { useNavigate } from 'react-router';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const BackButton = () => {

    let navigate = useNavigate();

    return (
        <Box>
            <IconButton variant="outlined" onClick={() => navigate(-1)}>
                <ChevronLeftIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default BackButton;
