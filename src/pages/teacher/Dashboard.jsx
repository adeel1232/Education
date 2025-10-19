import React, { useState, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaClock,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const [students, setStudents] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [activeClass, setActiveClass] = useState(null);
  const [clockedIn, setClockedIn] = useState(false);
  const [clockTime, setClockTime] = useState(0);

  // Animate Assigned Students (0 → 30)
  useEffect(() => {
    let start = 0;
    const end = 30;
    const duration = 3000; // 3 sec
    const increment = (end - start) / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setStudents(Math.floor(start));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animate Attendance Rate (0 → 95%)
  useEffect(() => {
    let start = 0;
    const end = 95;
    const duration = 10000; // 10 sec
    const increment = (end - start) / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setAttendance(Math.floor(start));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Handle Clock In/Out Timer
  useEffect(() => {
    let interval;
    if (clockedIn) {
      interval = setInterval(() => {
        setClockTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [clockedIn]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const toggleClock = () => {
    setClockedIn((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome back, Mary!</h2>
      <p>Your teaching schedule and student progress overview</p>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <FaUsers size={24} color="#2563eb" />
          <div>
            <h3>{students}</h3>
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
            <h3>{attendance}%</h3>
            <p>Attendance Rate</p>
            <small>↑ 3% improvement</small>
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div style={styles.section}>
        <h3>Today's Classes</h3>
        {[
          {
            title: "Defensive Driving Theory",
            time: "9:00 AM - 12:00 PM",
            students: "12 students • Room 101",
          },
          {
            title: "Behind-the-Wheel Training",
            time: "1:00 PM - 4:00 PM",
            students: "4 students • Training Yard",
          },
        ].map((cls, i) => (
          <div key={i} style={styles.classCard}>
            <div>
              <strong>{cls.title}</strong>
              <p>{cls.time}</p>
              <p>{cls.students}</p>
              {activeClass === i && (
                <p style={{ color: "#2563eb", marginTop: 5 }}>
                  Class Details: Attendance tracking, materials ready, and
                  student list loaded.
                </p>
              )}
            </div>
            <button
              style={styles.button}
              onClick={() =>
                setActiveClass(activeClass === i ? null : i)
              }
            >
              {activeClass === i ? "Close Details" : "Start Class"}
            </button>
          </div>
        ))}
      </div>

      {/* Clock In/Out */}
      <div style={styles.section}>
        <h3>Clock In/Out</h3>
        <div style={styles.clockCard}>
          <p>
            <strong>{clockedIn ? "Clocked In" : "Clocked Out"}</strong>
          </p>
          <p>
            Today's Hours: {clockedIn ? formatTime(clockTime) : formatTime(clockTime)}
          </p>
          <button style={styles.button} onClick={toggleClock}>
            {clockedIn ? "Clock Out" : "Clock In"}
          </button>
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
