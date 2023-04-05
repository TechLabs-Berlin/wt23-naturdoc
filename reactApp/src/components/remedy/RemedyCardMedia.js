import { CardMedia } from '@mui/material'


const RemedyCardMedia = ({remedy}) => {
  return (
      <>
          <CardMedia
              component="img"
              variant="RemedyDetailsCardMedia"
              height="194"
              image="https://placehold.co/600x194"
              alt="Remedy image"
          />
      </>
  );
}

export default RemedyCardMedia