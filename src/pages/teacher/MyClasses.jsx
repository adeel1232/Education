import React from "react";
import { FaChalkboardTeacher, FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const classes = [
  {
    title: "Class A CDL Theory",
    instructor: "Mike Johnson",
    status: "Scheduled",
    date: "Jan 15, 2025",
    time: "9:00 AM - 12:00 PM",
    room: "Room 101",
    students: 12,
  },
  {
    title: "Behind-the-Wheel Training",
    instructor: "Sarah Williams",
    status: "In Progress",
    date: "Jan 16, 2025",
    time: "1:00 PM - 4:00 PM",
    room: "Training Yard",
    students: 8,
  },
  {
    title: "Defensive Driving",
    instructor: "Mike Johnson",
    status: "Scheduled",
    date: "Jan 17, 2025",
    time: "10:00 AM - 2:00 PM",
    room: "Room 102",
    students: 15,
  },
];

const MyClasses = () => {
  return (
    <div style={styles.container}>
      <h2>My Classes</h2>
      <p>Manage your assigned classes and student progress</p>

      <div style={styles.classList}>
        {classes.map((cls, index) => (
          <div key={index} style={styles.classCard}>
            <div style={styles.info}>
              <h3>{cls.title}</h3>
              <p><FaChalkboardTeacher /> Instructor: {cls.instructor}</p>
              <p>Status: <strong>{cls.status}</strong></p>
              <p><FaCalendarAlt /> {cls.date}, {cls.time}</p>
              <p><FaMapMarkerAlt /> {cls.room}</p>
              <p><FaUsers /> {cls.students} students</p>
            </div>
            <div style={styles.actions}>
              <button style={styles.button}>View Details</button>
              <button style={{ ...styles.button, background: "#10b981" }}>Take Attendance</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: "sans-serif",
  },
  classList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginTop: 20,
  },
  classCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  button: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default MyClasses;
