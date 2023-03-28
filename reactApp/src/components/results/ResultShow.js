import { Link } from 'react-router-dom';
import RemedyRating from 'components/remedy/RemedyRating';
import {
    Card,
    Box,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ResultShow({ remedy }) {
    return (
        <>
            <Card sx={{ my: 2 }} variant="resultCard">
                <CardActionArea
                    component={Link}
                    to={`/remedies/${remedy._id}`}
                    key={remedy._id}
                >
                    <CardContent
                        sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                        {/* <RemedyIcon icon={remedy.icon} sx={{ width: 180 }} smallIcon /> */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: '1',
                                pl: 2,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    component="div"
                                    variant="remedyTitle"
                                    sx={{ fontSize: '1rem' }}
                                >
                                    {remedy.remedyName}{' '}
                                </Typography>
                            </Box>
                            <Box sx={{ flex: '1 0 auto' }}>
                                <RemedyRating remedy={remedy} summary />

                                <Typography sx={{ fontSize: '0.81rem' }}>
                                    Recommended use for:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: '600' }}
                                >
                                    {remedy.symptomsMatched.join(', ')}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ArrowForwardIosIcon sx={{}} fontSize="large" />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default ResultShow;
