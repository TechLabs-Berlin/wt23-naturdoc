import { Box, CssBaseline } from "@mui/material";
// import Header from "./Header";
// import StickyFooter from "./Footer";
import BarNavBottom from "./BarNavBottom";

function LayoutHOC(WrappedComponent) {
  function WrapperComponent(props) {
    return (
      <>
        {/* <Header /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80vh",
            marginBottom: "64px",
          }}
          component="main"
        >
          <CssBaseline />
          <WrappedComponent {...props} />
        </Box>
        <BarNavBottom />
        {/* <StickyFooter /> */}
      </>
    );
  }
  return WrapperComponent;
}
export default LayoutHOC;
