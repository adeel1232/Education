import React, { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaDollarSign,
  FaBriefcase,
  FaFileAlt,
  FaExclamationCircle,
} from "react-icons/fa";

const initialAdminStats = [
  { name: "Total Students", value: 248, icon: <FaUserGraduate />, trend: "↑ 12% from last month" },
  { name: "Instructors", value: 18, icon: <FaChalkboardTeacher />, trend: "" },
  { name: "Monthly Revenue", value: 178000, icon: <FaDollarSign />, trend: "↑ 15% increase" },
  { name: "Job Placements", value: 42, icon: <FaBriefcase />, trend: "↑ 8% increase" },
];

const initialPendingDocs = [
  { id: 1, name: "John Smith", doc: "DOT Medical Card", time: "2 hours ago", status: "Pending" },
  { id: 2, name: "Emily Davis", doc: "Driver's License", time: "5 hours ago", status: "Pending" },
  { id: 3, name: "Michael Brown", doc: "Proof of Residency", time: "1 day ago", status: "Pending" },
];

const initialComplianceAlerts = [
  { title: "Expiring Medical Certificates", items: 8, deadline: "Within 30 days" },
  { title: "Missing Background Checks", items: 3, deadline: "Immediate" },
  { title: "License Renewals Due", items: 12, deadline: "Within 60 days" },
];

export default function AdminDashboard() {
  const [adminStats, setAdminStats] = useState(initialAdminStats.map(s => ({ ...s, animatedValue: 0 })));
  const [pendingDocs, setPendingDocs] = useState(initialPendingDocs);
  const [complianceAlerts, setComplianceAlerts] = useState(initialComplianceAlerts);

  // Animate numbers (0 -> value)
  useEffect(() => {
    adminStats.forEach((stat, idx) => {
      let start = 0;
      const end = stat.value;
      const duration = 20000; // 20 seconds
      const stepTime = 50; // update every 50ms
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        setAdminStats(prev => {
          const newStats = [...prev];
          newStats[idx].animatedValue = start >= end ? end : Math.floor(start);
          return newStats;
        });
      }, stepTime);

      return () => clearInterval(timer);
    });
  }, []);

  // Handle Approve/Reject
  const handleDocAction = (id, action) => {
    setPendingDocs(prev =>
      prev.map(doc =>
        doc.id === id ? { ...doc, status: action } : doc
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Dashboard</h1>
      <p>Complete overview of school operations and analytics</p>

      {/* Stats Section */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {adminStats.map((stat) => (
          <div key={stat.name} style={{
            flex: "1 1 200px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "32px", marginBottom: "10px" }}>{stat.icon}</div>
            <h3>{stat.name}</h3>
            <h2>{stat.name === "Monthly Revenue" ? `$${stat.animatedValue.toLocaleString()}` : stat.animatedValue}</h2>
            <p style={{ color: "green", fontSize: "14px" }}>{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{ display: "flex", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>Student Enrollments</h3>
          <div style={{ height: "150px", background: "#e0e0e0", borderRadius: "5px", display: "flex", justifyContent: "space-around", alignItems: "flex-end", padding: "10px" }}>
            {[20, 40, 60, 80, 70, 50].map((val, i) => (
              <div key={i} style={{ width: "20px", height: `${val}px`, background: "#4caf50", borderRadius: "3px" }}></div>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 400px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>Revenue Trend</h3>
          <div style={{ height: "150px", background: "#e0e0e0", borderRadius: "5px", display: "flex", justifyContent: "space-around", alignItems: "flex-end", padding: "10px" }}>
            {[45000, 90000, 135000, 180000, 120000, 150000].map((val, i) => (
              <div key={i} style={{ width: "20px", height: `${val / 1000}px`, background: "#2196f3", borderRadius: "3px" }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Document Approvals */}
      <div style={{ marginTop: "40px" }}>
        <h3>Pending Document Approvals</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {pendingDocs.map((doc) => (
            <div key={doc.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#f5f5f5", borderRadius: "5px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <div>
                <strong>{doc.name}</strong> - {doc.doc} <br />
                <small>{doc.time}</small> <br />
                <small>Status: {doc.status}</small>
              </div>
              <div>
                <button
                  onClick={() => handleDocAction(doc.id, "Approved")}
                  style={{ marginRight: "10px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}
                  disabled={doc.status === "Approved"}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDocAction(doc.id, "Rejected")}
                  style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#f44336", color: "#fff" }}
                  disabled={doc.status === "Rejected"}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Alerts */}
      <div style={{ marginTop: "40px" }}>
        <h3>Compliance Alerts</h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {complianceAlerts.map((alert, i) => (
            <div key={i} style={{ flex: "1 1 250px", background: "#fff3e0", padding: "15px", borderRadius: "10px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "10px" }}>
              <FaExclamationCircle style={{ fontSize: "24px", color: "#ff9800" }} />
              <div>
                <strong>{alert.title}</strong> <br />
                {alert.items} items • {alert.deadline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
