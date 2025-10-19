import React from "react";
import { FaCalendarAlt, FaClock, FaUsers, FaPlus } from "react-icons/fa";

const upcomingClasses = [
  {
    name: "Class A CDL - Theory Session",
    date: "Today",
    time: "09:00 AM",
    room: "Room 101",
    students: 24,
  },
  {
    name: "Behind-the-Wheel Training",
    date: "Today",
    time: "01:00 PM",
    room: "Training Yard",
    students: 8,
  },
  {
    name: "Defensive Driving Workshop",
    date: "Tomorrow",
    time: "10:00 AM",
    room: "Room 203",
    students: 15,
  },
];

const weeklySchedule = [
  {
    name: "Class A CDL - Theory Session",
    date: "2025-01-20",
    time: "09:00 - 12:00",
    room: "Room 101",
    students: 24,
    status: "Scheduled",
  },
  {
    name: "Behind-the-Wheel Training",
    date: "2025-01-20",
    time: "13:00 - 17:00",
    room: "Training Yard",
    students: 8,
    status: "In Progress",
  },
  {
    name: "Defensive Driving Workshop",
    date: "2025-01-21",
    time: "10:00 - 15:00",
    room: "Room 203",
    students: 15,
    status: "Scheduled",
  },
  {
    name: "CDL Exam Preparation",
    date: "2025-01-22",
    time: "14:00 - 16:00",
    room: "Room 101",
    students: 12,
    status: "Scheduled",
  },
];

const quickStats = {
  classesThisWeek: 12,
  totalStudents: 186,
  hoursThisWeek: 32,
  completionRate: "94%",
};

const Schedule = () => {
  return (
    <div style={styles.container}>
      <h2>My Schedule</h2>
      <p>Manage your classes and training sessions</p>

      <button style={styles.addSession}><FaPlus /> Add Session</button>

      <section style={styles.section}>
        <h3>Upcoming Classes</h3>
        {upcomingClasses.map((cls, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>
              <strong>{cls.name}</strong>
              <span style={styles.status}>{cls.date} at {cls.time}</span>
            </div>
            <p><FaCalendarAlt /> {cls.room}</p>
            <p><FaUsers /> {cls.students} students</p>
            <button style={styles.startButton}>Start Class</button>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h3>Weekly Schedule</h3>
        {weeklySchedule.map((cls, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardHeader}>
              <strong>{cls.name}</strong>
              <span style={styles.status}>{cls.status}</span>
            </div>
            <p><FaCalendarAlt /> {cls.date}</p>
            <p><FaClock /> {cls.time}</p>
            <p><FaUsers /> {cls.students} students</p>
            <p>Room: {cls.room}</p>
            <button style={styles.editButton}>Edit</button>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h3>Quick Stats</h3>
        <div style={styles.stats}>
          <div style={styles.statCard}><strong>{quickStats.classesThisWeek}</strong><p>Classes This Week</p></div>
          <div style={styles.statCard}><strong>{quickStats.totalStudents}</strong><p>Total Students</p></div>
          <div style={styles.statCard}><strong>{quickStats.hoursThisWeek}</strong><p>Hours This Week</p></div>
          <div style={styles.statCard}><strong>{quickStats.completionRate}</strong><p>Completion Rate</p></div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  section: { marginTop: 20 },
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    marginBottom: 12,
  },
  cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: 8 },
  status: { fontWeight: 500, color: "#2563eb" },
  startButton: {
    marginTop: 8,
    padding: "6px 12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  editButton: {
    marginTop: 8,
    padding: "6px 12px",
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  addSession: {
    padding: "6px 12px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  stats: { display: "flex", gap: 15, flexWrap: "wrap", marginTop: 10 },
  statCard: {
    flex: 1,
    minWidth: 120,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
};

export default Schedule;

