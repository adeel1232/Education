import React from "react";
import { FaDollarSign, FaClock, FaCalendarAlt, FaCreditCard, FaDownload, FaFileInvoiceDollar, FaReceipt } from "react-icons/fa";
import "./Billing.css";

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

  return (
    <div className="billing-page">
      <header className="header">
        <h1><FaFileInvoiceDollar /> Billing & Invoices</h1>
        <p>Manage your training program payments and billing history</p>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
            <span>{s.note}</span>
          </div>
        ))}
      </div>

      {/* Upcoming Payments */}
      <div className="section">
        <h2>Upcoming Payments</h2>
        <div className="payments-list">
          {upcomingPayments.map((p, i) => (
            <div key={i} className="payment-card">
              <h3>{p.title}</h3>
              <p>Due: {p.due}</p>
              <p className="amount">{p.amount} <span className="status">{p.status}</span></p>
            </div>
          ))}
        </div>
        <div className="quick-actions">
          <button><FaCreditCard /> Update Payment Method</button>
          <button><FaDownload /> Download Statement</button>
          <button>View All Invoices</button>
          <button>Contact Billing Support</button>
        </div>
      </div>

      {/* Billing History */}
      <div className="section">
        <h2>Billing History</h2>
        <button className="download-all"><FaDownload /> Download All</button>
        <table className="billing-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((b, i) => (
              <tr key={i}>
                <td>{b.id}</td>
                <td>{b.date}</td>
                <td>{b.desc}</td>
                <td>{b.amount}</td>
                <td className={b.status.toLowerCase()}>{b.status}</td>
                <td>{b.method}</td>
                <td><button><FaReceipt /> {b.status === "Pending" ? "Pay Now" : "Receipt"}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
