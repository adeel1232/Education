import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Payments = () => {
  const totalTuition = 10000;
  const amountPaid = 7500;
  const remaining = totalTuition - amountPaid;
  const paymentProgress = (amountPaid / totalTuition) * 100;

  const paymentPlans = [
    { name: "Full Payment", amount: 10000, save: 500 },
    { name: "4-Month Plan", amount: 2500, months: 4 },
    { name: "6-Month Plan", amount: 1750, months: 6 },
  ];

  const paymentHistory = [
    { invoice: "INV-2024-001", date: "Jan 15, 2025", amount: "$2,500", method: "Credit Card", status: "pending", action: "Pay Now" },
    { invoice: "INV-2024-002", date: "Dec 15, 2024", amount: "$2,500", method: "Credit Card (****1234)", status: "paid", action: "Receipt" },
    { invoice: "INV-2024-003", date: "Nov 15, 2024", amount: "$2,500", method: "ACH Transfer", status: "paid", action: "Receipt" },
    { invoice: "INV-2024-004", date: "Oct 15, 2024", amount: "$2,500", method: "Debit Card", status: "paid", action: "Receipt" },
  ];

  const chartData = {
    labels: ["Paid", "Remaining"],
    datasets: [
      {
        label: "Tuition Payment Progress",
        data: [amountPaid, remaining],
        backgroundColor: ["#2563eb", "#d1d5db"],
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Payments & Tuition</h1>
      <p>Manage your tuition payments and view history</p>

      {/* Tuition Summary */}
      <div style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 250, padding: 20, border: "1px solid #ddd", borderRadius: 8, backgroundColor: "#fff" }}>
          <h3>Total Tuition</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>${totalTuition.toLocaleString()}</p>
          <h4>Amount Paid</h4>
          <p>${amountPaid.toLocaleString()}</p>
          <h4>Remaining Balance</h4>
          <p>${remaining.toLocaleString()}</p>
          <h4>Payment Progress</h4>
          <div style={{ background: "#e5e7eb", height: 20, borderRadius: 10, overflow: "hidden" }}>
            <div
              style={{
                width: `${paymentProgress}%`,
                background: "#2563eb",
                height: "100%",
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {Math.round(paymentProgress)}%
            </div>
          </div>
        </div>

        {/* Payment Plans */}
        <div style={{ flex: 1, minWidth: 250, padding: 20, border: "1px solid #ddd", borderRadius: 8, backgroundColor: "#fff" }}>
          <h3>Payment Plans</h3>
          {paymentPlans.map((plan, idx) => (
            <div key={idx} style={{ marginBottom: 12, padding: 10, border: "1px solid #ccc", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{plan.name}</strong>
                <p style={{ margin: 0, fontSize: 14 }}>
                  ${plan.amount.toLocaleString()}
                  {plan.save ? ` (Save $${plan.save})` : plan.months ? ` / ${plan.months} months` : ""}
                </p>
              </div>
              <button style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", cursor: "pointer" }}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ marginTop: 40, maxWidth: 500 }}>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>

      {/* Payment History */}
      <div style={{ marginTop: 40 }}>
        <h2>Payment History</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={thStyle}>Invoice</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Method</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((p, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={tdStyle}>{p.invoice}</td>
                <td style={tdStyle}>{p.date}</td>
                <td style={tdStyle}>{p.amount}</td>
                <td style={tdStyle}>{p.method}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 4,
                      backgroundColor: p.status === "paid" ? "#10b981" : "#fbbf24",
                      color: "#fff",
                      fontSize: 12,
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button style={{ padding: "4px 8px", borderRadius: 4, border: "none", backgroundColor: "#2563eb", color: "#fff", cursor: "pointer" }}>
                    {p.action}
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

const thStyle = { textAlign: "left", padding: 8, borderBottom: "1px solid #ddd" };
const tdStyle = { textAlign: "left", padding: 8 };

export default Payments;
