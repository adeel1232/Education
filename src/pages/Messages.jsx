import React from "react";

const Messages = () => {
  const stats = {
    unread: 3,
    total: 24,
    instructors: 3,
    support: 1,
  };

  const inbox = [
    { sender: "MJ", name: "Mike Johnson", role: "Instructor", subject: "Class Reminder", time: "2 hours ago", preview: "Class A CDL Theory Session - Tomorrow. Hi John, just a reminder that we have our theory session tomorrow at 9 AM..." },
    { sender: "SW", name: "Sarah Williams", role: "Admin", subject: "Payment", time: "1 day ago", preview: "Payment Reminder - Tuition Due. Your tuition payment of $2,500 is due on January 20th..." },
    { sender: "DB", name: "David Brown", role: "Instructor", subject: "Training", time: "3 days ago", preview: "Behind-the-Wheel Training Schedule. Great progress on your practical training! Let's schedule your next session for this Friday..." },
    { sender: "LG", name: "Lisa Garcia", role: "Support", subject: "Welcome", time: "1 week ago", preview: "Welcome to TruckingVault! We're excited to help you achieve your CDL goals..." },
  ];

  // Graph data: percentage of unread, instructors, support
  const totalStatCount = stats.total;
  const graphData = [
    { label: "Unread", value: stats.unread, color: "#f59e0b" },
    { label: "Instructors", value: stats.instructors, color: "#2563eb" },
    { label: "Support", value: stats.support, color: "#10b981" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Messages</h1>
      <p>Communicate with your instructors and support team</p>

      {/* Stats & Graph */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
        {graphData.map((stat, idx) => (
          <div key={idx} style={{ flex: "1 1 150px", padding: 15, background: "#fff", borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin: 0 }}>{stat.label}</h3>
            <p style={{ fontSize: 24, margin: "5px 0", fontWeight: "bold" }}>{stat.value}</p>
            <div style={{ height: 10, background: "#e5e7eb", borderRadius: 6, overflow: "hidden" }}>
              <div style={{ width: `${(stat.value / totalStatCount) * 100}%`, background: stat.color, height: "100%" }} />
            </div>
          </div>
        ))}
      </div>

      {/* Inbox */}
      <section style={{ marginTop: 40 }}>
        <h2>Message Inbox</h2>
        <input
          type="text"
          placeholder="Search messages..."
          style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ddd", marginBottom: 20 }}
        />
        {inbox.map((msg, idx) => (
          <div key={idx} style={{ display: "flex", gap: 15, padding: 12, border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, background: "#fff" }}>
            {/* Circle Avatar */}
            <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#2563eb", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
              {msg.sender}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{msg.name}</strong>
                <span style={{ fontSize: 12, color: "#888" }}>{msg.time}</span>
              </div>
              <p style={{ margin: "2px 0", fontSize: 14 }}>{msg.subject} - {msg.role}</p>
              <p style={{ fontSize: 12, color: "#555" }}>{msg.preview}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Messages;
