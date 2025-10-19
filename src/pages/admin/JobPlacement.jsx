import React from "react";
import { FaBriefcase, FaFileUpload, FaUserEdit, FaSearch, FaFilter } from "react-icons/fa";

const myApplications = [
  { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", applied: "Jan 10, 2025", status: "Under Review" },
  { title: "Regional CDL Driver", company: "Swift Transportation", applied: "Jan 8, 2025", status: "Interview Scheduled" },
  { title: "Class A CDL Driver", company: "Freight Masters LLC", applied: "Jan 5, 2025", status: "Rejected" },
];

const availablePositions = [
  { title: "Class A CDL Driver", company: "ABC Transport Inc.", location: "Houston, TX", salary: "$65,000 - $75,000/year", type: "Full-time", status: "Open" },
  { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", location: "Dallas, TX", salary: "$70,000 - $85,000/year", type: "Full-time", status: "Applied" },
  { title: "Regional CDL Driver", company: "Swift Transportation", location: "Austin, TX", salary: "$60,000 - $70,000/year", type: "Full-time", status: "Interview" },
  { title: "Local Delivery Driver", company: "Quick Freight Services", location: "San Antonio, TX", salary: "$50,000 - $60,000/year", type: "Full-time", status: "Open" },
  { title: "Hazmat Certified Driver", company: "Chemical Transport Co.", location: "Houston, TX", salary: "$75,000 - $90,000/year", type: "Full-time", status: "Open" },
  { title: "Team Driver Position", company: "National Trucking Inc.", location: "Dallas, TX", salary: "$80,000 - $100,000/year", type: "Full-time", status: "Open" },
];

export default function JobPlacement() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Job Placement</h1>
      <p>Find CDL driver positions and track your applications</p>

      {/* Search and Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
          <FaSearch /> Search Jobs
        </button>
        <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ff9800", color: "#fff" }}>
          <FaFilter /> Filters
        </button>
      </div>

      {/* My Applications */}
      <div style={{ marginBottom: "30px" }}>
        <h3>My Applications</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {myApplications.map((app, i) => (
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
                <strong>{app.title}</strong> - {app.company}<br />
                <small>Applied: {app.applied}</small>
              </div>
              <span style={{ color: app.status === "Rejected" ? "#f44336" : app.status === "Interview Scheduled" ? "#ff9800" : "#2196f3", fontWeight: "bold" }}>
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Positions */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Available Positions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {availablePositions.map((job, i) => (
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
                <strong>{job.title}</strong> - {job.company}<br />
                <small>{job.location} | {job.salary} | {job.type}</small>
              </div>
              <button style={{
                padding: "5px 15px",
                borderRadius: "5px",
                border: "none",
                background: job.status === "Applied" ? "#ff9800" : job.status === "Interview" ? "#2196f3" : "#4caf50",
                color: "#fff",
                fontWeight: "bold"
              }}>
                {job.status === "Open" ? "Apply Now" : job.status}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resume & Profile */}
      <div>
        <h3>Resume & Profile</h3>
        <p>Keep your resume updated to increase your chances of getting hired</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff" }}>
            <FaFileUpload /> Upload Resume
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 15px", borderRadius: "5px", border: "none", background: "#4caf50", color: "#fff" }}>
            <FaUserEdit /> Build Resume
          </button>
        </div>
      </div>
    </div>
  );
}

