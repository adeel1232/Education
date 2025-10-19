import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const courseProgressData = [
  { week: "Week 1", progress: 10 },
  { week: "Week 2", progress: 20 },
  { week: "Week 3", progress: 30 },
  { week: "Week 4", progress: 42 },
  { week: "Week 5", progress: 50 },
  { week: "Week 6", progress: 65 },
];

const attendanceData = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 98 },
  { month: "Mar", attendance: 97 },
];

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome back, John!</h1>
      <p>Here's your learning progress and upcoming activities</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
        <div style={cardStyle}>
          <h3>Course Progress</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>65%</p>
          <p>12 of 18 modules completed</p>
          <p>↑ 12% this week</p>
        </div>
        <div style={cardStyle}>
          <h3>Tuition Balance</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>$2,500</p>
          <p>$7,500 paid of $10,000</p>
        </div>
        <div style={cardStyle}>
          <h3>Next Class</h3>
          <p>Tomorrow</p>
          <p>Defensive Driving at 9:00 AM</p>
        </div>
        <div style={cardStyle}>
          <h3>Attendance Rate</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>98%</p>
          <p>23 of 24 classes attended</p>
          <p>↑ 100% this month</p>
        </div>
      </div>

      {/* Graphs */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 40 }}>
        <div style={graphCardStyle}>
          <h3>Course Progress Over Weeks</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={courseProgressData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={graphCardStyle}>
          <h3>Attendance Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Current Courses */}
      <div style={{ marginTop: 40 }}>
        <h2>Current Courses</h2>
        <ul>
          <li>
            <strong>Class A CDL Theory</strong> - In Progress, 85% Complete,
            17/20 lessons
          </li>
          <li>
            <strong>Behind-the-Wheel Training</strong> - In Progress, 60%
            Complete, 18/30 hours
          </li>
        </ul>
      </div>

      {/* Upcoming Classes */}
      <div style={{ marginTop: 40 }}>
        <h2>Upcoming Classes</h2>
        <ul>
          <li>
            <strong>Defensive Driving Techniques (Theory)</strong> - Mike
            Johnson, Tomorrow, 9:00 AM - 12:00 PM, Room 101
          </li>
          <li>
            <strong>Road Test Preparation (Practical)</strong> - Sarah
            Williams, Jan 17, 1:00 PM - 4:00 PM, Training Yard
          </li>
        </ul>
      </div>

      {/* Payment Overview */}
      <div style={{ marginTop: 40 }}>
        <h2>Payment Overview</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Invoice</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Due Date</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>INV-2024-001</td>
              <td style={tdStyle}>Pending</td>
              <td style={tdStyle}>$2,500</td>
              <td style={tdStyle}>Jan 15, 2025</td>
              <td style={tdStyle}>
                <button>Pay Now</button>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>INV-2024-002</td>
              <td style={tdStyle}>Paid</td>
              <td style={tdStyle}>$2,500</td>
              <td style={tdStyle}>Dec 15, 2024</td>
              <td style={tdStyle}>
                <button>Download Receipt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  flex: "1 1 200px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const graphCardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  flex: "1 1 400px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const thStyle = {
  borderBottom: "1px solid #ddd",
  padding: 10,
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: 10,
};

export default Dashboard;
