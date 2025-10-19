import React from "react";
import { FaCalendarAlt, FaPlayCircle, FaChalkboardTeacher, FaChartLine, FaPlus, FaClipboardList, FaUsers, FaFileExport } from "react-icons/fa";

const stats = [
  { name: "Total Sessions", value: 48, icon: <FaCalendarAlt />, color: "#4caf50" },
  { name: "Active Sessions", value: 12, icon: <FaPlayCircle />, color: "#2196f3" },
  { name: "Instructors", value: 8, icon: <FaChalkboardTeacher />, color: "#ff9800" },
  { name: "Utilization", value: "87%", icon: <FaChartLine />, color: "#9c27b0" },
];

const sessions = [
  { course: "Class A CDL - Theory Session", instructor: "Mike Johnson", date: "2025-01-20", time: "09:00 - 12:00", location: "Room 101", enrolled: "24/30", status: "Scheduled" },
  { course: "Behind-the-Wheel Training", instructor: "Sarah Williams", date: "2025-01-20", time: "13:00 - 17:00", location: "Training Yard", enrolled: "8/10", status: "In Progress" },
  { course: "Defensive Driving Workshop", instructor: "David Brown", date: "2025-01-21", time: "10:00 - 15:00", location: "Room 203", enrolled: "15/20", status: "Scheduled" },
  { course: "Hazmat Certification", instructor: "Lisa Garcia", date: "2025-01-22", time: "14:00 - 16:00", location: "Room 105", enrolled: "8/15", status: "Planning" },
];

const instructors = [
  { name: "Mike Johnson", classes: 8, students: 45, rating: 4.8 },
  { name: "Sarah Williams", classes: 6, students: 32, rating: 4.9 },
  { name: "David Brown", classes: 4, students: 28, rating: 4.7 },
  { name: "Lisa Garcia", classes: 3, students: 18, rating: 4.6 },
];

const quickActions = [
  { name: "Bulk Schedule", icon: <FaClipboardList />, color: "#4caf50" },
  { name: "Room Assignment", icon: <FaUsers />, color: "#2196f3" },
  { name: "Assign Instructors", icon: <FaChalkboardTeacher />, color: "#ff9800" },
  { name: "Generate Report", icon: <FaFileExport />, color: "#9c27b0" },
];

export default function ScheduleManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Schedule Management</h1>
      <p>Oversee all training sessions and instructor schedules</p>

      {/* Add Session Button */}
      <div style={{ margin: "20px 0" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff", fontWeight: "bold" }}>
          <FaPlus /> Add Session
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
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

      {/* All Sessions */}
      <div style={{ marginBottom: "40px" }}>
        <h3>All Sessions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {sessions.map((sess, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div>
                <strong>{sess.course}</strong> - {sess.instructor} <br />
                <small>{sess.date} | {sess.time} | {sess.location}</small><br />
                <small>Enrolled: {sess.enrolled} | Status: {sess.status}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Performance */}
      <div style={{ marginBottom: "40px" }}>
        <h3>Instructor Performance</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
              <div>
                <strong>{inst.name}</strong> <br />
                <small>{inst.classes} classes | {inst.students} students | Rating: {inst.rating}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3>Quick Actions</h3>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {quickActions.map((action, i) => (
            <button key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              background: action.color,
              color: "#fff",
              fontWeight: "bold"
            }}>
              {action.icon} {action.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
