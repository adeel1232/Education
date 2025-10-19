import React from "react";
import { FaChalkboardTeacher, FaClock, FaUsers, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome back, Mary!</h2>
      <p>Your teaching schedule and student progress overview</p>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <FaUsers size={24} color="#2563eb" />
          <div>
            <h3>24</h3>
            <p>Assigned Students</p>
          </div>
        </div>

        <div style={styles.card}>
          <FaChalkboardTeacher size={24} color="#2563eb" />
          <div>
            <h3>8</h3>
            <p>Classes This Week</p>
            <small>6 theory, 2 practical</small>
          </div>
        </div>

        <div style={styles.card}>
          <FaClock size={24} color="#2563eb" />
          <div>
            <h3>86</h3>
            <p>Hours This Month</p>
          </div>
        </div>

        <div style={styles.card}>
          <FaCheckCircle size={24} color="#2563eb" />
          <div>
            <h3>94%</h3>
            <p>Attendance Rate</p>
            <small>↑ 3% improvement</small>
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div style={styles.section}>
        <h3>Today's Classes</h3>
        <div style={styles.classCard}>
          <div>
            <strong>Defensive Driving Theory</strong>
            <p>9:00 AM - 12:00 PM</p>
            <p>12 students • Room 101</p>
          </div>
          <button style={styles.button}>Start Class</button>
        </div>

        <div style={styles.classCard}>
          <div>
            <strong>Behind-the-Wheel Training</strong>
            <p>1:00 PM - 4:00 PM</p>
            <p>4 students • Training Yard</p>
          </div>
          <button style={styles.button}>Start Class</button>
        </div>
      </div>

      {/* Recent Student Activity */}
      <div style={styles.section}>
        <h3>Recent Student Activity</h3>
        <ul style={styles.activityList}>
          <li>
            <strong>John Smith</strong> - Completed Pre-Trip Inspection module
            <span>2 hours ago</span>
          </li>
          <li>
            <strong>Emily Davis</strong> - Submitted Road Test assignment
            <span>4 hours ago</span>
          </li>
          <li>
            <strong>Michael Brown</strong> - Attended Air Brakes class
            <span>Yesterday</span>
          </li>
        </ul>
      </div>

      {/* Clock In/Out */}
      <div style={styles.section}>
        <h3>Clock In/Out</h3>
        <div style={styles.clockCard}>
          <p><strong>Clocked In</strong></p>
          <p>Today's Hours: 5h 23m</p>
          <button style={styles.button}>Clock Out</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  cards: {
    display: "flex",
    gap: 20,
    marginTop: 20,
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    minWidth: 200,
    flex: 1,
  },
  section: {
    marginTop: 30,
  },
  classCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    marginBottom: 10,
  },
  button: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
  activityList: {
    listStyle: "none",
    padding: 0,
    marginTop: 10,
  },
  clockCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
};

export default Dashboard;
