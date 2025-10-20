import React, { useState } from "react";

const courses = [
  {
    title: "Class A CDL Theory",
    description:
      "Comprehensive theory course covering all aspects of Class A commercial driving",
    progress: 85,
    modulesCompleted: "17/20",
    status: "In Progress",
    instructor: "Mike Johnson",
    duration: "8 weeks",
  },
  {
    title: "Behind-the-Wheel Training",
    description:
      "Practical driving experience with certified instructors",
    progress: 60,
    modulesCompleted: "18/30",
    status: "In Progress",
    instructor: "Sarah Williams",
    duration: "12 weeks",
  },
  {
    title: "Hazmat Certification",
    description:
      "Hazardous materials handling and transportation certification",
    progress: 100,
    modulesCompleted: "10/10",
    status: "Completed",
    instructor: "David Brown",
    duration: "4 weeks",
  },
  {
    title: "Air Brakes Training",
    description:
      "Air brake systems operation and safety procedures",
    progress: 30,
    modulesCompleted: "3/10",
    status: "In Progress",
    instructor: "Mike Johnson",
    duration: "3 weeks",
  },
  {
    title: "Pre-Trip Inspection",
    description:
      "Complete vehicle inspection procedures and safety checks",
    progress: 100,
    modulesCompleted: "8/8",
    status: "Completed",
    instructor: "Sarah Williams",
    duration: "2 weeks",
  },
  {
    title: "Defensive Driving Techniques",
    description:
      "Advanced defensive driving strategies for commercial vehicles",
    progress: 45,
    modulesCompleted: "5/12",
    status: "In Progress",
    instructor: "David Brown",
    duration: "4 weeks",
  },
];

const MyCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleReview = (course) => {
    setSelectedCourse(course);
    setShowCertificate(false);
  };

  const handleCertificate = (course) => {
    setSelectedCourse(course);
    setShowCertificate(true);
  };

  const handleClose = () => {
    setSelectedCourse(null);
    setShowCertificate(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "30px", color: "#1e3a8a" }}
      >
        My Courses
      </h1>
      <p
        style={{ textAlign: "center", marginBottom: "40px", color: "#374151" }}
      >
        Track your progress and access course materials
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2563eb", marginBottom: "5px" }}>
              {course.title}
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "10px" }}>
              {course.description}
            </p>
            <p>
              <strong>Status:</strong> {course.status} |{" "}
              <strong>Instructor:</strong> {course.instructor} |{" "}
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Progress:</strong> {course.modulesCompleted} |{" "}
              {course.progress}%
            </p>

            {/* Progress Bar */}
            <div
              style={{
                background: "#e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
                height: "15px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  width: `${course.progress}%`,
                  height: "100%",
                  background: course.progress === 100 ? "#16a34a" : "#2563eb",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {course.status === "Completed" ? (
                <>
                  <button
                    onClick={() => handleReview(course)}
                    style={buttonStyle("#16a34a")}
                  >
                    Review
                  </button>
                  <button
                    onClick={() => handleCertificate(course)}
                    style={buttonStyle("#fbbf24")}
                  >
                    Certificate
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => alert(`Continuing ${course.title}...`)}
                    style={buttonStyle("#2563eb")}
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => alert(`Opening materials for ${course.title}`)}
                    style={buttonStyle("#6b7280")}
                  >
                    Materials
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Review or Certificate Modal */}
      {selectedCourse && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <button onClick={handleClose} style={closeBtn}>
              ✖
            </button>

            {showCertificate ? (
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#2563eb" }}>Certificate of Completion</h2>
                <p>This certifies that</p>
                <h1 style={{ margin: "10px 0", color: "#111827" }}>
                  John Doe
                </h1>
                <p>has successfully completed</p>
                <h3 style={{ color: "#16a34a" }}>{selectedCourse.title}</h3>
                <p>Instructor: {selectedCourse.instructor}</p>
                <p>Duration: {selectedCourse.duration}</p>
                <p style={{ marginTop: "20px" }}>🎓 Congratulations!</p>
              </div>
            ) : (
              <div>
                <h2 style={{ color: "#2563eb" }}>{selectedCourse.title}</h2>
                <p style={{ color: "#374151", marginBottom: "15px" }}>
                  {selectedCourse.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedCourse.status}
                </p>
                <p>
                  <strong>Instructor:</strong> {selectedCourse.instructor}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedCourse.duration}
                </p>
                <p>
                  <strong>Modules Completed:</strong>{" "}
                  {selectedCourse.modulesCompleted}
                </p>
                <p>
                  <strong>Progress:</strong> {selectedCourse.progress}%
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Styling helpers
const buttonStyle = (color) => ({
  padding: "8px 16px",
  border: "none",
  borderRadius: "8px",
  background: color,
  color: "#fff",
  cursor: "pointer",
});

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalBox = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "500px",
  position: "relative",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

export default MyCourses;
