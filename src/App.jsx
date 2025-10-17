import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/Teacher";
import AdminDashboard from "./pages/Admin";
import EmployeeDashboard from "./pages/Employee";
import NotificationsDashboard from "./pages/NotificationsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboards */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />

        {/* Notifications */}
        <Route path="/notifications" element={<NotificationsDashboard />} />

        {/* Optional 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
