import React from "react";
import { FaEnvelope, FaExclamationCircle, FaUserGraduate, FaChalkboardTeacher, FaSearch, FaFilter } from "react-icons/fa";

const messageStats = [
  { name: "Urgent Messages", value: 2, icon: <FaExclamationCircle />, color: "#f44336" },
  { name: "Total Messages", value: 47, icon: <FaEnvelope />, color: "#2196f3" },
  { name: "Student Issues", value: 12, icon: <FaUserGraduate />, color: "#ff9800" },
  { name: "Instructor Requests", value: 8, icon: <FaChalkboardTeacher />, color: "#4caf50" },
];

const messages = [
  {
    sender: "Mike Johnson",
    role: "Instructor",
    topic: "schedule conflict",
    priority: "High",
    time: "30 minutes ago",
    subject: "Schedule Conflict - Need Coverage",
    body: "Hi Admin, I have a family emergency and need coverage for my classes tomorrow. Can someone cover my 9 AM theory session?"
  },
  {
    sender: "Sarah Williams",
    role: "Student",
    topic: "payment issue",
    priority: "Medium",
    time: "2 hours ago",
    subject: "Payment Issue - Credit Card Declined",
    body: "I'm having trouble with my payment. My credit card keeps getting declined. Can you help me resolve this?"
  },
  {
    sender: "David Brown",
    role: "Instructor",
    topic: "resource request",
    priority: "Low",
    time: "1 day ago",
    subject: "Training Materials Request",
    body: "I need additional safety training materials for my defensive driving course. Can we order more copies?"
  },
  {
    sender: "Emily Davis",
    role: "Student",
    topic: "complaint",
    priority: "High",
    time: "2 days ago",
    subject: "Complaint - Instructor Behavior",
    body: "I need to report an issue with one of my instructors. The behavior was unprofessional and I'd like to discuss this..."
  },
];

export default function AdminMessages() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Messages</h1>
      <p>Manage communications from students, instructors, and system notifications</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {messageStats.map((stat, i) => (
          <div key={i} style={{
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

      {/* Search & Filter */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
          <FaSearch /> Search Messages
        </button>
        <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff" }}>
          <FaFilter /> Filter
        </button>
      </div>

      {/* Message Inbox */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            background: "#f5f5f5",
            borderRadius: "5px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <strong>{msg.sender}</strong> <span style={{ color: msg.priority === "High" ? "#f44336" : msg.priority === "Medium" ? "#ff9800" : "#4caf50" }}>{msg.priority}</span>
            </div>
            <small>{msg.role} • {msg.time}</small>
            <h4 style={{ margin: "10px 0 5px 0" }}>{msg.subject}</h4>
            <p style={{ margin: 0 }}>{msg.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
