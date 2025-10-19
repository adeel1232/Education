import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaPlayCircle, FaChalkboardTeacher, FaChartLine, FaPlus, FaClipboardList, FaUsers, FaFileExport } from "react-icons/fa";

const stats = [
  { name: "Total Sessions", value: 48, icon: <FaCalendarAlt />, color: "#4caf50" },
  { name: "Active Sessions", value: 12, icon: <FaPlayCircle />, color: "#2196f3" },
  { name: "Instructors", value: 8, icon: <FaChalkboardTeacher />, color: "#ff9800" },
  { name: "Utilization", value: 87, icon: <FaChartLine />, color: "#9c27b0" },
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
  const [utilization, setUtilization] = useState(0);
  const [sessions, setSessions] = useState([
    { course: "Class A CDL - Theory Session", instructor: "Mike Johnson", date: "2025-01-20", time: "09:00 - 12:00", location: "Room 101", enrolled: "24/30", status: "Scheduled" },
    { course: "Behind-the-Wheel Training", instructor: "Sarah Williams", date: "2025-01-20", time: "13:00 - 17:00", location: "Training Yard", enrolled: "8/10", status: "In Progress" },
    { course: "Defensive Driving Workshop", instructor: "David Brown", date: "2025-01-21", time: "10:00 - 15:00", location: "Room 203", enrolled: "15/20", status: "Scheduled" },
    { course: "Hazmat Certification", instructor: "Lisa Garcia", date: "2025-01-22", time: "14:00 - 16:00", location: "Room 105", enrolled: "8/15", status: "Planning" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newSession, setNewSession] = useState({
    course: "",
    instructor: "",
    date: "",
    time: "",
    location: "",
    enrolled: "",
    status: ""
  });

  // Animate Utilization
  useEffect(() => {
    const target = 87;
    const duration = 20000;
    const intervalTime = 50;
    const increment = (target / duration) * intervalTime;

    const interval = setInterval(() => {
      setUtilization(prev => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const handleAddSession = () => setShowForm(true);
  const handleSaveSession = (e) => {
    e.preventDefault();
    setSessions([...sessions, newSession]);
    setNewSession({ course: "", instructor: "", date: "", time: "", location: "", enrolled: "", status: "" });
    setShowForm(false);
  };

  const handleQuickAction = (action) => alert(`${action} clicked!`);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Schedule Management</h1>
      <p>Oversee all training sessions and instructor schedules</p>

      {/* Add Session Button */}
      <div style={{ margin: "20px 0" }}>
        <button onClick={handleAddSession} style={buttonStyle("#4caf50")}>
          <FaPlus /> Add Session
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Add New Session</h3>
            <form onSubmit={handleSaveSession} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" placeholder="Course Name" value={newSession.course} onChange={e => setNewSession({ ...newSession, course: e.target.value })} required />
              <input type="text" placeholder="Instructor" value={newSession.instructor} onChange={e => setNewSession({ ...newSession, instructor: e.target.value })} required />
              <input type="date" placeholder="Date" value={newSession.date} onChange={e => setNewSession({ ...newSession, date: e.target.value })} required />
              <input type="text" placeholder="Time" value={newSession.time} onChange={e => setNewSession({ ...newSession, time: e.target.value })} required />
              <input type="text" placeholder="Location" value={newSession.location} onChange={e => setNewSession({ ...newSession, location: e.target.value })} required />
              <input type="text" placeholder="Enrolled (e.g., 10/20)" value={newSession.enrolled} onChange={e => setNewSession({ ...newSession, enrolled: e.target.value })} required />
              <input type="text" placeholder="Status" value={newSession.status} onChange={e => setNewSession({ ...newSession, status: e.target.value })} required />
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={buttonStyle("#4caf50")}>Save</button>
                <button type="button" style={buttonStyle("#f44336")} onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {stats.map(stat => (
          <div key={stat.name} style={cardStyle}>
            <div style={{ fontSize: "32px", color: stat.color }}>{stat.icon}</div>
            <div>
              <h3 style={{ margin: 0 }}>{stat.name}</h3>
              <h2 style={{ margin: "5px 0" }}>{stat.name === "Utilization" ? `${Math.round(utilization)}%` : stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* All Sessions */}
      <div style={{ marginBottom: "40px" }}>
        <h3>All Sessions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {sessions.map((sess, i) => (
            <div key={i} style={itemCardStyle}>
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
            <div key={i} style={itemCardStyle}>
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
            <button key={i} onClick={() => handleQuickAction(action.name)} style={buttonStyle(action.color)}>
              {action.icon} {action.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Styles
const cardStyle = {
  flex: "1 1 200px",
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const itemCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  background: "#f5f5f5",
  borderRadius: "5px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
};

const buttonStyle = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  background: color,
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
});

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalContent = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};
