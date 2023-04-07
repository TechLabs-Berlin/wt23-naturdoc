import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Rating,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import TimeAgo from './TimeAgo';

const RatingShow = ({ rating }) => {
  return (
    <>
      <List>
        <ListItem >
          <ListItemAvatar>
            <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography variant="reviewTitle">{rating.username}</Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  component={'span'}
                  variant="reviewTimestamp"
                >
                  <TimeAgo timestamp={rating.updated_at} />
                  <Rating
                    name="read-only"
                    size="small"
                    readOnly
                    precision={0.5}
                    icon={<CircleIcon fontSize="inherit" />}
                    emptyIcon={<CircleIcon fontSize="inherit" />}
                    value={rating.ratingValue}
                  ></Rating>
                </Typography>
              </>
            }
          />
        </ListItem>
        <Typography
          sx={{ fontWeight: 500, mb: 2 }}
          variant="reviewBody"
        >
          {rating.reviewName}
        </Typography>

        <Typography component="div" variant="reviewBody" sx={{  mb: 4 }}>
          {rating.reviewDescription}
        </Typography>
        <Divider sx={{ width: '100%' }} component="li" />
      </List>
    </>
  );
}

export default RatingShow;
