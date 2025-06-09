import React from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CourcesPage from "./pages/CourcesPage";
import ContactPage from "./pages/ContactPage";
import AddmissionPage from "./pages/AddmissionPage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/> }/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/cources" element={<CourcesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/addmission" element={<AddmissionPage/>}/>
      </Routes>
    </Router>
  )
}
export default App