import React from "react";
import { FaUserCheck, FaUserTimes, FaUserClock, FaCalendarAlt } from "react-icons/fa";

const attendanceRecords = [
  {
    name: "John Smith",
    course: "Class A CDL Theory",
    date: "Jan 15, 2025",
    time: "9:00 AM - 12:00 PM",
    status: "Present",
    note: "",
  },
  {
    name: "Emily Davis",
    course: "Behind-the-Wheel Training",
    date: "Jan 15, 2025",
    time: "1:00 PM - 4:00 PM",
    status: "Absent",
    note: "Called in sick",
  },
  {
    name: "Michael Brown",
    course: "Defensive Driving",
    date: "Jan 15, 2025",
    time: "10:00 AM - 2:00 PM",
    status: "Late",
    note: "Arrived 15 minutes late",
  },
  {
    name: "Sarah Wilson",
    course: "Class A CDL Theory",
    date: "Jan 15, 2025",
    time: "9:00 AM - 12:00 PM",
    status: "Present",
    note: "",
  },
];

const statusIcons = {
  Present: <FaUserCheck color="#10b981" />,
  Absent: <FaUserTimes color="#ef4444" />,
  Late: <FaUserClock color="#f59e0b" />,
};

const Attendance = () => {
  return (
    <div style={styles.container}>
      <h2>Attendance Tracking</h2>
      <p>Record and manage student attendance for your classes</p>

      <div style={styles.summary}>
        <div style={styles.summaryCard}>
          <h3>Today's Classes</h3>
          <p>3</p>
        </div>
        <div style={styles.summaryCard}>
          <h3>Total Students</h3>
          <p>24</p>
        </div>
        <div style={styles.summaryCard}>
          <h3>Attendance Rate</h3>
          <p>92%</p>
        </div>
      </div>

      <h3 style={{ marginTop: 20 }}>Recent Attendance Records</h3>
      <div style={styles.records}>
        {attendanceRecords.map((record, index) => (
          <div key={index} style={styles.recordCard}>
            <div style={styles.statusIcon}>{statusIcons[record.status]}</div>
            <div style={styles.info}>
              <h4>{record.name}</h4>
              <p>{record.course}</p>
              <p><FaCalendarAlt /> {record.date} • {record.time}</p>
              {record.note && <p style={{ fontStyle: "italic", color: "#6b7280" }}>Note: {record.note}</p>}
            </div>
            <div>
              <button style={styles.editButton}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: "sans-serif",
  },
  summary: {
    display: "flex",
    gap: 20,
    marginTop: 10,
  },
  summaryCard: {
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    flex: 1,
    textAlign: "center",
  },
  records: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 10,
  },
  recordCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  statusIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  editButton: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
  },
};

export default Attendance;

