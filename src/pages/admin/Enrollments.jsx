import React from "react";
import { FaUserCheck, FaUserClock, FaUserTimes, FaSearch, FaFileExport, FaEye } from "react-icons/fa";

const stats = [
  { name: "Total Applications", value: 24, icon: <FaUserCheck />, color: "#4caf50" },
  { name: "Pending Review", value: 8, icon: <FaUserClock />, color: "#ff9800" },
  { name: "Approved", value: 12, icon: <FaUserCheck />, color: "#2196f3" },
  { name: "Approval Rate", value: "75%", icon: <FaUserCheck />, color: "#9c27b0" },
];

const applications = [
  { name: "John Smith", email: "john.smith@email.com", phone: "(555) 123-4567", course: "Class A CDL", applied: "Jan 10, 2025", status: "Pending Review", docs: "Complete" },
  { name: "Emily Davis", email: "emily.davis@email.com", phone: "(555) 234-5678", course: "Behind-the-Wheel", applied: "Jan 8, 2025", status: "Approved", docs: "Complete" },
  { name: "Michael Brown", email: "michael.brown@email.com", phone: "(555) 345-6789", course: "Defensive Driving", applied: "Jan 12, 2025", status: "Under Review", docs: "Incomplete" },
  { name: "Sarah Wilson", email: "sarah.wilson@email.com", phone: "(555) 456-7890", course: "Class A CDL", applied: "Jan 14, 2025", status: "Rejected", docs: "Incomplete" },
];

export default function EnrollmentManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Enrollment Management</h1>
      <p>Review and manage student applications and enrollments</p>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {stats.map((stat) => (
          <div key={stat.name} style={{
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

      {/* Recent Applications */}
      <div style={{ marginTop: "40px" }}>
        <h3>Recent Applications</h3>

        {/* Search & Export */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaSearch />
            <input type="text" placeholder="Search applications..." style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <button style={{ padding: "5px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaFileExport /> Export
          </button>
        </div>

        {/* Applications List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          {applications.map((app, i) => (
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
                <strong>{app.name}</strong> <br />
                {app.email} | {app.phone} <br />
                {app.course} • Applied: {app.applied} • Documents: {app.docs}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaEye /> View
                </button>
                {app.status === "Pending Review" && (
                  <>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>Approve</button>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#f44336", color: "#fff" }}>Reject</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
