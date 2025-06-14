// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthorInfo from "./components/AuthorInfo";
import Register from "./components/Register"; // ✅ Correctly linked

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* ✅ Show AuthorInfo ONLY on the Login page */}
      {location.pathname === "/" && <AuthorInfo />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Register route */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
