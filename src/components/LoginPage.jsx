import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [bgIndex, setBgIndex] = useState(0);
  const [rotate, setRotate] = useState(false);

  const backgrounds = [
    "#4f46e5", "#3b82f6", "#10b981", "#f59e0b", "#ef4444",
    "#8b5cf6", "#ec4899", "#14b8a6", "#22d3ee", "#f97316"
  ];

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Logo rotate animation
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setRotate((r) => !r);
    }, 2000);
    return () => clearInterval(logoInterval);
  }, []);

  const users = {
    student: { email: "student@example.com", password: "123456" },
    teacher: { email: "teacher@example.com", password: "123456" },
    admin: { email: "admin@example.com", password: "123456" },
    employer: { email: "employer@example.com", password: "123456" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === users[role].email && password === users[role].password) {
      alert("Login successful!");
      navigate(`/${role}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        background: `linear-gradient(135deg, ${backgrounds[bgIndex]}, ${backgrounds[(bgIndex + 1) % backgrounds.length]})`,
      }}
    >
      <div style={styles.cardWrapper}>
        <div style={styles.card}>
          <img
            src="/abc.jpeg"
            alt="Logo"
            style={{
              ...styles.logo,
              transform: rotate ? "rotate(360deg) scale(1.05)" : "rotate(0deg) scale(0.95)",
              transition: "transform 1.5s ease-in-out",
            }}
          />
          <h2 style={styles.title}>
            Login <span style={{ color: "#2563eb" }}>THE TruckingVault</span>
          </h2>
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
            <div style={styles.roleContainer}>
              {["student", "teacher", "admin", "employer"].map((r) => (
                <button
                  type="button"
                  key={r}
                  style={{
                    ...styles.roleButton,
                    backgroundColor: role === r ? "#2563eb" : "#ccc",
                    color: role === r ? "#fff" : "#000",
                  }}
                  onClick={() => setRole(r)}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
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
    transition: "background 2s ease",
  },
  cardWrapper: {
    padding: "4px",
    borderRadius: "20px",
    background: "linear-gradient(90deg, #f97316, #ef4444, #10b981, #3b82f6, #8b5cf6)",
    backgroundSize: "400% 400%",
    animation: "moveGradient 8s linear infinite",
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "18px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  logo: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #2563eb",
    marginBottom: "15px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#1e3a8a",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px",
    fontSize: "15px",
    fontWeight: "600",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s",
  },
  roleContainer: {
    display: "flex",
    gap: "5px",
    marginBottom: "12px",
  },
  roleButton: {
    flex: 1,
    padding: "8px 0",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
};

// Add keyframes to document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes moveGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`, styleSheet.cssRules.length);

export default LoginPage;
