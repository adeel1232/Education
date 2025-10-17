import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const TeacherDashboard = () => {
  // Clock in/out
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [hours, setHours] = useState(0);

  const handleClock = () => {
    setIsClockedIn(!isClockedIn);
    alert(isClockedIn ? "Clocked out!" : "Clocked in!");
    if (!isClockedIn) setHours(hours + 1); // simulate 1 hour per click
  };

  // Assigned students
  const students = [
    { name: "Ali", feedback: "Excellent participation" },
    { name: "Sara", feedback: "Needs improvement in math" },
    { name: "Hassan", feedback: "Good behavior" },
  ];

  // Class schedule
  const schedule = [
    { class: "Math", time: "10:00 AM" },
    { class: "Science", time: "11:00 AM" },
    { class: "English", time: "1:00 PM" },
  ];

  // Graph data
  const hoursData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3 },
    { day: "Wed", hours: 4 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 3 },
  ];

  const studentProgress = [
    { student: "Ali", progress: 90 },
    { student: "Sara", progress: 70 },
    { student: "Hassan", progress: 85 },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        <h1 style={styles.title}>Teacher Dashboard</h1>

        {/* Clock In/Out */}
        <div style={styles.card}>
          <h2>Clock In/Out</h2>
          <p>Total hours worked: {hours}</p>
          <button style={styles.button} onClick={handleClock}>
            {isClockedIn ? "Clock Out" : "Clock In"}
          </button>
        </div>

        {/* Assigned Students */}
        <div style={styles.card}>
          <h2>Assigned Students</h2>
          {students.map((s, i) => (
            <div key={i} style={styles.listItem}>
              <strong>{s.name}</strong>: {s.feedback}
            </div>
          ))}
        </div>

        {/* Class Schedule */}
        <div style={styles.card}>
          <h2>Class Schedule</h2>
          <ul>
            {schedule.map((s, i) => (
              <li key={i}>
                {s.class} - {s.time}
              </li>
            ))}
          </ul>
        </div>

        {/* Graph: Hours Worked */}
        <div style={styles.card}>
          <h2>Weekly Hours</h2>
          <LineChart width={500} height={250} data={hoursData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Graph: Student Progress */}
        <div style={styles.card}>
          <h2>Student Progress (%)</h2>
          <BarChart width={500} height={250} data={studentProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="student" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#16a34a" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  dashboard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "40px",
    width: "100%",
    maxWidth: "900px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    color: "#1e40af",
    fontSize: "32px",
    marginBottom: "30px",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#f9fafb",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px",
  },
  listItem: {
    marginBottom: "8px",
  },
};

export default TeacherDashboard;
