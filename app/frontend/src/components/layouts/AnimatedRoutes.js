import { Routes, Route, useLocation } from "react-router-dom";
// Pages
import Home from "pages/Home";
import Search from "pages/Search";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/SignUp";
import RemedyDetails from "pages/RemedyDetails";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/remedies/:id" element={<RemedyDetails />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes