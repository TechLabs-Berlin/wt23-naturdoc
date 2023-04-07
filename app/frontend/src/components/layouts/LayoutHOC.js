import BarNavBottom from "./BarNavBottom";
import { Box, CssBaseline, Container } from "@mui/material";

const LayoutHOC = (WrappedComponent) => {
  function WrapperComponent(props) {
    return (
      <>
      <Container component="section" maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
            marginBottom: 14,
          }}
          component="main"
        >
          <CssBaseline />
          <WrappedComponent {...props} />
        </Box>
        <BarNavBottom />
       </Container>
      </>
    );
  }
  return WrapperComponent;
}
export default LayoutHOC;
