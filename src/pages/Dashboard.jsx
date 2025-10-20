import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const courseProgressData = [
  { week: "Week 1", progress: 10 },
  { week: "Week 2", progress: 20 },
  { week: "Week 3", progress: 30 },
  { week: "Week 4", progress: 42 },
  { week: "Week 5", progress: 50 },
  { week: "Week 6", progress: 65 },
];

const attendanceData = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 98 },
  { month: "Mar", attendance: 97 },
];

const Dashboard = () => {
  const [attendanceRate, setAttendanceRate] = useState(0);
  const targetRate = 98;

  // Animate attendance count up to 98%
  useEffect(() => {
    let start = 0;
    const duration = 30000; // 30 seconds
    const stepTime = 50; // ms per update
    const increment = (targetRate / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetRate) {
        start = targetRate;
        clearInterval(timer);
      }
      setAttendanceRate(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const [student, setStudent] = useState({
    name: "",
    className: "",
    classroom: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Added:\nName: ${student.name}\nClass: ${student.className}\nClassroom: ${student.classroom}\nDOB: ${student.dob}`);
    setStudent({ name: "", className: "", classroom: "", dob: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome back, John!</h1>
      <p>Here's your learning progress and upcoming activities</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
        <div style={cardStyle}>
          <h3>Course Progress</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>65%</p>
          <p>12 of 18 modules completed</p>
          <p>↑ 12% this week</p>
        </div>
        <div style={cardStyle}>
          <h3>Tuition Balance</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>$2,500</p>
          <p>$7,500 paid of $10,000</p>
        </div>
        <div style={cardStyle}>
          <h3>Next Class</h3>
          <p>Tomorrow</p>
          <p>Defensive Driving at 9:00 AM</p>
        </div>
        <div style={cardStyle}>
          <h3>Attendance Rate</h3>
          <p style={{ fontSize: 24, fontWeight: "bold", transition: "0.3s" }}>
            {attendanceRate}%
          </p>
          <p>23 of 24 classes attended</p>
          <p>↑ 100% this month</p>
        </div>
      </div>

      {/* Graphs */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 40 }}>
        <div style={graphCardStyle}>
          <h3>Course Progress Over Weeks</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={courseProgressData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={graphCardStyle}>
          <h3>Attendance Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Student Add Form */}
      <div style={{ marginTop: 40 }}>
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 400 }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={student.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="className"
            placeholder="Class"
            value={student.className}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="classroom"
            placeholder="Classroom"
            value={student.classroom}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Add Student</button>
        </form>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  flex: "1 1 200px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const graphCardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  flex: "1 1 400px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const inputStyle = {
  padding: 10,
  borderRadius: 5,
  border: "1px solid #ccc",
  fontSize: 16,
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: 16,
};

export default Dashboard;
