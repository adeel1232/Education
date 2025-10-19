import React from "react";
import { FaEnvelope, FaUserCircle, FaChalkboard } from "react-icons/fa";

const students = [
  {
    name: "John Smith",
    course: "Class A CDL",
    status: "Active",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    lastClass: "Jan 10, 2025",
    progress: 75,
  },
  {
    name: "Emily Davis",
    course: "Behind-the-Wheel",
    status: "Active",
    email: "emily.davis@email.com",
    phone: "(555) 234-5678",
    lastClass: "Jan 12, 2025",
    progress: 60,
  },
  {
    name: "Michael Brown",
    course: "Defensive Driving",
    status: "Active",
    email: "michael.brown@email.com",
    phone: "(555) 345-6789",
    lastClass: "Jan 14, 2025",
    progress: 90,
  },
  {
    name: "Sarah Wilson",
    course: "Class A CDL",
    status: "Active",
    email: "sarah.wilson@email.com",
    phone: "(555) 456-7890",
    lastClass: "Jan 8, 2025",
    progress: 45,
  },
];

const MyStudents = () => {
  return (
    <div style={styles.container}>
      <h2>My Students</h2>
      <p>Track student progress and manage their learning journey</p>

      <div style={styles.studentList}>
        {students.map((student, index) => (
          <div key={index} style={styles.studentCard}>
            <div style={styles.info}>
              <h3>{student.name}</h3>
              <p><FaChalkboard /> {student.course}</p>
              <p>Status: <strong>{student.status}</strong></p>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
              <p>Last Class: {student.lastClass}</p>
              <p>Progress: {student.progress}%</p>
            </div>
            <div style={styles.actions}>
              <button style={styles.button}><FaUserCircle /> View Profile</button>
              <button style={{ ...styles.button, background: "#10b981" }}><FaEnvelope /> Message</button>
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
  studentList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginTop: 20,
  },
  studentCard: {
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
    gap: 4,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
  },
};

export default MyStudents;
