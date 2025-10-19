import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", path: "/admin", icon: "📊" },
  { name: "Enrollments", path: "/admin/enrollments", icon: "📝" },
  { name: "Students", path: "/admin/students", icon: "👨‍🎓" },
  { name: "Instructors", path: "/admin/instructors", icon: "👩‍🏫" },
  { name: "Courses", path: "/admin/courses", icon: "📚" },
  { name: "Schedule", path: "/admin/schedule", icon: "📅" },
  { name: "Documents", path: "/admin/documents", icon: "📂" },
  { name: "Payments", path: "/admin/payments", icon: "💳" },
  { name: "Job Placement", path: "/admin/jobs", icon: "🚚" },
  { name: "Analytics", path: "/admin/analytics", icon: "📈" },
  { name: "Compliance", path: "/admin/compliance", icon: "✅" },
  { name: "Messages", path: "/admin/messages", icon: "✉️" },
];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={{ ...styles.sidebar, width: sidebarOpen ? 240 : 70 }}>
        <div style={styles.logoArea}>
          <h2 style={{ fontSize: sidebarOpen ? 18 : 0, transition: "0.3s" }}>
            The Trucking Vault
          </h2>
          <p style={{ fontSize: sidebarOpen ? 12 : 0, transition: "0.3s" }}>
            Admin Portal
          </p>
        </div>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                ...styles.navItem,
                backgroundColor:
                  location.pathname === item.path ? "#2563eb" : "transparent",
                color:
                  location.pathname === item.path ? "#fff" : "#111827",
              }}
            >
              <span style={{ marginRight: sidebarOpen ? 10 : 0 }}>{item.icon}</span>
              {sidebarOpen && item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div style={styles.main}>
        <header style={styles.header}>
          <button
            style={styles.toggle}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
          <div style={styles.profile}>
            <div style={styles.avatar}>
              <FaUserCircle />
            </div>
            {sidebarOpen && (
              <div>
                <strong>AD</strong>
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
                  Administrator
                </p>
              </div>
            )}
          </div>
        </header>

        <main style={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
    background: "#f9fafb",
  },
  sidebar: {
    background: "#ffffff",
    boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    transition: "0.3s",
    overflowY: "auto",
  },
  logoArea: {
    marginBottom: "20px",
    fontWeight: "700",
    color: "#1e3a8a",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: "8px",
    marginBottom: "8px",
    textDecoration: "none",
    fontWeight: 500,
    transition: "0.2s",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  toggle: {
    border: "none",
    background: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    background: "#2563eb",
    color: "#fff",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  content: {
    padding: "20px",
    overflowY: "auto",
  },
};

export default Admin;
