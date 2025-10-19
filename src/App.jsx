import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login
import LoginPage from "./components/LoginPage";

// Layouts & Dashboards
import StudentLayout from "./pages/StudentLayout";
import EmployerLayout from "./pages/EmployerLayout";
import TeacherDashboard from "./pages/Teacher";
import AdminLayout from "./pages/Admin"; // admin layout wrapper
import NotificationsDashboard from "./pages/NotificationsDashboard";

// Student Pages
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import StudentSchedule from "./pages/Schedule";
import StudentPayments from "./pages/Payments";
import StudentDocuments from "./pages/Documents";
import StudentJobs from "./pages/JobPlacement";
import StudentMessages from "./pages/Messages";
import Support from "./pages/Support";

// Employer Pages
import EmployerDashboard from "./pages/employer/DashboardIn";
import Employeds from "./pages/employer/Employeds";
import JobPostings from "./pages/employer/JobPostings";
import Candidates from "./pages/employer/Candidates";
import Billing from "./pages/employer/Billing";
import EmployerMessages from "./pages/employer/MessagesIn";
import CompanyProfile from "./pages/employer/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminEnrollments from "./pages/admin/Enrollments";
import AdminStudents from "./pages/admin/Students";
import AdminInstructors from "./pages/admin/Instructors";
import AdminCourses from "./pages/admin/Courses";
import AdminSchedule from "./pages/admin/Schedule";
import AdminDocuments from "./pages/admin/Documents";
import AdminPayments from "./pages/admin/Payments";
import AdminJobs from "./pages/admin/JobPlacement";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminCompliance from "./pages/admin/Compliance";
import AdminMessages from "./pages/admin/Messages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="schedule" element={<StudentSchedule />} />
          <Route path="payments" element={<StudentPayments />} />
          <Route path="documents" element={<StudentDocuments />} />
          <Route path="jobs" element={<StudentJobs />} />
          <Route path="messages" element={<StudentMessages />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerDashboard />} />
          <Route path="employeds" element={<Employeds />} />
          <Route path="jobs" element={<JobPostings />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="billing" element={<Billing />} />
          <Route path="messages" element={<EmployerMessages />} />
          <Route path="profile" element={<CompanyProfile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="enrollments" element={<AdminEnrollments />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="instructors" element={<AdminInstructors />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="schedule" element={<AdminSchedule />} />
          <Route path="documents" element={<AdminDocuments />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="compliance" element={<AdminCompliance />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>

        {/* Teacher / Notifications */}
        <Route path="/teacher" element={<TeacherDashboard />} />
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
