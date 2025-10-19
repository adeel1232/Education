import React from "react";

const courses = [
  {
    title: "Class A CDL Theory",
    description: "Comprehensive theory course covering all aspects of Class A commercial driving",
    progress: 85,
    modulesCompleted: "17/20",
    status: "In Progress",
    instructor: "Mike Johnson",
    duration: "8 weeks",
  },
  {
    title: "Behind-the-Wheel Training",
    description: "Practical driving experience with certified instructors",
    progress: 60,
    modulesCompleted: "18/30",
    status: "In Progress",
    instructor: "Sarah Williams",
    duration: "12 weeks",
  },
  {
    title: "Hazmat Certification",
    description: "Hazardous materials handling and transportation certification",
    progress: 100,
    modulesCompleted: "10/10",
    status: "Completed",
    instructor: "David Brown",
    duration: "4 weeks",
  },
  {
    title: "Air Brakes Training",
    description: "Air brake systems operation and safety procedures",
    progress: 30,
    modulesCompleted: "3/10",
    status: "In Progress",
    instructor: "Mike Johnson",
    duration: "3 weeks",
  },
  {
    title: "Pre-Trip Inspection",
    description: "Complete vehicle inspection procedures and safety checks",
    progress: 100,
    modulesCompleted: "8/8",
    status: "Completed",
    instructor: "Sarah Williams",
    duration: "2 weeks",
  },
  {
    title: "Defensive Driving Techniques",
    description: "Advanced defensive driving strategies for commercial vehicles",
    progress: 45,
    modulesCompleted: "5/12",
    status: "In Progress",
    instructor: "David Brown",
    duration: "4 weeks",
  },
];

const MyCourses = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", background: "#f3f4f6" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1e3a8a" }}>
        My Courses
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#374151" }}>
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
            <h2 style={{ color: "#2563eb", marginBottom: "5px" }}>{course.title}</h2>
            <p style={{ color: "#6b7280", marginBottom: "10px" }}>{course.description}</p>
            <p>
              <strong>Status:</strong> {course.status} | <strong>Instructor:</strong>{" "}
              {course.instructor} | <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Progress:</strong> {course.modulesCompleted} | {course.progress}%
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
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#16a34a",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Review
                  </button>
                  <button
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#fbbf24",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Certificate
                  </button>
                </>
              ) : (
                <>
                  <button
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#2563eb",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Continue
                  </button>
                  <button
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#6b7280",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Materials
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
