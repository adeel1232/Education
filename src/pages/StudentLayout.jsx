import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navColors = [
    "#2563eb", // blue
    "#10b981", // green
    "#f59e0b", // yellow
    "#ef4444", // red
    "#8b5cf6", // purple
    "#ec4899", // pink
    "#14b8a6", // teal
  ];

  const navItems = [
    { name: "Dashboard", path: "/student", icon: "🏠" },
    { name: "My Courses", path: "/student/courses", icon: "📚" },
    { name: "Schedule", path: "/student/schedule", icon: "🗓️" },
    { name: "Payments", path: "/student/payments", icon: "💵" },
    { name: "Documents", path: "/student/documents", icon: "📄" },
    { name: "Job Placement", path: "/student/jobs", icon: "🧰" },
    { name: "Messages", path: "/student/messages", icon: "✉️" },
    { name: "Support", path: "/student/support", icon: "💬" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Segoe UI, sans-serif",
        background: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "#f9fafb" : "#111827",
        transition: "all 0.3s ease",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: darkMode ? "#1f2937" : "#fff",
          width: sidebarOpen ? 230 : 75,
          transition: "0.3s ease",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
          position: "fixed",
          height: "100%",
          padding: "20px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 25, textAlign: "center" }}>
          <img
            src="/abc.jpeg"
            alt="Logo"
            style={{
              width: sidebarOpen ? 80 : 45,
              height: sidebarOpen ? 80 : 45,
              borderRadius: "50%",
              border: "3px solid #2563eb",
              padding: 3,
              objectFit: "cover",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              transition: "0.3s ease",
            }}
          />
        </div>

        {/* Navigation */}
        <nav style={{ width: "100%" }}>
          {navItems.map((item, index) => {
            const active = location.pathname === item.path;
            const color = navColors[index % navColors.length];
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: sidebarOpen ? "flex-start" : "center",
                  gap: sidebarOpen ? 10 : 0,
                  padding: "10px 12px",
                  marginBottom: 8,
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 500,
                  backgroundColor: active ? color : "transparent",
                  color: active ? "#fff" : darkMode ? "#d1d5db" : "#111827",
                  transition: "0.3s ease",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: `1px solid ${active ? "#fff" : color}`,
                    fontSize: 16,
                  }}
                >
                  {item.icon}
                </span>
                {sidebarOpen && item.name}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Buttons */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: "#2563eb",
              color: "#fff",
              fontSize: 14,
            }}
          >
            {sidebarOpen ? "Collapse" : "Expand"}
          </button>

          <button
            onClick={handleLogout}
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: "#ef4444",
              color: "#fff",
              fontSize: 14,
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarOpen ? 230 : 75,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: darkMode ? "#1f2937" : "#fff",
            padding: "10px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <input
            type="text"
            placeholder="Search anything..."
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ddd",
              marginRight: 15,
              background: darkMode ? "#111827" : "#f9fafb",
              color: darkMode ? "#f9fafb" : "#111827",
            }}
          />

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: darkMode ? "#2563eb" : "#111827",
              color: "#fff",
              fontSize: 14,
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: 20, overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
