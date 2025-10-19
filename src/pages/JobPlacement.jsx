import React, { useState } from "react";

const JobPlacement = () => {
  const [search, setSearch] = useState("");

  const myApplications = [
    { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", applied: "Jan 10, 2025", status: "Under Review" },
    { title: "Regional CDL Driver", company: "Swift Transportation", applied: "Jan 8, 2025", status: "Under Review" },
    { title: "Class A CDL Driver", company: "Freight Masters LLC", applied: "Jan 5, 2025", status: "Interview Scheduled" },
    { title: "Local Delivery Driver", company: "Quick Freight Services", applied: "Jan 3, 2025", status: "Rejected" },
  ];

  const availablePositions = [
    { title: "Class A CDL Driver", company: "ABC Transport Inc.", location: "Houston, TX", salary: "$65,000 - $75,000/year", type: "Full-time", action: "Apply Now" },
    { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", location: "Dallas, TX", salary: "$70,000 - $85,000/year", type: "Full-time", action: "Applied" },
    { title: "Regional CDL Driver", company: "Swift Transportation", location: "Austin, TX", salary: "$60,000 - $70,000/year", type: "Full-time", action: "Interview" },
    { title: "Local Delivery Driver", company: "Quick Freight Services", location: "San Antonio, TX", salary: "$50,000 - $60,000/year", type: "Full-time", action: "Apply Now" },
    { title: "Hazmat Certified Driver", company: "Chemical Transport Co.", location: "Houston, TX", salary: "$75,000 - $90,000/year", type: "Full-time", action: "Apply Now" },
    { title: "Team Driver Position", company: "National Trucking Inc.", location: "Dallas, TX", salary: "$80,000 - $100,000/year", type: "Full-time", action: "Apply Now" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Review": return "#fbbf24";
      case "Interview Scheduled": return "#2563eb";
      case "Rejected": return "#ef4444";
      default: return "#6b7280";
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Placement</h1>
      <p>Find CDL driver positions and track your applications</p>

      {/* My Applications */}
      <section style={{ marginTop: 20 }}>
        <h2>My Applications</h2>
        {myApplications.map((app, idx) => (
          <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, backgroundColor: "#fff" }}>
            <div>
              <h3 style={{ margin: 0 }}>{app.title}</h3>
              <p style={{ margin: "2px 0", fontSize: 14 }}>{app.company}</p>
              <p style={{ fontSize: 12, color: "#888" }}>Applied: {app.applied}</p>
            </div>
            <span style={{ padding: "4px 8px", borderRadius: 6, backgroundColor: getStatusColor(app.status), color: "#fff", fontSize: 12 }}>
              {app.status}
            </span>
          </div>
        ))}
      </section>

      {/* Job Search */}
      <section style={{ marginTop: 40 }}>
        <h2>Available Positions</h2>
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 20, borderRadius: 6, border: "1px solid #ddd" }}
        />
        {availablePositions
          .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase()))
          .map((job, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, backgroundColor: "#fff" }}>
              <div>
                <h3 style={{ margin: 0 }}>{job.title}</h3>
                <p style={{ margin: "2px 0", fontSize: 14 }}>{job.company}</p>
                <p style={{ fontSize: 12, color: "#888" }}>{job.location} | {job.salary} | {job.type}</p>
              </div>
              <button
                style={{
                  padding: "5px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: job.action === "Apply Now" ? "#2563eb" : job.action === "Applied" ? "#6b7280" : "#10b981",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {job.action}
              </button>
            </div>
          ))}
      </section>

      {/* Resume & Profile */}
      <section style={{ marginTop: 40 }}>
        <h2>Resume & Profile</h2>
        <p>Keep your resume updated to increase your chances of getting hired</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 10 }}>
          <button style={{ padding: "10px 20px", borderRadius: 6, border: "none", backgroundColor: "#2563eb", color: "#fff", cursor: "pointer" }}>Upload Resume</button>
          <button style={{ padding: "10px 20px", borderRadius: 6, border: "none", backgroundColor: "#10b981", color: "#fff", cursor: "pointer" }}>Build Resume</button>
        </div>
      </section>
    </div>
  );
};

export default JobPlacement;
