import React, { useState } from "react";
import { FaDollarSign, FaMoneyCheckAlt, FaExclamationCircle, FaCheckCircle, FaTimesCircle, FaFileExport, FaSearch, FaFilter, FaPlus } from "react-icons/fa";

export default function PaymentManagement() {
  const [transactions, setTransactions] = useState([
    { id: "PAY-001", student: "John Smith", email: "john.smith@email.com", course: "Class A CDL", amount: 2500, method: "Credit Card", status: "Completed", date: "2025-01-15" },
    { id: "PAY-002", student: "Emily Davis", email: "emily.davis@email.com", course: "Behind-the-Wheel", amount: 1800, method: "ACH Transfer", status: "Pending", date: "2025-01-14" },
    { id: "PAY-003", student: "Michael Brown", email: "michael.brown@email.com", course: "Defensive Driving", amount: 800, method: "Debit Card", status: "Failed", date: "2025-01-13" },
    { id: "PAY-004", student: "Sarah Wilson", email: "sarah.wilson@email.com", course: "Class A CDL", amount: 2500, method: "Credit Card", status: "Overdue", date: "2025-01-10", due: "2025-01-10" },
    { id: "PAY-005", student: "David Johnson", email: "david.johnson@email.com", course: "Hazmat Certification", amount: 1200, method: "Bank Transfer", status: "Completed", date: "2025-01-12" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTx, setNewTx] = useState({ id: "", student: "", email: "", course: "", amount: "", method: "", status: "Pending", date: "" });
  const [viewTx, setViewTx] = useState(null); // For viewing details

  // Calculate dynamic stats
  const totalRevenue = transactions.filter(t => t.status === "Completed").reduce((sum, t) => sum + t.amount, 0);
  const pendingPayments = transactions.filter(t => t.status === "Pending").reduce((sum, t) => sum + t.amount, 0);
  const overduePayments = transactions.filter(t => t.status === "Overdue").reduce((sum, t) => sum + t.amount, 0);
  const completedCount = transactions.filter(t => t.status === "Completed").length;
  const paymentCompletionRate = ((completedCount / transactions.length) * 100).toFixed(0) + "%";
  const averagePayment = transactions.length > 0 ? Math.round(transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length) : 0;

  const stats = [
    { name: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: <FaDollarSign />, color: "#4caf50" },
    { name: "Monthly Revenue", value: "$28,400", icon: <FaMoneyCheckAlt />, color: "#2196f3" },
    { name: "Pending Payments", value: `$${pendingPayments.toLocaleString()}`, icon: <FaExclamationCircle />, color: "#ff9800" },
    { name: "Overdue Payments", value: `$${overduePayments.toLocaleString()}`, icon: <FaTimesCircle />, color: "#f44336" },
    { name: "Payment Completion Rate", value: paymentCompletionRate, icon: <FaCheckCircle />, color: "#9c27b0" },
    { name: "Average Payment", value: `$${averagePayment.toLocaleString()}`, icon: <FaDollarSign />, color: "#00bcd4" },
    { name: "Total Transactions", value: transactions.length, icon: <FaMoneyCheckAlt />, color: "#ff9800" },
  ];

  const handleAddPayment = () => setShowForm(true);
  const handleSavePayment = (e) => {
    e.preventDefault();
    setTransactions([...transactions, { ...newTx, amount: Number(newTx.amount) }]);
    setNewTx({ id: "", student: "", email: "", course: "", amount: "", method: "", status: "Pending", date: "" });
    setShowForm(false);
  };
  const handleView = (tx) => setViewTx(tx);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Payment Management</h1>
      <p>Oversee all student payments, revenue tracking, and financial operations</p>

      <div style={{ margin: "20px 0" }}>
        <button onClick={handleAddPayment} style={buttonStyle("#4caf50")}><FaPlus /> Add Payment</button>
      </div>

      {/* Add Payment Modal */}
      {showForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Add New Payment</h3>
            <form onSubmit={handleSavePayment} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" placeholder="Transaction ID" value={newTx.id} onChange={e => setNewTx({ ...newTx, id: e.target.value })} required />
              <input type="text" placeholder="Student Name" value={newTx.student} onChange={e => setNewTx({ ...newTx, student: e.target.value })} required />
              <input type="email" placeholder="Student Email" value={newTx.email} onChange={e => setNewTx({ ...newTx, email: e.target.value })} required />
              <input type="text" placeholder="Course" value={newTx.course} onChange={e => setNewTx({ ...newTx, course: e.target.value })} required />
              <input type="number" placeholder="Amount" value={newTx.amount} onChange={e => setNewTx({ ...newTx, amount: e.target.value })} required />
              <input type="text" placeholder="Payment Method" value={newTx.method} onChange={e => setNewTx({ ...newTx, method: e.target.value })} required />
              <input type="date" value={newTx.date} onChange={e => setNewTx({ ...newTx, date: e.target.value })} required />
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={buttonStyle("#4caf50")}>Save</button>
                <button type="button" onClick={() => setShowForm(false)} style={buttonStyle("#f44336")}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewTx && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Payment Details</h3>
            <p><strong>Transaction ID:</strong> {viewTx.id}</p>
            <p><strong>Student:</strong> {viewTx.student}</p>
            <p><strong>Email:</strong> {viewTx.email}</p>
            <p><strong>Course:</strong> {viewTx.course}</p>
            <p><strong>Amount:</strong> ${viewTx.amount.toLocaleString()}</p>
            <p><strong>Payment Method:</strong> {viewTx.method}</p>
            <p><strong>Status:</strong> {viewTx.status}</p>
            <p><strong>Date:</strong> {viewTx.date}</p>
            {viewTx.due && <p><strong>Due Date:</strong> {viewTx.due}</p>}
            <button onClick={() => setViewTx(null)} style={buttonStyle("#f44336")}>Close</button>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={cardStyle}>
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
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button style={buttonStyle("#2196f3")}><FaSearch /> Search</button>
          <button style={buttonStyle("#ff9800")}><FaFilter /> Filter</button>
          <button style={buttonStyle("#4caf50")}><FaFileExport /> Export</button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#e0e0e0", textAlign: "left" }}>
              <th style={thTdStyle}>Transaction ID</th>
              <th style={thTdStyle}>Student</th>
              <th style={thTdStyle}>Course</th>
              <th style={thTdStyle}>Amount</th>
              <th style={thTdStyle}>Method</th>
              <th style={thTdStyle}>Status</th>
              <th style={thTdStyle}>Date</th>
              <th style={thTdStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={thTdStyle}>{tx.id}</td>
                <td style={thTdStyle}>{tx.student} <br /><small>{tx.email}</small></td>
                <td style={thTdStyle}>{tx.course}</td>
                <td style={thTdStyle}>${tx.amount.toLocaleString()}</td>
                <td style={thTdStyle}>{tx.method}</td>
                <td style={{ ...thTdStyle, color: tx.status === "Completed" ? "#4caf50" : tx.status === "Pending" ? "#ff9800" : "#f44336" }}>{tx.status}</td>
                <td style={thTdStyle}>{tx.date} {tx.due && <small>Due: {tx.due}</small>}</td>
                <td style={thTdStyle}>
                  <button style={buttonStyle("#2196f3")} onClick={() => handleView(tx)}>View</button>
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
          <button style={buttonStyle("#4caf50")}>Process Payments</button>
          <button style={buttonStyle("#ff9800")}>Overdue Alerts</button>
          <button style={buttonStyle("#2196f3")}>Revenue Report</button>
          <button style={buttonStyle("#9c27b0")}>Payment Methods</button>
        </div>
      </div>
    </div>
  );
}

// Styles
const buttonStyle = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  background: color,
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
});

const cardStyle = {
  flex: "1 1 200px",
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const thTdStyle = { padding: "10px" };

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
