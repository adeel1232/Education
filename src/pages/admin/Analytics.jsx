import React from "react";
import { FaDollarSign, FaUserGraduate, FaChalkboardTeacher, FaFileExport } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Stats Cards
const stats = [
  { name: "Total Revenue", value: "$1.2M", change: "+15%", icon: <FaDollarSign />, color: "#4caf50" },
  { name: "Student Enrollments", value: 248, change: "+12%", icon: <FaUserGraduate />, color: "#2196f3" },
  { name: "Completion Rate", value: "89%", change: "+3%", icon: <FaChalkboardTeacher />, color: "#ff9800" },
  { name: "Instructor Hours", value: 2456, change: "This month", icon: <FaChalkboardTeacher />, color: "#9c27b0" },
];

// Charts Data
const enrollmentData = [
  { month: "Jan", students: 20 },
  { month: "Feb", students: 35 },
  { month: "Mar", students: 45 },
  { month: "Apr", students: 55 },
  { month: "May", students: 70 },
  { month: "Jun", students: 80 },
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 90000 },
  { month: "Mar", revenue: 120000 },
  { month: "Apr", revenue: 150000 },
  { month: "May", revenue: 170000 },
  { month: "Jun", revenue: 180000 },
];

const completionData = [
  { month: "Jan", completion: 25 },
  { month: "Feb", completion: 40 },
  { month: "Mar", completion: 60 },
  { month: "Apr", completion: 75 },
  { month: "May", completion: 90 },
  { month: "Jun", completion: 100 },
];

// Top Instructors
const topInstructors = [
  { name: "Mike Johnson", rating: 4.8 },
  { name: "Sarah Williams", rating: 4.9 },
  { name: "David Brown", rating: 4.7 },
  { name: "Lisa Garcia", rating: 4.9 },
  { name: "Tom Wilson", rating: 4.6 },
];

export default function AnalyticsDashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Analytics Dashboard</h1>
      <p>Comprehensive insights into school performance and operations</p>

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
              <h2 style={{ margin: "5px 0" }}>{stat.value} <small style={{ fontSize: "14px", color: "#555" }}>{stat.change}</small></h2>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "30px" }}>
        <div style={{ flex: "1 1 300px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>Student Enrollments Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={enrollmentData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="students" stroke="#2196f3" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: "1 1 300px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4caf50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: "1 1 300px", background: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>Course Completion Rate</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={completionData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completion" stroke="#ff9800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Instructors */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Top Performing Instructors</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {topInstructors.map((inst, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div>{i + 1}. <strong>{inst.name}</strong> - Instructor</div>
              <div>Rating: {inst.rating}/5.0</div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Reports */}
      <div>
        <h3>Export Reports</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
            <FaFileExport /> Export All Data
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>
            <FaFileExport /> Enrollment Report
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff" }}>
            <FaFileExport /> Revenue Report
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#9c27b0", color: "#fff" }}>
            <FaFileExport /> Performance Report
          </button>
        </div>
      </div>
    </div>
  );
}
