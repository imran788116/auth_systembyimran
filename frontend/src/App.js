import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthorInfo from "./components/AuthorInfo";
import Register from "./components/Register";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* ✅ Show AuthorInfo ONLY on the Login route */}
      {location.pathname === "/" && (
        <div style={styles.authorWrapper}>
          <AuthorInfo />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
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

const styles = {
  authorWrapper: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 999,
  },
};

export default App;
