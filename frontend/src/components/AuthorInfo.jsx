import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function AuthorInfo() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Made with 💻 by <strong>Imran</strong>
      </p>
      <div style={styles.icons}>
        <a href="https://github.com/imran788116" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/imranlaskar788116/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_01imraaaan/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/imranlaskar788116" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "right",
    fontSize: "14px",
    color: "#333",
    paddingRight: "20px",
    paddingTop: "10px",
  },
  text: {
    margin: 0,
  },
  icons: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    fontSize: "20px",
  },
  icon: {
    textDecoration: "none",
    color: "#333",
  },
};

export default AuthorInfo;
