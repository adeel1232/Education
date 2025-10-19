import React, { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

const messagesData = [
  {
    id: 1,
    sender: "John Smith",
    role: "Student",
    course: "Class A CDL",
    type: "student question",
    time: "1 hour ago",
    subject: "Question about CDL Theory Session",
    content: "Hi Mike, I have a question about the air brake system we covered yesterday. Could you explain the difference between..."
  },
  {
    id: 2,
    sender: "Sarah Williams",
    role: "Admin",
    course: "",
    type: "admin notification",
    time: "3 hours ago",
    subject: "Schedule Update - New Class Assignment",
    content: "Mike, we've assigned you to teach the new Defensive Driving course starting next week. Please review the curriculum..."
  },
  {
    id: 3,
    sender: "Emily Davis",
    role: "Student",
    course: "Behind-the-Wheel",
    type: "training request",
    time: "1 day ago",
    subject: "Behind-the-Wheel Training Request",
    content: "Hi Mike, I'm ready to schedule my practical training session. When would be a good time for you this week?"
  },
  {
    id: 4,
    sender: "David Brown",
    role: "Instructor",
    course: "",
    type: "colleague message",
    time: "2 days ago",
    subject: "Teaching Resources - Safety Protocols",
    content: "Hey Mike, I found some great new safety training materials. Would you like me to share them with you?"
  }
];

const Messages = () => {
  const [search, setSearch] = useState("");

  const filteredMessages = messagesData.filter(msg =>
    msg.sender.toLowerCase().includes(search.toLowerCase()) ||
    msg.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Messages</h2>
      <p>Communicate with students, colleagues, and administration</p>

      <div style={styles.summary}>
        <div style={styles.summaryCard}>
          <FaEnvelope style={styles.icon} />
          <strong>2</strong>
          <p>Unread Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>8</strong>
          <p>Student Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>3</strong>
          <p>Admin Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>5</strong>
          <p>Colleagues</p>
        </div>
      </div>

      <div style={styles.search}>
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.inbox}>
        {filteredMessages.map((msg) => (
          <div key={msg.id} style={styles.messageCard}>
            <div style={styles.header}>
              <FaUser style={{ marginRight: 10, color: "#2563eb" }} />
              <div>
                <strong>{msg.sender}</strong> {msg.course && `• ${msg.course}`}
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
                  {msg.type} • {msg.time}
                </p>
              </div>
            </div>
            <div style={styles.body}>
              <strong>{msg.subject}</strong>
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  summary: { display: "flex", gap: 15, marginTop: 15, flexWrap: "wrap" },
  summaryCard: {
    flex: 1,
    minWidth: 120,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  icon: { fontSize: 24, marginBottom: 5 },
  search: { marginTop: 20 },
  searchInput: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 14,
  },
  inbox: { marginTop: 20 },
  messageCard: {
    background: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  header: { display: "flex", alignItems: "center", marginBottom: 10 },
  body: {},
};

export default Messages;
