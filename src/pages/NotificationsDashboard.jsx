import React, { useState } from "react";

// Mock notifications
const initialNotifications = [
  { id: 1, type: "Payment", message: "Tuition due for October", read: false },
  { id: 2, type: "Document", message: "Medical card expiring soon", read: false },
  { id: 3, type: "Class", message: "Math class tomorrow at 10:00 AM", read: false },
];

// Mock tickets
const initialTickets = [
  { id: 1, subject: "Account Issue", status: "Open" },
  { id: 2, subject: "Document Upload Error", status: "Open" },
];

// Mock compliance
const initialCompliance = [
  { name: "DOT License", expires: "2025-12-01" },
  { name: "Medical Card", expires: "2025-11-15" },
];

const NotificationsDashboard = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [tickets, setTickets] = useState(initialTickets);
  const [compliance, setCompliance] = useState(initialCompliance);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const closeTicket = (id) => {
    setTickets(tickets.map((t) => (t.id === id ? { ...t, status: "Closed" } : t)));
  };

  const sendNotification = (type, message) => {
    const newNotification = {
      id: notifications.length + 1,
      type,
      message,
      read: false,
    };
    setNotifications([newNotification, ...notifications]);
    alert(`Notification sent: ${message}`);
  };

  const today = new Date();

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        <h1 style={styles.title}>Admin / Compliance Dashboard</h1>

        {/* Notifications */}
        <div style={styles.card}>
          <h2>Notifications</h2>
          <button
            style={styles.button}
            onClick={() => sendNotification("Payment", "New payment reminder sent")}
          >
            Send Test Notification
          </button>
          <ul>
            {notifications.map((n) => (
              <li key={n.id} style={{ marginBottom: "8px", opacity: n.read ? 0.5 : 1 }}>
                <strong>{n.type}:</strong> {n.message}
                {!n.read && (
                  <button
                    style={{ ...styles.smallButton, marginLeft: "10px" }}
                    onClick={() => markAsRead(n.id)}
                  >
                    Mark Read
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Internal Messaging */}
        <div style={styles.card}>
          <h2>Internal Messaging</h2>
          <p>Chat feature placeholder: Send messages between Student / Teacher / Admin</p>
        </div>

        {/* Help Desk Tickets */}
        <div style={styles.card}>
          <h2>Support / Help Desk Tickets</h2>
          <ul>
            {tickets.map((t) => (
              <li key={t.id} style={{ marginBottom: "8px" }}>
                {t.subject} - Status: {t.status}
                {t.status === "Open" && (
                  <button
                    style={{ ...styles.smallButton, marginLeft: "10px" }}
                    onClick={() => closeTicket(t.id)}
                  >
                    Close Ticket
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance & Records */}
        <div style={styles.card}>
          <h2>Compliance & Records</h2>
          <ul>
            {compliance.map((c, i) => {
              const expiry = new Date(c.expires);
              const expired = expiry < today;
              return (
                <li key={i} style={{ color: expired ? "red" : "black" }}>
                  {c.name} - Expires: {c.expires} {expired && "(Expired ⚠️)"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    background: "#eef2ff",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  dashboard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    width: "100%",
    maxWidth: "900px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "#1e40af",
    marginBottom: "20px",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#f9fafb",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  smallButton: {
    padding: "4px 8px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default NotificationsDashboard;
