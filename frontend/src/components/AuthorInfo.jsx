import React from "react";

function AuthorInfo() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Made with 💻 by <strong>Imran</strong>
      </p>
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
  },
};

export default AuthorInfo;
 