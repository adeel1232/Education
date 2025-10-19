import React, { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaUserCheck, FaStar, FaUserGraduate, FaInfoCircle, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const initialStats = [
  { name: "Total Instructors", value: 18, icon: <FaChalkboardTeacher />, color: "#4caf50", endValue: 20 },
  { name: "Active", value: 16, icon: <FaUserCheck />, color: "#2196f3", endValue: 16 },
  { name: "Average Rating", value: 4.8, icon: <FaStar />, color: "#ff9800", endValue: 4.8 },
  { name: "Total Students", value: 248, icon: <FaUserGraduate />, color: "#9c27b0", endValue: 248 },
];

const instructors = [
  { id: 1, initials: "MJ", name: "Mike Johnson", course: "Class A CDL", status: "Active", email: "mike.johnson@truckingvault.com", phone: "(555) 123-4567", students: 12, rating: 4.8, lastClass: "Jan 15, 2025" },
  { id: 2, initials: "SW", name: "Sarah Williams", course: "Behind-the-Wheel", status: "Active", email: "sarah.williams@truckingvault.com", phone: "(555) 234-5678", students: 8, rating: 4.9, lastClass: "Jan 14, 2025" },
  { id: 3, initials: "DB", name: "David Brown", course: "Defensive Driving", status: "Active", email: "david.brown@truckingvault.com", phone: "(555) 345-6789", students: 15, rating: 4.7, lastClass: "Jan 13, 2025" },
  { id: 4, initials: "LG", name: "Lisa Garcia", course: "Hazmat Certification", status: "On Leave", email: "lisa.garcia@truckingvault.com", phone: "(555) 456-7890", students: 6, rating: 4.9, lastClass: "Jan 10, 2025" },
];

export default function InstructorManagement() {
  const [stats, setStats] = useState(initialStats);
  const [viewInstructor, setViewInstructor] = useState(null);
  const [scheduleInstructor, setScheduleInstructor] = useState(null);
  const [messageInstructor, setMessageInstructor] = useState(null);

  // Animate Total Instructors (0 → endValue in 20 sec)
  useEffect(() => {
    const duration = 20000;
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = stats.map(s => (s.endValue - 0) / steps);
    let current = stats.map(s => 0);
    
    const timer = setInterval(() => {
      current = current.map((val, idx) => Math.min(val + increment[idx], stats[idx].endValue));
      setStats(prev => prev.map((s, i) => ({ ...s, value: current[i] })));
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = (id, message) => {
    alert(`Message sent to instructor ID ${id}:\n${message}`);
    setMessageInstructor(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Instructor Management</h1>
      <p>Manage teaching staff and track instructor performance</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{
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
              <h2 style={{ margin: "5px 0" }}>{typeof stat.value === "number" ? Math.floor(stat.value) : stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Instructor List */}
      <div style={{ marginTop: "40px" }}>
        <h3>Instructors</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
          {instructors.map(inst => (
            <div key={inst.id} style={{
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
                <button onClick={() => setViewInstructor(inst)} style={buttonStyle("#2196f3")}><FaInfoCircle /> View Profile</button>
                <button onClick={() => setScheduleInstructor(inst)} style={buttonStyle("#ff9800")}><FaCalendarAlt /> Schedule</button>
                <button onClick={() => setMessageInstructor(inst)} style={buttonStyle("#4caf50")}><FaEnvelope /> Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {viewInstructor && <InstructorModal instructor={viewInstructor} onClose={() => setViewInstructor(null)} />}
      {scheduleInstructor && <InstructorModal instructor={scheduleInstructor} onClose={() => setScheduleInstructor(null)} title="Schedule" />}
      {messageInstructor && <MessageModal instructor={messageInstructor} onSend={handleSendMessage} onClose={() => setMessageInstructor(null)} />}
    </div>
  );
}

// Button style helper
const buttonStyle = (bg) => ({
  padding: "5px 10px", borderRadius: "5px", border: "none", background: bg,
  color: "#fff", display: "flex", alignItems: "center", gap: "5px"
});

// Instructor Detail Modal
function InstructorModal({ instructor, onClose, title = "Profile" }) {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>{title}: {instructor.name}</h3>
        <p>Course: {instructor.course}</p>
        <p>Status: {instructor.status}</p>
        <p>Email: {instructor.email}</p>
        <p>Phone: {instructor.phone}</p>
        <p>Students: {instructor.students}</p>
        <p>Rating: {instructor.rating}/5</p>
        <p>Last Class: {instructor.lastClass}</p>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
}

// Message Modal
function MessageModal({ instructor, onSend, onClose }) {
  const [message, setMessage] = useState("");
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>Send Message to {instructor.name}</h3>
        <textarea value={message} onChange={e => setMessage(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />
        <button onClick={() => onSend(instructor.id, message)} style={{ marginRight: "10px" }}>Send</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

// Modal styles
const modalStyle = { position: "fixed", top:0,left:0,right:0,bottom:0, background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center" };
const modalContentStyle = { background:"#fff", padding:"20px", borderRadius:"10px", width:"400px", position:"relative" };
const closeButtonStyle = { position:"absolute", top:10, right:10, background:"#f44336", color:"#fff", border:"none", borderRadius:"5px", padding:"5px 10px" };
