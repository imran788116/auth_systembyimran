import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function AuthorInfo() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Made by <strong>Imran</strong>
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
    fontSize: "22px", // sets icon size
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default AuthorInfo;
 