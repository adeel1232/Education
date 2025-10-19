import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    navigate("/"); // redirect to login
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "sans-serif",
        background: darkMode ? "#1f2937" : "#f9fafb",
        color: darkMode ? "#f9fafb" : "#111827",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: darkMode ? "#111827" : "#fff",
          width: sidebarOpen ? 220 : 70,
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
       <div style={{ marginBottom: 20 }}>
  <img
    src="/abc.jpeg"
    alt="Logo"
    style={{
      width: sidebarOpen ? 80 : 40,
      height: sidebarOpen ? 80 : 40,
      borderRadius: "50%",        // مکمل گول
      border: "3px solid #2563eb", // خوبصورت بلیو باؤنڈر
      padding: 3,                  // باؤنڈر کے اندر تھوڑا space
      objectFit: "cover",
      transition: "0.3s",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)" // تھوڑا سا shadow
    }}
  />
</div>


        {/* Nav Items */}
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
                  textAlign: sidebarOpen ? "left" : "center",
                  gap: sidebarOpen ? 10 : 0,
                }}
              >
                {/* Circular Icon */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: active ? "#fff" : darkMode ? "#d1d5db" : "#111827",
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
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
      </aside>

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarOpen ? 220 : 70,
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
            placeholder="Search courses, students, documents..."
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
                padding: "5px 10px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: darkMode ? "#2563eb" : "#111827",
                color: "#fff",
              }}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: "5px 10px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background: "#ef4444",
                color: "#fff",
              }}
            >
              Logout
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

export default StudentLayout;
