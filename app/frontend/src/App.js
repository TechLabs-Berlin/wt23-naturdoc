// motion
import AnimatedRoutes from "components/layouts/AnimatedRoutes";
// Styles
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
              <AnimatedRoutes />
          </ThemeProvider>
      </>
  );
}

export default App;
