import React from "react";
import { FaDollarSign, FaMoneyCheckAlt, FaExclamationCircle, FaCheckCircle, FaTimesCircle, FaFileExport, FaSearch, FaFilter } from "react-icons/fa";

const stats = [
  { name: "Total Revenue", value: "$125,400", icon: <FaDollarSign />, color: "#4caf50" },
  { name: "Monthly Revenue", value: "$28,400", icon: <FaMoneyCheckAlt />, color: "#2196f3" },
  { name: "Pending Payments", value: "$8,600", icon: <FaExclamationCircle />, color: "#ff9800" },
  { name: "Overdue Payments", value: "$3,200", icon: <FaTimesCircle />, color: "#f44336" },
  { name: "Payment Completion Rate", value: "87%", icon: <FaCheckCircle />, color: "#9c27b0" },
  { name: "Average Payment", value: "$1,850", icon: <FaDollarSign />, color: "#00bcd4" },
  { name: "Total Transactions", value: 248, icon: <FaMoneyCheckAlt />, color: "#ff9800" },
];

const transactions = [
  { id: "PAY-001", student: "John Smith", email: "john.smith@email.com", course: "Class A CDL", amount: "$2,500", method: "Credit Card", status: "Completed", date: "2025-01-15" },
  { id: "PAY-002", student: "Emily Davis", email: "emily.davis@email.com", course: "Behind-the-Wheel", amount: "$1,800", method: "ACH Transfer", status: "Pending", date: "2025-01-14" },
  { id: "PAY-003", student: "Michael Brown", email: "michael.brown@email.com", course: "Defensive Driving", amount: "$800", method: "Debit Card", status: "Failed", date: "2025-01-13" },
  { id: "PAY-004", student: "Sarah Wilson", email: "sarah.wilson@email.com", course: "Class A CDL", amount: "$2,500", method: "Credit Card", status: "Overdue", date: "2025-01-10", due: "2025-01-10" },
  { id: "PAY-005", student: "David Johnson", email: "david.johnson@email.com", course: "Hazmat Certification", amount: "$1,200", method: "Bank Transfer", status: "Completed", date: "2025-01-12" },
];

export default function PaymentManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Payment Management</h1>
      <p>Oversee all student payments, revenue tracking, and financial operations</p>

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

      {/* Transactions Table */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Payment Transactions</h3>

        {/* Search & Actions */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
            <FaSearch /> Search
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff" }}>
            <FaFilter /> Filter
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>
            <FaFileExport /> Export
          </button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#e0e0e0", textAlign: "left" }}>
              <th style={{ padding: "10px" }}>Transaction ID</th>
              <th style={{ padding: "10px" }}>Student</th>
              <th style={{ padding: "10px" }}>Course</th>
              <th style={{ padding: "10px" }}>Amount</th>
              <th style={{ padding: "10px" }}>Method</th>
              <th style={{ padding: "10px" }}>Status</th>
              <th style={{ padding: "10px" }}>Date</th>
              <th style={{ padding: "10px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{tx.id}</td>
                <td style={{ padding: "10px" }}>{tx.student} <br /><small>{tx.email}</small></td>
                <td style={{ padding: "10px" }}>{tx.course}</td>
                <td style={{ padding: "10px" }}>{tx.amount}</td>
                <td style={{ padding: "10px" }}>{tx.method}</td>
                <td style={{ padding: "10px", color: tx.status === "Completed" ? "#4caf50" : tx.status === "Pending" ? "#ff9800" : "#f44336" }}>{tx.status}</td>
                <td style={{ padding: "10px" }}>{tx.date} {tx.due && <small>Due: {tx.due}</small>}</td>
                <td style={{ padding: "10px" }}>
                  <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div>
        <h3>Quick Actions</h3>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff", fontWeight: "bold" }}>
            Process Payments
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff", fontWeight: "bold" }}>
            Overdue Alerts
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", fontWeight: "bold" }}>
            Revenue Report
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#9c27b0", color: "#fff", fontWeight: "bold" }}>
            Payment Methods
          </button>
        </div>
      </div>
    </div>
  );
}
