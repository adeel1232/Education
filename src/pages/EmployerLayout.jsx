import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const EmployerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "DashboardIn", path: "/employer", icon: "📊" },
    { name: "Employeds", path: "/employer/employeds", icon: "👷‍♂️" },
    { name: "JobPostings", path: "/employer/jobs", icon: "📋" },
    { name: "Candidates", path: "/employer/candidates", icon: "🧑‍💼" },
    { name: "Billing", path: "/employer/billing", icon: "💳" },
    { name: "MessagesIn", path: "/employer/messages", icon: "✉️" },
    { name: "Company Profile", path: "/employer/profile", icon: "🏢" },
  ];

  const handleLogout = () => {
    navigate("/"); // redirect to login
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Inter, sans-serif",
        background: darkMode ? "#1f2937" : "#f9fafb",
        color: darkMode ? "#f9fafb" : "#111827",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: darkMode ? "#111827" : "#fff",
          width: sidebarOpen ? 230 : 70,
          transition: "0.3s",
          padding: "20px 10px",
          position: "fixed",
          height: "100vh",
          overflowY: "auto",
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
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
              width: sidebarOpen ? 70 : 40,
              height: sidebarOpen ? 70 : 40,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #2563eb",
              boxShadow: "0 0 10px rgba(37,99,235,0.3)",
              transition: "0.3s",
            }}
          />
          {sidebarOpen && (
            <h3 style={{ marginTop: 10, fontSize: 16, color: "#2563eb" }}>
              The Trucking Vault
            </h3>
          )}
          {sidebarOpen && (
            <p style={{ fontSize: 13, color: "#6b7280" }}>Employer Portal</p>
          )}
        </div>

        {/* Navigation */}
        <nav style={{ width: "100%" }}>
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 10,
                  marginBottom: 8,
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 500,
                  color: active ? "#fff" : darkMode ? "#d1d5db" : "#111827",
                  backgroundColor: active ? "#2563eb" : "transparent",
                  gap: sidebarOpen ? 10 : 0,
                  justifyContent: sidebarOpen ? "flex-start" : "center",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "8px",
                    background: active
                      ? "#1e3a8a"
                      : darkMode
                      ? "#1f2937"
                      : "#f3f4f6",
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

        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            marginTop: "auto",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: 6,
            border: "none",
            background: darkMode ? "#374151" : "#2563eb",
            color: "#fff",
          }}
        >
          {sidebarOpen ? "⏴" : "⏵"}
        </button>
      </aside>

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarOpen ? 230 : 70,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            background: darkMode ? "#111827" : "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <input
            type="text"
            placeholder="Search employerLayout, jobs, or candidates..."
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ddd",
              marginRight: 20,
              background: darkMode ? "#1f2937" : "#f9fafb",
              color: darkMode ? "#f9fafb" : "#111827",
              borderColor: darkMode ? "#374151" : "#ddd",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: darkMode ? "#2563eb" : "#111827",
                color: "#fff",
              }}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: "#ef4444",
                color: "#fff",
              }}
            >
              🔒
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: 20, overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployerLayout;
