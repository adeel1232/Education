import React, { useState } from "react";
import {
  FaEnvelope,
  FaUserCircle,
  FaChalkboard,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const MyStudents = () => {
  const [students, setStudents] = useState([
    {
      firstName: "John",
      lastName: "Smith",
      course: "Class A CDL",
      status: "Active",
      email: "john.smith@email.com",
      phone: "03295391301",
      age: 25,
      cnic: "12345-6789012-3",
      classNumber: "A101",
      classroom: "Room 1",
      progress: 75,
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      course: "Behind-the-Wheel",
      status: "Active",
      email: "emily.davis@email.com",
      phone: "03295391301",
      age: 23,
      cnic: "23456-7890123-4",
      classNumber: "B102",
      classroom: "Yard 3",
      progress: 60,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    course: "",
    cnic: "",
    classNumber: "",
    classroom: "",
    email: "",
    phone: "",
    status: "Active",
    progress: 0,
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({
      firstName: "",
      lastName: "",
      age: "",
      course: "",
      cnic: "",
      classNumber: "",
      classroom: "",
      email: "",
      phone: "",
      status: "Active",
      progress: 0,
    });
    setShowAddForm(false);
  };

  const openWhatsApp = (phone) => {
    const formattedPhone = phone.replace(/\D/g, ""); // remove non-numeric
    window.open(`https://wa.me/92${formattedPhone.slice(1)}`, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>My Students</h2>
        <button style={styles.addButton} onClick={() => setShowAddForm(true)}>
          <FaPlus /> Add Student
        </button>
      </div>
      <p>Track student progress and manage their learning journey</p>

      <div style={styles.studentList}>
        {students.map((student, index) => (
          <div key={index} style={styles.studentCard}>
            <div style={styles.info}>
              <h3>
                {student.firstName} {student.lastName}
              </h3>
              <p>
                <FaChalkboard /> {student.course}
              </p>
              <p>Status: <strong>{student.status}</strong></p>
              <p>Age: {student.age}</p>
              <p>CNIC: {student.cnic}</p>
              <p>Class #: {student.classNumber}</p>
              <p>Classroom: {student.classroom}</p>
              <p>Email: {student.email}</p>
              <p>Phone: {student.phone}</p>
              <p>Progress: {student.progress}%</p>
            </div>
            <div style={styles.actions}>
              <button style={styles.button}>
                <FaUserCircle /> View Profile
              </button>
              <button
                style={{ ...styles.button, background: "#10b981" }}
                onClick={() => openWhatsApp(student.phone)}
              >
                <FaEnvelope /> Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Student Form */}
      {showAddForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button
              style={styles.closeBtn}
              onClick={() => setShowAddForm(false)}
            >
              <FaTimes />
            </button>
            <h3>Add New Student</h3>
            <form style={styles.form} onSubmit={handleAddStudent}>
              <input
                type="text"
                placeholder="First Name"
                value={newStudent.firstName}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, firstName: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newStudent.lastName}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, lastName: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="number"
                placeholder="Age"
                value={newStudent.age}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, age: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Course"
                value={newStudent.course}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, course: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="CNIC"
                value={newStudent.cnic}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, cnic: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Class Number"
                value={newStudent.classNumber}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, classNumber: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Classroom"
                value={newStudent.classroom}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, classroom: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                value={newStudent.email}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, email: e.target.value })
                }
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Phone (e.g. 03295391301)"
                value={newStudent.phone}
                required
                onChange={(e) =>
                  setNewStudent({ ...newStudent, phone: e.target.value })
                }
                style={styles.input}
              />
              <button type="submit" style={styles.submitButton}>
                Save Student
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
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
  info: { display: "flex", flexDirection: "column", gap: 5 },
  actions: { display: "flex", flexDirection: "column", gap: 10 },
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
    width: 400,
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
  input: {
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 6,
  },
  submitButton: {
    background: "#10b981",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default MyStudents;
