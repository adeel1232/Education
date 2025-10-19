import React from "react";
import { FaUserGraduate, FaClock, FaChartLine, FaClipboardList } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const studentAttendanceData = [
  { month: "Jan", attendance: 78 },
  { month: "Feb", attendance: 82 },
  { month: "Mar", attendance: 85 },
  { month: "Apr", attendance: 88 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 91 }
];

const teachingHoursData = [
  { month: "Jan", hours: 120 },
  { month: "Feb", hours: 135 },
  { month: "Mar", hours: 140 },
  { month: "Apr", hours: 150 },
  { month: "May", hours: 160 },
  { month: "Jun", hours: 165 }
];

const Reports = () => {
  return (
    <div style={styles.container}>
      <h2>Reports & Analytics</h2>
      <p>Track your teaching performance and student outcomes</p>

      {/* Summary Cards */}
      <div style={styles.summary}>
        <div style={styles.card}>
          <FaUserGraduate style={styles.icon} />
          <strong>24</strong>
          <p>Total Students</p>
        </div>
        <div style={styles.card}>
          <FaClipboardList style={styles.icon} />
          <strong>91%</strong>
          <p>Average Attendance</p>
        </div>
        <div style={styles.card}>
          <FaClock style={styles.icon} />
          <strong>165</strong>
          <p>Teaching Hours</p>
        </div>
        <div style={styles.card}>
          <FaChartLine style={styles.icon} />
          <strong>87%</strong>
          <p>Completion Rate</p>
        </div>
      </div>

      {/* Graphs */}
      <div style={styles.graphs}>
        <div style={styles.graph}>
          <h4>Student Attendance Trend</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={studentAttendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.graph}>
          <h4>Teaching Hours</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={teachingHoursData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievements */}
      <div style={styles.achievements}>
        <h4>Recent Achievements</h4>
        <ul>
          <li>📈 Attendance Improvement: +5% this month</li>
          <li>🆕 New Students: 3 new enrollments</li>
          <li>🏆 Perfect Attendance: 2 weeks in a row</li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div style={styles.actions}>
        <button style={styles.button}>Export Monthly Report</button>
        <button style={styles.button}>Student Progress Report</button>
        <button style={styles.button}>Attendance Summary</button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: 20, fontFamily: "sans-serif" },
  summary: {
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
    marginTop: 15
  },
  card: {
    flex: 1,
    minWidth: 140,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "center"
  },
  icon: { fontSize: 24, color: "#2563eb", marginBottom: 5 },
  graphs: { display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 },
  graph: { flex: 1, minWidth: 300, background: "#fff", padding: 15, borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  achievements: { marginTop: 20, background: "#fff", padding: 15, borderRadius: 8, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  actions: { marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: 6,
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Reports;
