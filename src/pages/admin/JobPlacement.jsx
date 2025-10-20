import React, { useState, useEffect } from "react";
import { FaEye, FaUserGraduate, FaBriefcase, FaFileAlt } from "react-icons/fa";

const initialParticipants = [
  { id: "STU-001", name: "John Smith", course: "Class A CDL", status: "Active" },
  { id: "STU-002", name: "Emily Davis", course: "Defensive Driving", status: "Active" },
  { id: "STU-003", name: "Michael Brown", course: "Hazmat Certification", status: "Completed" },
];

const initialJobs = [
  { id: "JOB-001", title: "Long Haul Truck Driver", company: "TransAmerica Logistics", status: "Open" },
  { id: "JOB-002", title: "Regional CDL Driver", company: "Swift Transportation", status: "Open" },
];

const initialApplications = [
  { id: "APP-001", candidate: "John Smith", job: "Long Haul Truck Driver", date: "Oct 10, 2025", status: "Under Review" },
  { id: "APP-002", candidate: "Emily Davis", job: "Regional CDL Driver", date: "Oct 12, 2025", status: "Interview Scheduled" },
];

export default function TrainingDashboard() {
  const [participants, setParticipants] = useState(initialParticipants);
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [viewItem, setViewItem] = useState(null);

  // Animated stats
  const [counts, setCounts] = useState({ participants: 0, jobs: 0, applications: 0, investment: 0 });

  useEffect(() => {
    const duration = 30000; // 30 seconds
    const intervalTime = 50; // update every 50ms
    const steps = duration / intervalTime;
    const increment = {
      participants: 12 / steps,
      jobs: 5 / steps,
      applications: 48 / steps,
      investment: 45000 / steps,
    };
    let current = { participants: 0, jobs: 0, applications: 0, investment: 0 };
    const interval = setInterval(() => {
      current = {
        participants: Math.min(current.participants + increment.participants, 12),
        jobs: Math.min(current.jobs + increment.jobs, 5),
        applications: Math.min(current.applications + increment.applications, 48),
        investment: Math.min(current.investment + increment.investment, 45000),
      };
      setCounts({ ...current });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      <h1>Training Dashboard</h1>
      <p>Overview of training participants, applications, and investment</p>

      {/* Stats */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        <StatCard icon={<FaUserGraduate />} label="Employees in Training" value={Math.floor(counts.participants)} color="#4caf50" />
        <StatCard icon={<FaBriefcase />} label="Active Job Postings" value={Math.floor(counts.jobs)} color="#2196f3" />
        <StatCard icon={<FaFileAlt />} label="Total Applications" value={Math.floor(counts.applications)} extra="+23% this month" color="#ff9800" />
        <StatCard icon={<FaDollarSign />} label="Training Investment" value={`$${Math.floor(counts.investment).toLocaleString()}`} color="#9c27b0" />
      </div>

      {/* Participants Table */}
      <Table title="Active Participants" data={participants} columns={["id", "name", "course", "status"]} onView={setViewItem} />

      {/* Jobs Table */}
      <Table title="Active Job Postings" data={jobs} columns={["id", "title", "company", "status"]} onView={setViewItem} />

      {/* Applications Table */}
      <Table title="Total Applications" data={applications} columns={["id", "candidate", "job", "date", "status"]} onView={setViewItem} />

      {/* View Modal */}
      {viewItem && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Details</h3>
            {Object.entries(viewItem).map(([key, val]) => (
              <p key={key}><strong>{key}:</strong> {val}</p>
            ))}
            <button style={buttonStyle("#f44336")} onClick={() => setViewItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Components
function StatCard({ icon, label, value, extra, color }) {
  return (
    <div style={{ flex: "1 1 200px", background: "#fff", padding: "20px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <div style={{ fontSize: "32px", color }}>{icon}</div>
      <div>
        <h3 style={{ margin: 0 }}>{label}</h3>
        <h2 style={{ margin: "5px 0" }}>{value}</h2>
        {extra && <small style={{ color: "#555" }}>{extra}</small>}
      </div>
    </div>
  );
}

function Table({ title, data, columns, onView }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>{title}</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#e0e0e0", textAlign: "left" }}>
            {columns.map(col => <th key={col} style={thTdStyle}>{col.toUpperCase()}</th>)}
            <th style={thTdStyle}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              {columns.map(col => <td key={col} style={thTdStyle}>{row[col]}</td>)}
              <td style={thTdStyle}>
                <button style={buttonStyle("#2196f3")} onClick={() => onView(row)}><FaEye /> View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const thTdStyle = { padding: "10px" };
const buttonStyle = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "5px 10px",
  borderRadius: "5px",
  border: "none",
  background: color,
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
});
const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const modalContent = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};
