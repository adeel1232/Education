import React, { useState } from "react";
import { FaBook, FaPlayCircle, FaUserGraduate, FaChartLine, FaPlus, FaInfoCircle } from "react-icons/fa";

const initialStats = [
  { name: "Total Courses", value: 12, icon: <FaBook />, color: "#4caf50" },
  { name: "Active Courses", value: 8, icon: <FaPlayCircle />, color: "#2196f3" },
  { name: "Total Students", value: 186, icon: <FaUserGraduate />, color: "#9c27b0" },
  { name: "Avg. Completion", value: "91%", icon: <FaChartLine />, color: "#ff9800" },
];

const initialCourses = [
  { id: 1, title: "Class A CDL Training", instructor: "Mike Johnson", status: "Active", rating: 4.8, description: "Comprehensive training for Class A Commercial Driver's License", enrolled: "24/30 students", duration: "8 weeks", cost: "$2,500", start: "Feb 1, 2025", completion: "92%" },
  { id: 2, title: "Behind-the-Wheel Training", instructor: "Sarah Williams", status: "Active", rating: 4.9, description: "Practical driving experience and road skills", enrolled: "18/20 students", duration: "4 weeks", cost: "$1,800", start: "Feb 15, 2025", completion: "95%" },
  { id: 3, title: "Defensive Driving Course", instructor: "David Brown", status: "Active", rating: 4.7, description: "Advanced safety techniques and accident prevention", enrolled: "12/25 students", duration: "2 weeks", cost: "$800", start: "Mar 1, 2025", completion: "88%" },
  { id: 4, title: "Hazmat Certification", instructor: "Lisa Garcia", status: "Planning", rating: 4.6, description: "Hazardous materials handling and safety protocols", enrolled: "8/15 students", duration: "3 weeks", cost: "$1,200", start: "Mar 15, 2025", completion: "0%" },
];

export default function CourseManagement() {
  const [courses, setCourses] = useState(initialCourses);
  const [viewCourse, setViewCourse] = useState(null);
  const [newCourse, setNewCourse] = useState(false);

  const handleAddCourse = () => {
    setNewCourse(true);
  };

  const handleSaveCourse = (course) => {
    setCourses([...courses, { id: courses.length + 1, ...course }]);
    setNewCourse(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Course Management</h1>
      <p>Manage all training programs and curriculum</p>

      {/* Add New Course Button */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button onClick={handleAddCourse} style={buttonStyle("#4caf50")}>
          <FaPlus /> Add New Course
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {initialStats.map((stat, idx) => (
          <div key={idx} style={statCardStyle(stat.color)}>
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
          {courses.map(course => (
            <div key={course.id} style={courseCardStyle}>
              <div>
                <strong>{course.title}</strong> - {course.instructor} <br />
                <small>Status: {course.status} | Rating: {course.rating}</small><br />
                <small>{course.description}</small><br />
                <small>{course.enrolled} • {course.duration} • {course.cost}</small><br />
                <small>Start: {course.start} | Completion Rate: {course.completion}</small>
              </div>
              <div>
                <button onClick={() => setViewCourse(course)} style={buttonStyle("#2196f3")}>
                  <FaInfoCircle /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {viewCourse && <CourseModal course={viewCourse} onClose={() => setViewCourse(null)} />}
      {newCourse && <AddCourseModal onSave={handleSaveCourse} onClose={() => setNewCourse(false)} />}
    </div>
  );
}

// Button & Card Styles
const buttonStyle = (bg) => ({
  display: "flex", alignItems: "center", gap: "10px",
  padding: "10px 20px", borderRadius: "5px", border: "none", background: bg, color: "#fff", fontWeight: "bold", cursor: "pointer"
});

const statCardStyle = (bg) => ({
  flex: "1 1 200px", background: "#f5f5f5", padding: "20px", borderRadius: "10px",
  display: "flex", alignItems: "center", gap: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
});

const courseCardStyle = {
  display: "flex", justifyContent: "space-between", alignItems: "center",
  padding: "15px", background: "#f5f5f5", borderRadius: "5px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
};

// Modals
function CourseModal({ course, onClose }) {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>{course.title}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Status: {course.status}</p>
        <p>Rating: {course.rating}</p>
        <p>{course.description}</p>
        <p>Enrolled: {course.enrolled}</p>
        <p>Duration: {course.duration}</p>
        <p>Cost: {course.cost}</p>
        <p>Start Date: {course.start}</p>
        <p>Completion: {course.completion}</p>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
}

function AddCourseModal({ onSave, onClose }) {
  const [course, setCourse] = useState({
    title: "", instructor: "", status: "Planning", rating: 0, description: "",
    enrolled: "0/0 students", duration: "", cost: "", start: "", completion: "0%"
  });

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>Add New Course</h3>
        {Object.keys(course).map(key => key !== "id" && (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={course[key]}
            onChange={e => setCourse({...course, [key]: e.target.value})}
            style={{ width: "100%", marginBottom: "8px", padding: "5px" }}
          />
        ))}
        <button onClick={() => onSave(course)} style={{ marginRight: "10px" }}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

// Modal styles
const modalStyle = { position: "fixed", top:0,left:0,right:0,bottom:0, background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center" };
const modalContentStyle = { background:"#fff", padding:"20px", borderRadius:"10px", width:"400px", position:"relative" };
const closeButtonStyle = { position:"absolute", top:10, right:10, background:"#f44336", color:"#fff", border:"none", borderRadius:"5px", padding:"5px 10px", cursor:"pointer" };
