import React, { useState } from "react";
import {
  FaUserGraduate,
  FaClock,
  FaChartLine,
  FaClipboardList,
  FaTimes
} from "react-icons/fa";
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

const studentProgress = [
  { name: "John Smith", progress: "90%", attendance: "95%" },
  { name: "Sara Khan", progress: "85%", attendance: "91%" },
  { name: "Mike Adams", progress: "88%", attendance: "93%" },
  { name: "Emily Clark", progress: "92%", attendance: "97%" }
];

const Reports = () => {
  const [showModal, setShowModal] = useState(false);

  // 1️⃣ Export Monthly Report (CSV)
  const handleExportReport = () => {
    const csvData = teachingHoursData
      .map((d) => `${d.month},${d.hours}`)
      .join("\n");
    const blob = new Blob(
      ["Month,Teaching Hours\n" + csvData],
      { type: "text/csv;charset=utf-8;" }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Monthly_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 2️⃣ Open Student Progress Modal
  const handleStudentProgress = () => setShowModal(true);

  // 3️⃣ Print Attendance Summary
  const handleAttendanceSummary = () => {
    const printWindow = window.open("", "_blank");
    const content = `
      <h2>Attendance Summary</h2>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th>Month</th><th>Attendance %</th></tr>
        ${studentAttendanceData
          .map((d) => `<tr><td>${d.month}</td><td>${d.attendance}%</td></tr>`)
          .join("")}
      </table>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

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
        <button style={styles.button} onClick={handleExportReport}>
          Export Monthly Report
        </button>
        <button style={styles.button} onClick={handleStudentProgress}>
          Student Progress Report
        </button>
        <button style={styles.button} onClick={handleAttendanceSummary}>
          Attendance Summary
        </button>
      </div>

      {/* Student Progress Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h3>Student Progress Report</h3>
              <FaTimes style={{ cursor: "pointer" }} onClick={() => setShowModal(false)} />
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                {studentProgress.map((s, i) => (
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>{s.progress}</td>
                    <td>{s.attendance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
  graph: {
    flex: 1,
    minWidth: 300,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  },
  achievements: {
    marginTop: 20,
    background: "#fff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  },
  actions: { marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: 6,
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 400,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  }
};

export default Reports;
