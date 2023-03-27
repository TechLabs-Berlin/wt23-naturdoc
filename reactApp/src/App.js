import { Routes, Route } from "react-router-dom";
// Pages
import Home from "pages/Home";
import About from "pages/About";
import Search from "pages/Search";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/SignUp";
import RemedyDetails from "pages/RemedyDetails";
import DesignSystem from "pages/DesignSystem";
// Styles
import "assets/App.css";
import theme from "assets/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/design-system" element={<DesignSystem />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/remedies/:id" element={<RemedyDetails />}></Route>
        </Routes>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
