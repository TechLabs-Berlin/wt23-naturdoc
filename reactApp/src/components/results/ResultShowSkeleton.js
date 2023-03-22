import { Skeleton } from "@mui/material";
import { Card, CardContent, Box } from "@mui/material";

function ResultShowSkeleton() {
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Skeleton variant="rectangular" width={40} height={40} />
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
