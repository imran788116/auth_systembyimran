
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register button clicked");

    // Validate Gmail format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      console.log("Sending to backend:", { name, email, password });

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, {

        name,
        email,
        password,
      });

      alert("Registration successful! Please login.");
      navigate("/");
    } catch (err) {
  console.error(err.response?.data || err.message);
  alert(err.response?.data?.msg || "Error registering user");
}

  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email (must be Gmail)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
          <p style={styles.linkText}>
            Already have an account?{" "}
            <a href="/" style={styles.link}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    marginBottom: "25px",
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#764ba2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  linkText: {
    marginTop: "10px",
    fontSize: "14px",
    textAlign: "center",
  },
  link: {
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Register;
 
