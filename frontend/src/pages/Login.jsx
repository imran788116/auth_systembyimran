import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      alert("Login success!");
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/register")} style={styles.registerBtn}>
        Register
      </button>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p
            style={styles.resetLink}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "16px",
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
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  resetLink: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#764ba2",
    textDecoration: "underline",
    cursor: "pointer",
  },
  registerBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Login;
