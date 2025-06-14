import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthorInfo from "../components/AuthorInfo"; // Author Info

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login Response:", res.data);
      alert("Login Successful");
      navigate("/home");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={styles.container}>
      {/* ✅ Top Bar: Register (left) + AuthorInfo (right) */}
      <div style={styles.topBar}>
        <button onClick={() => navigate("/register")} style={styles.registerBtn}>
          Register
        </button>
        <div style={styles.author}>
          <AuthorInfo />
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
          <p style={styles.linkText}>
            Forgot your password?{" "}
            <a href="/forgot-password" style={styles.link}>Reset it</a>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    padding: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  topBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    alignItems: "center",
  },
  registerBtn: {
    padding: "10px 16px",
    backgroundColor: "#fff",
    color: "#764ba2",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  author: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    marginTop: "100px",
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

export default Login;
