// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  if (email && password) {
    return res.json({ message: `Welcome ${role}` });
  }

  res.status(400).json({ message: "Invalid credentials" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
