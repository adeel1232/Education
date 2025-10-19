import React from "react";
import { FaBook, FaPlayCircle, FaUserGraduate, FaChartLine, FaPlus, FaInfoCircle } from "react-icons/fa";

const stats = [
  { name: "Total Courses", value: 12, icon: <FaBook />, color: "#4caf50" },
  { name: "Active Courses", value: 8, icon: <FaPlayCircle />, color: "#2196f3" },
  { name: "Total Students", value: 186, icon: <FaUserGraduate />, color: "#9c27b0" },
  { name: "Avg. Completion", value: "91%", icon: <FaChartLine />, color: "#ff9800" },
];

const courses = [
  { title: "Class A CDL Training", instructor: "Mike Johnson", status: "Active", rating: 4.8, description: "Comprehensive training for Class A Commercial Driver's License", enrolled: "24/30 students", duration: "8 weeks", cost: "$2,500", start: "Feb 1, 2025", completion: "92%" },
  { title: "Behind-the-Wheel Training", instructor: "Sarah Williams", status: "Active", rating: 4.9, description: "Practical driving experience and road skills", enrolled: "18/20 students", duration: "4 weeks", cost: "$1,800", start: "Feb 15, 2025", completion: "95%" },
  { title: "Defensive Driving Course", instructor: "David Brown", status: "Active", rating: 4.7, description: "Advanced safety techniques and accident prevention", enrolled: "12/25 students", duration: "2 weeks", cost: "$800", start: "Mar 1, 2025", completion: "88%" },
  { title: "Hazmat Certification", instructor: "Lisa Garcia", status: "Planning", rating: 4.6, description: "Hazardous materials handling and safety protocols", enrolled: "8/15 students", duration: "3 weeks", cost: "$1,200", start: "Mar 15, 2025", completion: "0%" },
];

export default function CourseManagement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Course Management</h1>
      <p>Manage all training programs and curriculum</p>

      {/* Add New Course Button */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff", fontWeight: "bold" }}>
          <FaPlus /> Add New Course
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
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
              <h2 style={{ margin: "5px 0" }}>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Courses List */}
      <div>
        <h3>Courses</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "10px" }}>
          {courses.map((course, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <div>
                <strong>{course.title}</strong> - {course.instructor} <br />
                <small>Status: {course.status} | Rating: {course.rating}</small><br />
                <small>{course.description}</small><br />
                <small>{course.enrolled} • {course.duration} • {course.cost}</small><br />
                <small>Start: {course.start} | Completion Rate: {course.completion}</small>
              </div>
              <div>
                <button style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                  <FaInfoCircle /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
