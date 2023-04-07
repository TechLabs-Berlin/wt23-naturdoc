import { Card, Skeleton, CardContent, Box } from "@mui/material";

const ResultShowSkeleton = () => {
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: 2,
              width: "100%",
            }}
          >
            <Skeleton sx={{ ml: 0.25 }} />
            <Skeleton sx={{ ml: 0.25 }} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ResultShowSkeleton;
