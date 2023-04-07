import { HashLink as Link } from 'react-router-hash-link';
// Material UI
import { Box, Rating, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


const RemedyRating = ({ remedy, summary }) => {
    if (summary) {
        return (
            <>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                    {remedy.ratingAverage ? (
                        <>
                            <Rating
                                name="read-only"
                                size="small"
                                readOnly
                                sx={{ mr: 0.5 }}
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={
                                    <CircleIcon
                                        fontSize="inherit"
                                        sx={{ color: '#ffffff' }}
                                    />
                                }
                                value={remedy.ratingAverage}
                            />
                            <Box component="span">
                                <b>{remedy.ratingAverage}</b> (
                                {remedy.totalNumberofRatings})
                            </Box>
                        </>
                    ) : (
                        'No ratings yet'
                    )}
                </Box>
            </>
        );
    } else {
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: 52 }}>
                        {' '}
                        <b>{remedy.ratingAverage}</b>
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            pl: 1.5,
                            lineHeight: 1,
                        }}
                    >
                        <Box sx={{}}>
                            <Rating
                                max={5}
                                precision={0.5}
                                readOnly
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={<CircleIcon fontSize="inherit" />}
                                value={remedy.ratingAverage}
                            />
                            <Box component={'div'} sx={{ fontSize: 14 }}>
                                <Link
                                    component={Link}
                                    smooth
                                    to={`/remedies/${remedy._id}#ratings-section`}
                                >
                                    {' '}
                                    {remedy.totalNumberofRatings}
                                    {remedy.totalNumberofRatings === 1
                                        ? ' review'
                                        : ' reviews'}
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
};

export default RemedyRating;
