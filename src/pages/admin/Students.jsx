import React from "react";
import { FaUserGraduate, FaUserCheck, FaChalkboardTeacher, FaInfoCircle, FaEnvelope, FaEdit } from "react-icons/fa";

const stats = [
  { name: "Total Students", value: 248, icon: <FaUserGraduate />, color: "#4caf50" },
  { name: "Active Students", value: 186, icon: <FaUserCheck />, color: "#2196f3" },
  { name: "Graduated", value: 45, icon: <FaUserGraduate />, color: "#9c27b0" },
  { name: "Completion Rate", value: "89%", icon: <FaChalkboardTeacher />, color: "#ff9800" },
];

const students = [
  { initials: "JS", name: "John Smith", course: "Class A CDL", status: "Active", enrollmentStatus: "Current", email: "john.smith@email.com", phone: "(555) 123-4567", instructor: "Mike Johnson", enrolled: "Jan 10, 2025", docs: "Complete", progress: 75 },
  { initials: "ED", name: "Emily Davis", course: "Behind-the-Wheel", status: "Active", enrollmentStatus: "Overdue", email: "emily.davis@email.com", phone: "(555) 234-5678", instructor: "Sarah Williams", enrolled: "Jan 8, 2025", docs: "Incomplete", progress: 60 },
  { initials: "MB", name: "Michael Brown", course: "Defensive Driving", status: "Graduated", enrollmentStatus: "Complete", email: "michael.brown@email.com", phone: "(555) 345-6789", instructor: "David Brown", enrolled: "Dec 15, 2024", docs: "Complete", progress: 90 },
  { initials: "SW", name: "Sarah Wilson", course: "Class A CDL", status: "On Hold", enrollmentStatus: "Current", email: "sarah.wilson@email.com", phone: "(555) 456-7890", instructor: "Mike Johnson", enrolled: "Jan 14, 2025", docs: "Pending", progress: 45 },
];

export default function StudentManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Student Management</h1>
      <p>Comprehensive student administration and tracking</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {stats.map((stat) => (
          <div key={stat.name} style={{
            flex: "1 1 200px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "32px", color: stat.color }}>{stat.icon}</div>
            <div>
              <h3 style={{ margin: 0 }}>{stat.name}</h3>
              <h2 style={{ margin: "5px 0" }}>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Students List */}
      <div style={{ marginTop: "40px" }}>
        <h3>Students</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
          {students.map((student, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "#2196f3",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>{student.initials}</div>
                <div>
                  <strong>{student.name}</strong> - {student.course} <br />
                  <small>Status: {student.status} | Enrollment: {student.enrollmentStatus}</small><br />
                  <small>{student.email} | {student.phone}</small><br />
                  <small>Instructor: {student.instructor} | Enrolled: {student.enrolled}</small><br />
                  <small>Documents: {student.docs}</small>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
                <div style={{ width: "100px", height: "10px", background: "#e0e0e0", borderRadius: "5px", overflow: "hidden" }}>
                  <div style={{
                    width: `${student.progress}%`,
                    height: "100%",
                    background: "#4caf50",
                  }}></div>
                </div>
                <span style={{ fontSize: "12px", color: "#555" }}>{student.progress}% Progress</span>
                <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                  <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                    <FaInfoCircle /> View Details
                  </button>
                  <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ffc107", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                    <FaEdit /> Edit
                  </button>
                  <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                    <FaEnvelope /> Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
