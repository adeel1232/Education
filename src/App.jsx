import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentLayout from "./pages/StudentLayout";
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import Schedule from "./pages/Schedule";
import Payments from "./pages/Payments";
import Documents from "./pages/Documents";
import JobPlacement from "./pages/JobPlacement";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
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
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
