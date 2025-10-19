import React from "react";
import { FaDollarSign, FaClock, FaCalendarAlt, FaCreditCard, FaDownload, FaFileInvoiceDollar, FaReceipt } from "react-icons/fa";

const Billing = () => {
  const stats = [
    { icon: <FaDollarSign />, label: "Total Spent", value: "$6,900", note: "This year" },
    { icon: <FaClock />, label: "Pending Payments", value: "$800", note: "Awaiting processing" },
    { icon: <FaCalendarAlt />, label: "Upcoming Bills", value: "$2,400", note: "Next 30 days" },
    { icon: <FaCreditCard />, label: "Payment Method", value: "Credit Card", note: "Primary method" },
  ];

  const upcomingPayments = [
    { title: "Monthly Training Subscription", due: "2025-02-01", amount: "$1,500", status: "Upcoming" },
    { title: "Safety Compliance Update", due: "2025-02-15", amount: "$900", status: "Upcoming" },
  ];

  const billingHistory = [
    { id: "INV-2025-001", date: "2025-01-15", desc: "Employee Training Program - 5 employees", amount: "$2,500", status: "Paid", method: "Credit Card (****1234)" },
    { id: "INV-2025-002", date: "2025-01-10", desc: "CDL Certification Services", amount: "$1,200", status: "Paid", method: "ACH Transfer" },
    { id: "INV-2025-003", date: "2025-01-05", desc: "Safety Training Materials", amount: "$800", status: "Pending", method: "Credit Card (****5678)" },
    { id: "INV-2024-012", date: "2024-12-15", desc: "Annual Training License", amount: "$3,200", status: "Paid", method: "Bank Transfer" },
  ];

  // Function to download CSV
  const downloadCSV = (data, filename) => {
    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(","),
      ...data.map(row => headers.map(field => `"${row[field]}"`).join(","))
    ].join("\r\n");
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="billing-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f9f9f9" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1><FaFileInvoiceDollar /> Billing & Invoices</h1>
        <p>Manage your training program payments and billing history</p>
      </header>

      {/* Stats */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: "20px", borderRadius: "10px", flex: "1 1 200px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "28px", color: "#4caf50" }}>{s.icon}</div>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
            <small>{s.note}</small>
          </div>
        ))}
      </div>

      {/* Upcoming Payments */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Upcoming Payments</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "15px" }}>
          {upcomingPayments.map((p, i) => (
            <div key={i} style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", flex: "1 1 250px" }}>
              <h3>{p.title}</h3>
              <p>Due: {p.due}</p>
              <p style={{ fontWeight: "bold" }}>{p.amount} <span style={{ color: "#ff9800" }}>{p.status}</span></p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button style={btnStyle("#2196f3")} onClick={() => window.open("https://github.com/your-repo/payment-method", "_blank")}><FaCreditCard /> Update Payment Method</button>
          <button style={btnStyle("#4caf50")} onClick={() => downloadCSV(upcomingPayments, "upcoming_payments.csv")}><FaDownload /> Download Statement</button>
          <button style={btnStyle("#9c27b0")} onClick={() => downloadCSV(billingHistory, "all_invoices.csv")}>View All Invoices</button>
          <button style={btnStyle("#f44336")} onClick={() => alert("Contact billing support at support@company.com")}>Contact Billing Support</button>
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h2>Billing History</h2>
        <button style={{ ...btnStyle("#4caf50"), marginBottom: "10px" }} onClick={() => downloadCSV(billingHistory, "billing_history.csv")}><FaDownload /> Download All</button>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: "10px", overflow: "hidden" }}>
          <thead style={{ background: "#e0e0e0" }}>
            <tr>
              <th style={thTd}>Invoice ID</th>
              <th style={thTd}>Date</th>
              <th style={thTd}>Description</th>
              <th style={thTd}>Amount</th>
              <th style={thTd}>Status</th>
              <th style={thTd}>Payment Method</th>
              <th style={thTd}>Action</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((b, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={thTd}>{b.id}</td>
                <td style={thTd}>{b.date}</td>
                <td style={thTd}>{b.desc}</td>
                <td style={thTd}>{b.amount}</td>
                <td style={{ ...thTd, color: b.status === "Pending" ? "#ff9800" : "#4caf50" }}>{b.status}</td>
                <td style={thTd}>{b.method}</td>
                <td style={thTd}>
                  <button style={btnStyle(b.status === "Pending" ? "#ff9800" : "#2196f3")}
                          onClick={() => {
                            if(b.status === "Pending") alert("Redirect to payment gateway");
                            else downloadCSV([b], `${b.id}_receipt.csv`);
                          }}>
                    <FaReceipt /> {b.status === "Pending" ? "Pay Now" : "Receipt"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const thTd = { padding: "10px", textAlign: "left" };
const btnStyle = (color) => ({
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  background: color,
  display: "flex",
  alignItems: "center",
  gap: "5px"
});

export default Billing;
