import React from "react";
import { FaExclamationTriangle, FaClock, FaCheckCircle, FaFileExport } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Stats Cards
const stats = [
  { name: "Critical Items", value: 3, icon: <FaExclamationTriangle />, color: "#f44336" },
  { name: "Expiring Soon", value: 8, icon: <FaClock />, color: "#ff9800" },
  { name: "Upcoming", value: 12, icon: <FaClock />, color: "#2196f3" },
  { name: "Compliance Rate", value: "94%", icon: <FaCheckCircle />, color: "#4caf50" },
];

// Compliance Items
const complianceItems = [
  { type: "Expiring Soon", priority: "High", title: "DOT Medical Certificates", details: "Medical certificates expiring within 30 days", count: 8, due: "Jan 25, 2025" },
  { type: "Overdue", priority: "Critical", title: "Background Checks", details: "Background checks overdue for new instructors", count: 3, due: "Jan 10, 2025" },
  { type: "Upcoming", priority: "Medium", title: "License Renewals", details: "Driver's license renewals due within 60 days", count: 12, due: "Feb 15, 2025" },
  { type: "Current", priority: "Low", title: "Safety Training Records", details: "Annual safety training completion records", count: 45, due: "Mar 1, 2025" },
];

// Recent Activity
const recentActivity = [
  { action: "Document Approved", description: "DOT Medical Certificate approved for John Smith", user: "Admin User", time: "Jan 15, 2025 10:30 AM" },
  { action: "Compliance Check", description: "Automated compliance check completed", user: "System", time: "Jan 15, 2025 9:15 AM" },
  { action: "Document Rejected", description: "Background check rejected for Mike Johnson - missing information", user: "Admin User", time: "Jan 14, 2025 3:45 PM" },
];

// Compliance Trend Graph
const complianceTrend = [
  { month: "Jan", items: 5 },
  { month: "Feb", items: 3 },
  { month: "Mar", items: 4 },
  { month: "Apr", items: 2 },
  { month: "May", items: 3 },
  { month: "Jun", items: 1 },
];

export default function ComplianceManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Compliance Management</h1>
      <p>Monitor and manage regulatory compliance and documentation</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            flex: "1 1 200px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "32px", color: stat.color }}>{stat.icon}</div>
            <div>
              <h3 style={{ margin: 0 }}>{stat.name}</h3>
              <h2 style={{ margin: "5px 0" }}>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Items */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Compliance Items</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {complianceItems.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div>
                <strong>{item.title}</strong> ({item.priority})<br />
                <small>{item.details}</small><br />
                <small>{item.count} items • Due: {item.due}</small>
              </div>
              <button style={{
                padding: "5px 15px",
                borderRadius: "5px",
                border: "none",
                background: item.priority === "Critical" ? "#f44336" : item.priority === "High" ? "#ff9800" : "#2196f3",
                color: "#fff",
                fontWeight: "bold"
              }}>
                View / Take Action
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Recent Activity</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {recentActivity.map((act, i) => (
            <div key={i} style={{
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <strong>{act.action}</strong> - {act.description}<br />
              <small>{act.user} • {act.time}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Trend Graph */}
      <div style={{ marginBottom: "30px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <h3>Compliance Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={complianceTrend}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="items" fill="#ff9800" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Export Reports */}
      <div>
        <h3>Compliance Reports</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
            <FaFileExport /> Generate DOT Compliance
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>
            <FaFileExport /> Safety Audit
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff" }}>
            <FaFileExport /> Document Status
          </button>
        </div>
      </div>
    </div>
  );
}
