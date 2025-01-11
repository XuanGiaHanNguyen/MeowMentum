import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";

function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>

  );
}

export default App;
