import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubStats from "../components/GitHubStats"; // ✅ Ensure this file exists

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* Top-left GitHub stats */}
      <div style={styles.github}>
        <GitHubStats />
      </div>

      {/* Top-right Logout */}
      <button style={styles.logout} onClick={handleLogout}>
        Logout
      </button>

      {/* Welcome text in center */}
      <h1 style={styles.welcome}>Welcome to the Auth System 👋</h1>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    background: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  logout: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#764ba2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  github: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  welcome: {
    fontSize: "28px",
    color: "#333",
    fontWeight: "bold",
  },
};

export default Home;
