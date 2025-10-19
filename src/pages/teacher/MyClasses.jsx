import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaTimes,
  FaPlus,
} from "react-icons/fa";

const classes = [
  {
    title: "Class A CDL Theory",
    instructor: "Mike Johnson",
    status: "Scheduled",
    date: "Jan 15, 2025",
    time: "9:00 AM - 12:00 PM",
    room: "Room 101",
    students: 12,
    description:
      "This course covers Class A CDL theory including air brakes, vehicle inspection, and road safety.",
  },
  {
    title: "Behind-the-Wheel Training",
    instructor: "Sarah Williams",
    status: "In Progress",
    date: "Jan 16, 2025",
    time: "1:00 PM - 4:00 PM",
    room: "Training Yard",
    students: 8,
    description:
      "Hands-on driving lessons with certified instructors focusing on maneuvering and safety checks.",
  },
  {
    title: "Defensive Driving",
    instructor: "Mike Johnson",
    status: "Scheduled",
    date: "Jan 17, 2025",
    time: "10:00 AM - 2:00 PM",
    room: "Room 102",
    students: 15,
    description:
      "Defensive driving techniques to improve awareness and prevent accidents in all driving conditions.",
  },
];

const MyClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [formData, setFormData] = useState({ name: "", className: "" });

  const handleDetails = (cls) => {
    setSelectedClass(cls);
    setShowDetails(true);
  };

  const handleAttendance = (cls) => {
    setSelectedClass(cls);
    setShowAttendance(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttendanceSubmitted(true);
    setAttendanceCount(attendanceCount + 1);
    setTimeout(() => {
      setShowAttendance(false);
      setAttendanceSubmitted(false);
      setFormData({ name: "", className: "" });
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2>My Classes</h2>
      <p>Manage your assigned classes and student progress</p>

      <div style={styles.classList}>
        {classes.map((cls, index) => (
          <div key={index} style={styles.classCard}>
            <div style={styles.info}>
              <h3>{cls.title}</h3>
              <p>
                <FaChalkboardTeacher /> Instructor: {cls.instructor}
              </p>
              <p>Status: <strong>{cls.status}</strong></p>
              <p>
                <FaCalendarAlt /> {cls.date}, {cls.time}
              </p>
              <p>
                <FaMapMarkerAlt /> {cls.room}
              </p>
              <p>
                <FaUsers /> {cls.students + attendanceCount} students
              </p>
            </div>
            <div style={styles.actions}>
              <button style={styles.button} onClick={() => handleDetails(cls)}>
                View Details
              </button>
              <button
                style={{ ...styles.button, background: "#10b981" }}
                onClick={() => handleAttendance(cls)}
              >
                Take Attendance
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Details Modal */}
      {showDetails && selectedClass && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={() => setShowDetails(false)}>
              <FaTimes />
            </button>
            <h3>{selectedClass.title}</h3>
            <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
            <p><strong>Date:</strong> {selectedClass.date}</p>
            <p><strong>Time:</strong> {selectedClass.time}</p>
            <p><strong>Room:</strong> {selectedClass.room}</p>
            <p>{selectedClass.description}</p>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendance && selectedClass && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeBtn} onClick={() => setShowAttendance(false)}>
              <FaTimes />
            </button>
            {!attendanceSubmitted ? (
              <>
                <h3>Attendance Form</h3>
                <form onSubmit={handleSubmit} style={styles.form}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Class Name"
                    value={formData.className}
                    required
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    style={styles.input}
                  />
                  <button type="submit" style={styles.button}>
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <h4 style={{ color: "#10b981" }}>✅ You are present</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  classList: { display: "flex", flexDirection: "column", gap: 15, marginTop: 20 },
  classCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  info: { display: "flex", flexDirection: "column", gap: 5 },
  actions: { display: "flex", flexDirection: "column", gap: 10 },
  button: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 350,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#555",
  },
  form: { display: "flex", flexDirection: "column", gap: 10, marginTop: 10 },
  input: {
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 6,
  },
};

export default MyClasses;
