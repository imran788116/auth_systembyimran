import React from "react";
import githubIcon from "./icons/github.png";
import linkedinIcon from "./icons/linkedin.png";
import instagramIcon from "./icons/instagram.png";
import facebookIcon from "./icons/facebook.png";

function AuthorInfo() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Made by <strong>Imran</strong>
      </p>
      <div style={styles.icons}>
        <a href="https://github.com/imran788116" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/imranlaskar788116/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
        </a>
        <a href="https://www.instagram.com/_01imraaaan/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" style={styles.icon} />
        </a>
        <a href="https://www.facebook.com/imranlaskar788116" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" style={styles.icon} />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "right",
    fontSize: "14px",
    color: "#fff",
  },
  text: {
    margin: 0,
    marginBottom: "5px",
  },
  icons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  icon: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
};

export default AuthorInfo;
