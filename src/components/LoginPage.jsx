import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = {
      student: { email: "student@example.com", password: "123456" },
      teacher: { email: "teacher@example.com", password: "123456" },
      admin: { email: "admin@example.com", password: "123456" },
      employer: { email: "employer@example.com", password: "123456" },
    };

    if (email === users[role].email && password === users[role].password) {
      alert("Login successful!");
      navigate(`/${role}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo */}
        <img src="/abc.jpeg" alt="School Logo" style={styles.logo} />

        <h2 style={styles.title}>Login  THE   Truckingvault</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {/* Role selection buttons */}
          <div style={styles.roleContainer}>
            {["student", "teacher", "admin", "employer"].map((r) => (
              <button
                type="button"
                key={r}
                style={{
                  ...styles.roleButton,
                  backgroundColor: role === r ? "#2563eb" : "#ccc",
                  color: role === r ? "white" : "black",
                }}
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #3b82f6)", // modern gradient background
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    width: "350px",
    textAlign: "center",
  },
  logo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 20px",
    border: "4px solid #2563eb",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: "25px",
    color: "#1e3a8a",
    fontSize: "24px",
    fontWeight: "700",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s all",
  },
  roleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  roleButton: {
    flex: 1,
    margin: "0 3px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: "600",
  },
};

export default LoginPage;
