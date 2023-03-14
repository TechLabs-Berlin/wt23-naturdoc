import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import StickyFooter from "./Footer";

function LayoutHOC(WrappedComponent) {
  function WrapperComponent(props) {
    return (
      <>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
          }}
          component="main"
        >
          <CssBaseline />
          <WrappedComponent {...props} />
        </Box>
        <StickyFooter />
      </>
    );
  }
  return WrapperComponent;
}
export default LayoutHOC;
