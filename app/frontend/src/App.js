import { Routes, Route } from "react-router-dom";
// Routes
import Home from "pages/Home";
import Search from "pages/Search";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/SignUp";
import RemedyDetails from "pages/RemedyDetails";
// Styles
import theme from "assets/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/remedies/:id" element={<RemedyDetails />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
