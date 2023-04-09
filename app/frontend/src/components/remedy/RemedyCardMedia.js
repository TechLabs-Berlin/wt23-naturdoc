import { CardMedia } from '@mui/material'
import ginseng from 'assets/remedies/ginseng-cover.jpeg'


const RemedyCardMedia = ({remedy}) => {

  return (
      <>
          <CardMedia
              component="img"
              variant="RemedyDetailsCardMedia"
              height="194"
              // As of 2023-04-06, the Data Science API does not have a way to provide a unique image for each remedy.
              // Therefore, the image is set as a placeholder by default, and as ginseng for the demo with Panax Ginseng (URL: /remedies/64283e77746bfc1f34fe60c4 ).
              image= {remedy.remedyName === "Panax ginseng" ? ginseng : "https://placehold.co/600x194"}
              alt="Remedy image"
          />
      </>
  );
}

export default RemedyCardMedia