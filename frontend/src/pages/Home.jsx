import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubStats from "../components/GitHubStats";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* GitHub stats in top-left */}
      <div style={styles.github}>
        <GitHubStats />
      </div>

      {/* Logout in top-right */}
      <button style={styles.logout} onClick={handleLogout}>
        Logout
      </button>

      {/* Center card */}
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to the Auth System 👋</h1>
        <p style={styles.subtitle}>You've successfully logged in.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "20px",
  },
  github: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  logout: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "500px",
    width: "90%",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "10px",
  },
};

export default Home;
 