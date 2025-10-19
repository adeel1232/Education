import React from "react";
import { FaChalkboardTeacher, FaUserCheck, FaStar, FaUserGraduate, FaInfoCircle, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const stats = [
  { name: "Total Instructors", value: 18, icon: <FaChalkboardTeacher />, color: "#4caf50" },
  { name: "Active", value: 16, icon: <FaUserCheck />, color: "#2196f3" },
  { name: "Average Rating", value: 4.8, icon: <FaStar />, color: "#ff9800" },
  { name: "Total Students", value: 248, icon: <FaUserGraduate />, color: "#9c27b0" },
];

const instructors = [
  { initials: "MJ", name: "Mike Johnson", course: "Class A CDL", status: "Active", email: "mike.johnson@truckingvault.com", phone: "(555) 123-4567", students: 12, rating: 4.8, lastClass: "Jan 15, 2025" },
  { initials: "SW", name: "Sarah Williams", course: "Behind-the-Wheel", status: "Active", email: "sarah.williams@truckingvault.com", phone: "(555) 234-5678", students: 8, rating: 4.9, lastClass: "Jan 14, 2025" },
  { initials: "DB", name: "David Brown", course: "Defensive Driving", status: "Active", email: "david.brown@truckingvault.com", phone: "(555) 345-6789", students: 15, rating: 4.7, lastClass: "Jan 13, 2025" },
  { initials: "LG", name: "Lisa Garcia", course: "Hazmat Certification", status: "On Leave", email: "lisa.garcia@truckingvault.com", phone: "(555) 456-7890", students: 6, rating: 4.9, lastClass: "Jan 10, 2025" },
];

export default function InstructorManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Instructor Management</h1>
      <p>Manage teaching staff and track instructor performance</p>

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

      {/* Instructor List */}
      <div style={{ marginTop: "40px" }}>
        <h3>Instructors</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
          {instructors.map((inst, i) => (
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
                  background: inst.status === "Active" ? "#4caf50" : "#ff9800",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>{inst.initials}</div>
                <div>
                  <strong>{inst.name}</strong> - {inst.course} <br />
                  <small>Status: {inst.status}</small><br />
                  <small>{inst.email} | {inst.phone}</small><br />
                  <small>{inst.students} students • {inst.rating}/5.0 rating</small><br />
                  <small>Last class: {inst.lastClass}</small>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaInfoCircle /> View Profile
                </button>
                <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaCalendarAlt /> Schedule
                </button>
                <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaEnvelope /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
