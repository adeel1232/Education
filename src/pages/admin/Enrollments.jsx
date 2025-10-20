import React, { useState, useEffect } from "react";
import { FaUserCheck, FaUserClock, FaUserTimes, FaSearch, FaFileExport, FaEye } from "react-icons/fa";

const initialStats = [
  { name: "Total Applications", value: 24, icon: <FaUserCheck />, color: "#4caf50" },
  { name: "Pending Review", value: 8, icon: <FaUserClock />, color: "#ff9800" },
  { name: "Approved", value: 12, icon: <FaUserCheck />, color: "#2196f3" },
  { name: "Approval Rate", value: 75, icon: <FaUserCheck />, color: "#9c27b0" },
];

const initialApplications = [
  { id: 1, name: "John Smith", email: "john.smith@email.com", phone: "(555) 123-4567", course: "Class A CDL", applied: "Jan 10, 2025", status: "Pending Review", docs: "Complete" },
  { id: 2, name: "Emily Davis", email: "emily.davis@email.com", phone: "(555) 234-5678", course: "Behind-the-Wheel", applied: "Jan 8, 2025", status: "Approved", docs: "Complete" },
  { id: 3, name: "Michael Brown", email: "michael.brown@email.com", phone: "(555) 345-6789", course: "Defensive Driving", applied: "Jan 12, 2025", status: "Under Review", docs: "Incomplete" },
  { id: 4, name: "Sarah Wilson", email: "sarah.wilson@email.com", phone: "(555) 456-7890", course: "Class A CDL", applied: "Jan 14, 2025", status: "Rejected", docs: "Incomplete" },
];

export default function EnrollmentManagement() {
  const [stats, setStats] = useState(initialStats.map(s => ({ ...s, animatedValue: s.name === "Approval Rate" ? 0 : s.value })));
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");
  const [viewApp, setViewApp] = useState(null);

  // Animate Approval Rate from 0 → 75% in 20 sec
  useEffect(() => {
    const rateIdx = stats.findIndex(s => s.name === "Approval Rate");
    const duration = 20000; // 20 seconds
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = stats[rateIdx].value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      setStats(prev => {
        const newStats = [...prev];
        newStats[rateIdx].animatedValue = current >= prev[rateIdx].value ? prev[rateIdx].value : Math.floor(current);
        return newStats;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Approve / Reject functionality
  const handleAction = (id, action) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status: action } : app
      )
    );
  };

  const filteredApps = applications.filter(app =>
    app.name.toLowerCase().includes(search.toLowerCase()) ||
    app.email.toLowerCase().includes(search.toLowerCase()) ||
    app.course.toLowerCase().includes(search.toLowerCase())
  );

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
              <h2 style={{ margin: "5px 0" }}>
                {stat.name === "Approval Rate" ? `${stat.animatedValue}%` : stat.animatedValue}
              </h2>
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
            <input type="text" placeholder="Search applications..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <button style={{ padding: "5px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaFileExport /> Export
          </button>
        </div>

        {/* Applications List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          {filteredApps.map((app) => (
            <div key={app.id} style={{
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
                {app.course} • Applied: {app.applied} • Documents: {app.docs} <br />
                <small>Status: {app.status}</small>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setViewApp(app)} style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaEye /> View
                </button>
                {app.status === "Pending Review" && (
                  <>
                    <button onClick={() => handleAction(app.id, "Approved")} style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>Approve</button>
                    <button onClick={() => handleAction(app.id, "Rejected")} style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#f44336", color: "#fff" }}>Reject</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {viewApp && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", width: "400px", position: "relative" }}>
            <h3>{viewApp.name} - {viewApp.course}</h3>
            <p><strong>Email:</strong> {viewApp.email}</p>
            <p><strong>Phone:</strong> {viewApp.phone}</p>
            <p><strong>Applied On:</strong> {viewApp.applied}</p>
            <p><strong>Documents:</strong> {viewApp.docs}</p>
            <p><strong>Status:</strong> {viewApp.status}</p>
            <button onClick={() => setViewApp(null)} style={{ position: "absolute", top: 10, right: 10, background: "#f44336", color: "#fff", border: "none", borderRadius: "5px", padding: "5px 10px" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
