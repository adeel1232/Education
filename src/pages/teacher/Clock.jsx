import React, { useState } from "react";
import { FaClock, FaArrowUp, FaArrowDown } from "react-icons/fa";

const recentEntries = [
  { date: "Jan 15, 2025", status: "Completed", start: "8:30 AM", end: "5:15 PM", hours: "8h 45m" },
  { date: "Jan 14, 2025", status: "Completed", start: "8:45 AM", end: "4:30 PM", hours: "7h 45m" },
  { date: "Jan 13, 2025", status: "Completed", start: "9:00 AM", end: "5:00 PM", hours: "8h 0m" },
];

const Timesheet = () => {
  const [clockedIn, setClockedIn] = useState(false);

  const handleClockIn = () => setClockedIn(true);
  const handleClockOut = () => setClockedIn(false);

  return (
    <div style={styles.container}>
      <h2>Timesheet</h2>
      <p>Track your work hours and manage your schedule</p>

      <section style={styles.section}>
        <h3>Today's Status</h3>
        <div style={styles.statusBox}>
          <FaClock style={{ fontSize: 24, marginRight: 10 }} />
          <span>{clockedIn ? "Clocked In" : "Not Clocked In"}</span>
        </div>
        <p style={{ marginTop: 5, color: "#6b7280" }}>
          {clockedIn ? "You are currently clocked in" : "Ready to start your day"}
        </p>

        <div style={styles.actions}>
          <button
            onClick={handleClockIn}
            disabled={clockedIn}
            style={{ ...styles.button, background: "#2563eb" }}
          >
            <FaArrowUp /> Clock In
          </button>
          <button
            onClick={handleClockOut}
            disabled={!clockedIn}
            style={{ ...styles.button, background: "#ef4444" }}
          >
            <FaArrowDown /> Clock Out
          </button>
        </div>
      </section>

      <section style={styles.section}>
        <h3>Summary</h3>
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <strong>24h 30m</strong>
            <p>This Week</p>
          </div>
          <div style={styles.statCard}>
            <strong>156h 45m</strong>
            <p>This Month</p>
          </div>
          <div style={styles.statCard}>
            <strong>8h 15m</strong>
            <p>Average Daily</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h3>Recent Entries</h3>
        {recentEntries.map((entry, idx) => (
          <div key={idx} style={styles.entry}>
            <strong>{entry.date}</strong>
            <p>{entry.status} | {entry.start} - {entry.end} • {entry.hours}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  section: { marginTop: 20 },
  statusBox: {
    display: "flex",
    alignItems: "center",
    background: "#f3f4f6",
    padding: 10,
    borderRadius: 6,
    width: 200,
  },
  actions: { display: "flex", gap: 10, marginTop: 10 },
  button: {
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  stats: { display: "flex", gap: 15, marginTop: 10, flexWrap: "wrap" },
  statCard: {
    flex: 1,
    minWidth: 120,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  entry: {
    background: "#fff",
    padding: 12,
    borderRadius: 6,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    marginBottom: 8,
  },
};

export default Timesheet;
