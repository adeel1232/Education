import React, { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaReply,
  FaTrash,
  FaFilter,
  FaPaperPlane,
} from "react-icons/fa";

const initialMessages = [
  {
    id: 1,
    sender: "John Smith",
    role: "Student",
    course: "Class A CDL",
    type: "student question",
    time: "1 hour ago",
    subject: "Question about CDL Theory Session",
    content:
      "Hi Mike, I have a question about the air brake system we covered yesterday. Could you explain the difference between...",
    read: false,
  },
  {
    id: 2,
    sender: "Sarah Williams",
    role: "Admin",
    course: "",
    type: "admin notification",
    time: "3 hours ago",
    subject: "Schedule Update - New Class Assignment",
    content:
      "Mike, we've assigned you to teach the new Defensive Driving course starting next week. Please review the curriculum...",
    read: true,
  },
  {
    id: 3,
    sender: "Emily Davis",
    role: "Student",
    course: "Behind-the-Wheel",
    type: "training request",
    time: "1 day ago",
    subject: "Behind-the-Wheel Training Request",
    content:
      "Hi Mike, I'm ready to schedule my practical training session. When would be a good time for you this week?",
    read: false,
  },
  {
    id: 4,
    sender: "David Brown",
    role: "Instructor",
    course: "",
    type: "colleague message",
    time: "2 days ago",
    subject: "Teaching Resources - Safety Protocols",
    content:
      "Hey Mike, I found some great new safety training materials. Would you like me to share them with you?",
    read: true,
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [replyText, setReplyText] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);

  // Filter + search combined
  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.sender.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ? true : msg.role.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Mark as read/unread
  const toggleRead = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, read: !msg.read } : msg
      )
    );
  };

  // Delete message
  const deleteMessage = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }
  };

  // Reply
  const handleReply = (id) => {
    if (!replyText[id]?.trim()) return alert("Reply cannot be empty!");
    alert(`Reply sent to message #${id}:\n${replyText[id]}`);
    setReplyText((prev) => ({ ...prev, [id]: "" }));
    setReplyingTo(null);
  };

  return (
    <div style={styles.container}>
      <h2>Messages</h2>
      <p>Communicate with students, colleagues, and administration</p>

      {/* Summary */}
      <div style={styles.summary}>
        <div style={styles.summaryCard}>
          <FaEnvelope style={styles.icon} />
          <strong>{messages.filter((m) => !m.read).length}</strong>
          <p>Unread Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>{messages.filter((m) => m.role === "Student").length}</strong>
          <p>Student Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>{messages.filter((m) => m.role === "Admin").length}</strong>
          <p>Admin Messages</p>
        </div>
        <div style={styles.summaryCard}>
          <FaUser style={styles.icon} />
          <strong>{messages.filter((m) => m.role === "Instructor").length}</strong>
          <p>Colleagues</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div style={styles.controls}>
        <div style={styles.filterGroup}>
          <FaFilter style={{ marginRight: 8 }} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.select}
          >
            <option>All</option>
            <option>Student</option>
            <option>Admin</option>
            <option>Instructor</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Message List */}
      <div style={styles.inbox}>
        {filteredMessages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.messageCard,
              borderLeft: msg.read ? "4px solid #e5e7eb" : "4px solid #2563eb",
            }}
          >
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
              <p style={{ marginTop: 5, marginBottom: 10 }}>{msg.content}</p>

              <div style={styles.actions}>
                <button style={styles.actionBtn} onClick={() => toggleRead(msg.id)}>
                  {msg.read ? "Mark Unread" : "Mark Read"}
                </button>
                <button style={styles.actionBtn} onClick={() => setReplyingTo(msg.id)}>
                  <FaReply style={{ marginRight: 5 }} /> Reply
                </button>
                <button
                  style={{ ...styles.actionBtn, background: "#dc2626" }}
                  onClick={() => deleteMessage(msg.id)}
                >
                  <FaTrash style={{ marginRight: 5 }} /> Delete
                </button>
              </div>

              {replyingTo === msg.id && (
                <div style={styles.replyBox}>
                  <textarea
                    rows="3"
                    placeholder="Write your reply..."
                    value={replyText[msg.id] || ""}
                    onChange={(e) =>
                      setReplyText({ ...replyText, [msg.id]: e.target.value })
                    }
                    style={styles.textarea}
                  />
                  <button
                    style={styles.sendBtn}
                    onClick={() => handleReply(msg.id)}
                  >
                    <FaPaperPlane style={{ marginRight: 5 }} /> Send
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
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
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 10,
  },
  filterGroup: { display: "flex", alignItems: "center" },
  select: {
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
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
  actions: { display: "flex", gap: 8, flexWrap: "wrap" },
  actionBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    fontSize: 13,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  replyBox: {
    marginTop: 10,
    background: "#f9fafb",
    padding: 10,
    borderRadius: 6,
  },
  textarea: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
    resize: "none",
  },
  sendBtn: {
    marginTop: 8,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};

export default Messages;
