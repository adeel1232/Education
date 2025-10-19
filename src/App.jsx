import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login
import LoginPage from "./components/LoginPage";

// Layouts & Dashboards
import StudentLayout from "./pages/StudentLayout";
import EmployerLayout from "./pages/EmployerLayout";
import TeacherDashboard from "./pages/Teacher";
import AdminDashboard from "./pages/Admin";
import NotificationsDashboard from "./pages/NotificationsDashboard";

// Student Pages
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import Schedule from "./pages/Schedule";
import Payments from "./pages/Payments";
import Documents from "./pages/Documents";
import JobPlacement from "./pages/JobPlacement";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

// Employer Pages
import EmployerDashboard from "./pages/employer/DashboardIn";
import Employeds from "./pages/employer/Employeds";
import JobPostings from "./pages/employer/JobPostings";
import Candidates from "./pages/employer/Candidates";
import Billing from "./pages/employer/Billing";
import EmployerMessages from "./pages/employer/MessagesIn";
import CompanyProfile from "./pages/employer/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Student Layout & Pages */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="payments" element={<Payments />} />
          <Route path="documents" element={<Documents />} />
          <Route path="jobs" element={<JobPlacement />} />
          <Route path="messages" element={<Messages />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Employer Layout & Pages */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerDashboard />} />
          <Route path="employeds" element={<Employeds />} />
          <Route path="jobs" element={<JobPostings />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="billing" element={<Billing />} />
          <Route path="messages" element={<EmployerMessages />} />
          <Route path="profile" element={<CompanyProfile />} />
        </Route>

        {/* Other Dashboards */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/notifications" element={<NotificationsDashboard />} />

        {/* 404 Page */}
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
