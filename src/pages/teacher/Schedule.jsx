import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUsers, FaPlus, FaEye } from "react-icons/fa";

const Schedule = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const classes = [
    {
      name: "Class A CDL - Theory Session",
      date: "2025-01-20",
      time: "09:00 - 12:00",
      room: "Room 101",
      students: 24,
      instructor: "Mike Johnson",
      contact: "(555) 123-4567",
      status: "Scheduled",
    },
    {
      name: "Behind-the-Wheel Training",
      date: "2025-01-21",
      time: "13:00 - 17:00",
      room: "Training Yard",
      students: 8,
      instructor: "Sarah Clark",
      contact: "(555) 987-6543",
      status: "In Progress",
    },
  ];

  return (
    <div style={styles.container}>
      <h2>My Schedule</h2>
      <p>Manage your classes and training sessions</p>

      <button style={styles.addSession} onClick={() => setShowForm(true)}>
        <FaPlus /> Add Session
      </button>

      <section style={styles.section}>
        <h3>Weekly Schedule</h3>
        {classes.map((cls, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>
              <strong>{cls.name}</strong>
              <span style={styles.status}>{cls.status}</span>
            </div>
            <p><FaCalendarAlt /> {cls.date}</p>
            <p><FaClock /> {cls.time}</p>
            <p><FaUsers /> {cls.students} students</p>
            <p>Room: {cls.room}</p>
            <button style={styles.viewButton} onClick={() => setSelectedClass(cls)}>
              <FaEye /> View Details
            </button>
          </div>
        ))}
      </section>

      {/* View Details Modal */}
      {selectedClass && (
        <div style={styles.modalOverlay} onClick={() => setSelectedClass(null)}>
          <div style={styles.smallModal} onClick={(e) => e.stopPropagation()}>
            <h3>{selectedClass.name}</h3>
            <p><strong>Date:</strong> {selectedClass.date}</p>
            <p><strong>Time:</strong> {selectedClass.time}</p>
            <p><strong>Room:</strong> {selectedClass.room}</p>
            <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
            <p><strong>Phone:</strong> {selectedClass.contact}</p>
            <p><strong>Students:</strong> {selectedClass.students}</p>
            <button style={styles.closeButton} onClick={() => setSelectedClass(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Add Session Form */}
      {showForm && (
        <div style={styles.modalOverlay} onClick={() => setShowForm(false)}>
          <div style={styles.formModal} onClick={(e) => e.stopPropagation()}>
            <h3>Add New Session</h3>
            <form style={styles.form}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Course Name" />
              <input type="text" placeholder="Room" />
              <input type="text" placeholder="Instructor" />
              <input type="text" placeholder="Phone Number" />
              <button type="submit" style={styles.submitButton}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  section: { marginTop: 20 },
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    marginBottom: 12,
  },
  cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: 8 },
  status: { fontWeight: 500, color: "#2563eb" },
  addSession: {
    padding: "6px 12px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  viewButton: {
    marginTop: 8,
    padding: "5px 10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallModal: {
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "300px", // smaller width
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  formModal: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "400px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  form: { display: "flex", flexDirection: "column", gap: 10 },
  submitButton: {
    padding: "8px 12px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  closeButton: {
    marginTop: 10,
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
  },
};

export default Schedule;
