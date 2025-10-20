import React, { useState } from "react";

const Schedule = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const upcomingClasses = [
    {
      title: "Defensive Driving Techniques",
      type: "Theory",
      instructor: "Mike Johnson",
      date: "Tomorrow, Jan 15",
      time: "9:00 AM - 12:00 PM",
      location: "Room 101",
      action: "View Details",
    },
    {
      title: "Behind-the-Wheel Training",
      type: "Practical",
      instructor: "Sarah Williams",
      date: "Jan 16, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Training Yard",
      action: "View Details",
    },
    {
      title: "Road Test Preparation",
      type: "Practical",
      instructor: "David Brown",
      date: "Jan 17, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Training Yard",
      action: "View Details",
    },
    {
      title: "Pre-Trip Inspection Review",
      type: "Hands-On",
      instructor: "Mike Johnson",
      date: "Jan 18, 2025",
      time: "9:00 AM - 11:00 AM",
      location: "Garage Area",
      action: "View Details",
    },
    {
      title: "Hazmat Safety Training (Online)",
      type: "Online",
      instructor: "Mike Johnson",
      date: "Jan 20, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Meeting",
      link: "https://zoom.us/j/123456789",
      action: "View Details",
    },
  ];

  const pastClasses = [
    {
      title: "Air Brakes Theory",
      type: "Theory",
      instructor: "Sarah Williams",
      date: "Jan 13, 2025",
      time: "2:00 PM - 4:00 PM",
      status: "Attended",
    },
    {
      title: "CDL Written Test Prep",
      type: "Theory",
      instructor: "David Brown",
      date: "Jan 12, 2025",
      time: "10:00 AM - 12:00 PM",
      status: "Attended",
    },
  ];

  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    backgroundColor: "#fff",
    transition: "transform 0.2s",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 500,
  };

  const statusBadge = (status) => ({
    padding: "6px 12px",
    borderRadius: 8,
    backgroundColor: status === "Attended" ? "#10b981" : "#f59e0b",
    color: "#fff",
    fontWeight: 500,
    fontSize: 12,
  });

  const detailModal = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalBox = {
    background: "#fff",
    borderRadius: 12,
    padding: 30,
    width: "90%",
    maxWidth: 500,
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 5 }}>Class Schedule</h1>
      <p style={{ color: "#6b7280" }}>View your upcoming and past classes</p>

      {/* Upcoming Classes */}
      <section style={{ marginTop: 30 }}>
        <h2 style={{ marginBottom: 15 }}>Upcoming Classes</h2>
        {upcomingClasses.map((cls, idx) => (
          <div
            key={idx}
            style={{ ...cardStyle }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{cls.title}</h3>
              <p style={{ margin: "6px 0", color: "#6b7280" }}>
                {cls.type} • {cls.instructor} • {cls.date} • {cls.time} • {cls.location}
              </p>
            </div>
            <button style={buttonStyle} onClick={() => setSelectedClass(cls)}>
              {cls.action}
            </button>
          </div>
        ))}
      </section>

      {/* Past Classes */}
      <section style={{ marginTop: 50 }}>
        <h2 style={{ marginBottom: 15 }}>Past Classes</h2>
        {pastClasses.map((cls, idx) => (
          <div
            key={idx}
            style={{
              ...cardStyle,
              backgroundColor: "#f9fafb",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{cls.title}</h3>
              <p style={{ margin: "6px 0", color: "#6b7280" }}>
                {cls.type} • {cls.instructor} • {cls.date} • {cls.time}
              </p>
            </div>
            <span style={statusBadge(cls.status)}>{cls.status}</span>
          </div>
        ))}
      </section>

      {/* Modal for Details */}
      {selectedClass && (
        <div style={detailModal} onClick={() => setSelectedClass(null)}>
          <div style={modalBox} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedClass.title}</h2>
            <p>
              <strong>Type:</strong> {selectedClass.type}
            </p>
            <p>
              <strong>Instructor:</strong> {selectedClass.instructor}
            </p>
            <p>
              <strong>Date:</strong> {selectedClass.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedClass.time}
            </p>
            <p>
              <strong>Location:</strong> {selectedClass.location}
            </p>

            {selectedClass.type === "Online" && selectedClass.link ? (
              <a
                href={selectedClass.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...buttonStyle,
                  display: "inline-block",
                  textDecoration: "none",
                  backgroundColor: "#10b981",
                  marginRight: 10,
                }}
              >
                Join Class
              </a>
            ) : (
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#10b981",
                  marginRight: 10,
                }}
                onClick={() => alert("Marked as Attended!")}
              >
                Attend
              </button>
            )}

            <button
              style={{ ...buttonStyle, backgroundColor: "#ef4444" }}
              onClick={() => setSelectedClass(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
