import React, { useState } from "react";
import { FaUserCheck, FaUserTimes, FaUserClock, FaCalendarAlt, FaEdit, FaPlus } from "react-icons/fa";

const Attendance = () => {
  const [records, setRecords] = useState([
    { name: "John Smith", course: "Class A CDL Theory", date: "Jan 15, 2025", status: "Present" },
    { name: "Emily Davis", course: "Behind-the-Wheel Training", date: "Jan 15, 2025", status: "Absent" },
    { name: "Michael Brown", course: "Defensive Driving", date: "Jan 15, 2025", status: "Late" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", course: "", date: "Jan 15, 2025", status: "Present" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  const statusIcons = {
    Present: <FaUserCheck color="#10b981" />,
    Absent: <FaUserTimes color="#ef4444" />,
    Late: <FaUserClock color="#f59e0b" />,
  };

  const handleStatusChange = (index) => {
    const statuses = ["Present", "Absent", "Late"];
    setRecords((prev) =>
      prev.map((rec, i) =>
        i === index
          ? { ...rec, status: statuses[(statuses.indexOf(rec.status) + 1) % statuses.length] }
          : rec
      )
    );
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditStudent({ ...records[index] });
  };

  const handleSaveEdit = () => {
    setRecords((prev) =>
      prev.map((rec, i) => (i === editingIndex ? editStudent : rec))
    );
    setEditingIndex(null);
    setEditStudent(null);
  };

  const handleAddStudent = () => {
    if (!newStudent.name.trim() || !newStudent.course.trim()) return alert("Enter name and course");
    setRecords((prev) => [...prev, newStudent]);
    setNewStudent({ name: "", course: "", date: "Jan 15, 2025", status: "Present" });
  };

  return (
    <div style={styles.container}>
      <h2>Attendance Tracker</h2>
      <p>Manage and record daily attendance</p>

      {/* Add New Student */}
      <div style={styles.addContainer}>
        <input
          type="text"
          placeholder="Full Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
          style={styles.input}
        />
        <button onClick={handleAddStudent} style={styles.addButton}>
          <FaPlus /> Add
        </button>
      </div>

      {/* Attendance List */}
      <div style={styles.list}>
        {records.map((record, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon} onClick={() => handleStatusChange(index)}>
              {statusIcons[record.status]}
            </div>
            <div style={styles.info}>
              <h4>{record.name}</h4>
              <p>{record.course}</p>
              <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <FaCalendarAlt /> {record.date}
              </p>
              <p>
                Status: <strong>{record.status}</strong>
              </p>
            </div>
            <button style={styles.editBtn} onClick={() => handleEdit(index)}>
              <FaEdit /> Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editStudent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Edit Student</h3>
            <input
              type="text"
              value={editStudent.name}
              onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              value={editStudent.course}
              onChange={(e) => setEditStudent({ ...editStudent, course: e.target.value })}
              style={styles.input}
            />
            <select
              value={editStudent.status}
              onChange={(e) => setEditStudent({ ...editStudent, status: e.target.value })}
              style={styles.input}
            >
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
            <div style={styles.modalButtons}>
              <button onClick={handleSaveEdit} style={styles.saveBtn}>Save</button>
              <button onClick={() => setEditStudent(null)} style={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  addContainer: { display: "flex", gap: 10, marginTop: 15 },
  input: {
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 14,
  },
  addButton: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  list: { marginTop: 20, display: "flex", flexDirection: "column", gap: 10 },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  icon: { fontSize: 24, cursor: "pointer" },
  info: { flex: 1, marginLeft: 10 },
  editBtn: {
    background: "#10b981",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex", justifyContent: "center", alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  modalButtons: { display: "flex", justifyContent: "space-between" },
  saveBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
  cancelBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default Attendance;
