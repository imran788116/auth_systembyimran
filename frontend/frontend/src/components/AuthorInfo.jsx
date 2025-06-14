import React from "react";

const AuthorInfo = () => {
  return (
    <div style={{
      position: "absolute",
      top: "10px",
      right: "20px",
      textAlign: "right"
    }}>
      <p><strong>Author:</strong> Md Imran Ahmed Laskar</p>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>{" | "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Insta</a>{" | "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>{" | "}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default AuthorInfo;
