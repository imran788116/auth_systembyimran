// GitHubStats.js
import React from "react";

function GitHubStats() {
  const username = "imran788116"; // 🔁 Replace with yours

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>GitHub Stats</h3>
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
        alt="GitHub Stats"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  header: {
    marginBottom: "10px",
    color: "#333",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default GitHubStats;
