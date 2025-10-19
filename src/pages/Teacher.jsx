import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaUserCircle, FaSearch, FaSignOutAlt } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", path: "/teacher", icon: "📊" },
  { name: "MyClasses", path: "/teacher/classes", icon: "📚" },
  { name: "Students", path: "/teacher/students", icon: "👨‍🎓" },
  { name: "Attendance", path: "/teacher/attendance", icon: "📝" },
  { name: "Schedule", path: "/teacher/schedule", icon: "📅" },
  { name: "Clock In/Out", path: "/teacher/clock", icon: "⏰" },
  { name: "Messages", path: "/teacher/messages", icon: "✉️" },
  { name: "Reports", path: "/teacher/reports", icon: "📈" },
];

const Teacher = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or auth here if needed
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={{ ...styles.sidebar, width: sidebarOpen ? 240 : 70 }}>
        <div style={styles.logoArea}>
          <img
            src="/abc.jpeg"
            alt="The Trucking Vault"
            style={{
              width: sidebarOpen ? 50 : 40,
              height: sidebarOpen ? 50 : 40,
              borderRadius: "50%",
              border: "2px solid #4f46e5",
              objectFit: "cover",
              transition: "0.3s",
            }}
          />
          {sidebarOpen && <p style={{ fontSize: 12, marginTop: 4 }}>Teacher Portal</p>}
        </div>

        <nav>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                ...styles.navItem,
                backgroundColor: location.pathname === item.path ? "#4f46e5" : "transparent",
                color: location.pathname === item.path ? "#fff" : "#111827",
              }}
            >
              <span style={{ marginRight: sidebarOpen ? 10 : 0 }}>{item.icon}</span>
              {sidebarOpen && item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div
          style={{ ...styles.navItem, marginTop: "auto", cursor: "pointer", color: "#111827" }}
          onClick={handleLogout}
        >
          <FaSignOutAlt style={{ marginRight: sidebarOpen ? 10 : 0 }} />
          {sidebarOpen && "Logout"}
        </div>
      </aside>

      {/* Main Content */}
      <div style={styles.main}>
        <header style={styles.header}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button style={styles.toggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
              <FaBars />
            </button>
            <div style={styles.headerSearch}>
              <FaSearch style={{ color: "#6b7280", marginRight: 8 }} />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: "none",
                  outline: "none",
                  background: "#f3f4f6",
                  padding: "5px 8px",
                  borderRadius: 8,
                  width: sidebarOpen ? 200 : 120,
                  transition: "0.3s",
                }}
              />
            </div>
          </div>

          <div style={styles.profile}>
            <div style={styles.avatar}>
              <FaUserCircle />
            </div>
            {sidebarOpen && (
              <div>
                <strong>MJ</strong>
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Mary Johnson</p>
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
    background: "#f3f4f6",
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
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "700",
    color: "#4f46e5",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: 8,
    marginBottom: 8,
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
    background: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  toggle: {
    border: "none",
    background: "none",
    fontSize: 20,
    cursor: "pointer",
  },
  headerSearch: {
    display: "flex",
    alignItems: "center",
    background: "#f3f4f6",
    padding: "5px 10px",
    borderRadius: 10,
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    background: "#4f46e5",
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
    padding: 20,
    overflowY: "auto",
    background: "#f3f4f6",
  },
};

export default Teacher;
