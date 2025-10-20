import React, { useState } from "react";

const JobPlacement = () => {
  const [search, setSearch] = useState("");
  const [myApplications, setMyApplications] = useState([
    { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", applied: "Jan 10, 2025", status: "Under Review" },
    { title: "Regional CDL Driver", company: "Swift Transportation", applied: "Jan 8, 2025", status: "Under Review" },
    { title: "Class A CDL Driver", company: "Freight Masters LLC", applied: "Jan 5, 2025", status: "Interview Scheduled" },
  ]);
  const [availablePositions, setAvailablePositions] = useState([
    { title: "Class A CDL Driver", company: "ABC Transport Inc.", location: "Houston, TX", salary: "$65,000 - $75,000/year", type: "Full-time" },
    { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", location: "Dallas, TX", salary: "$70,000 - $85,000/year", type: "Full-time" },
    { title: "Regional CDL Driver", company: "Swift Transportation", location: "Austin, TX", salary: "$60,000 - $70,000/year", type: "Full-time" },
    { title: "Local Delivery Driver", company: "Quick Freight Services", location: "San Antonio, TX", salary: "$50,000 - $60,000/year", type: "Full-time" },
    { title: "Hazmat Certified Driver", company: "Chemical Transport Co.", location: "Houston, TX", salary: "$75,000 - $90,000/year", type: "Full-time" },
  ]);
  const [newJob, setNewJob] = useState({ title: "", company: "", experience: "" });
  const [message, setMessage] = useState("");

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Review": return "#fbbf24";
      case "Interview Scheduled": return "#2563eb";
      case "Rejected": return "#ef4444";
      case "Applied": return "#10b981";
      default: return "#6b7280";
    }
  };

  const handleApply = (job) => {
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const newApp = { title: job.title, company: job.company, applied: date, status: "Interview Scheduled" };

    setMyApplications((prev) => [...prev, newApp]);
    setMessage(`✅ Your interview for "${job.title}" at ${job.company} has been scheduled automatically.`);
  };

  const handleAddApplication = () => {
    if (!newJob.title || !newJob.company) {
      alert("Please fill in both job title and company name.");
      return;
    }
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const newApp = {
      title: newJob.title,
      company: newJob.company,
      applied: date,
      status: "Under Review",
      experience: newJob.experience || "N/A",
    };
    setMyApplications((prev) => [...prev, newApp]);
    setNewJob({ title: "", company: "", experience: "" });
    setMessage(`✅ Application for "${newApp.title}" has been submitted successfully.`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Placement</h1>
      <p>Find CDL driver positions, apply, and track your progress.</p>

      {/* Status Message */}
      {message && (
        <div style={{ marginTop: 10, marginBottom: 20, padding: 12, borderRadius: 6, background: "#dcfce7", color: "#065f46" }}>
          {message}
        </div>
      )}

      {/* My Applications */}
      <section style={{ marginTop: 20 }}>
        <h2>My Applications</h2>
        {myApplications.length === 0 ? (
          <p style={{ color: "#888" }}>You haven’t applied for any jobs yet.</p>
        ) : (
          myApplications.map((app, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, background: "#fff" }}>
              <div>
                <h3 style={{ margin: 0 }}>{app.title}</h3>
                <p style={{ margin: "2px 0", fontSize: 14 }}>{app.company}</p>
                <p style={{ fontSize: 12, color: "#888" }}>Applied: {app.applied}</p>
                {app.experience && <p style={{ fontSize: 12, color: "#2563eb" }}>Experience: {app.experience}</p>}
              </div>
              <span style={{ padding: "4px 8px", borderRadius: 6, background: getStatusColor(app.status), color: "#fff", fontSize: 12 }}>
                {app.status}
              </span>
            </div>
          ))
        )}
      </section>

      {/* Add Application */}
      <section style={{ marginTop: 40 }}>
        <h2>Add New Application</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            style={{ flex: 1, minWidth: 200, padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            style={{ flex: 1, minWidth: 200, padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
          />
          <input
            type="text"
            placeholder="Your Experience (years or notes)"
            value={newJob.experience}
            onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
            style={{ flex: 1, minWidth: 200, padding: 8, border: "1px solid #ddd", borderRadius: 6 }}
          />
          <button
            onClick={handleAddApplication}
            style={{ padding: "8px 16px", borderRadius: 6, border: "none", backgroundColor: "#2563eb", color: "#fff", cursor: "pointer" }}
          >
            Add Application
          </button>
        </div>
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
          .filter(
            (job) =>
              job.title.toLowerCase().includes(search.toLowerCase()) ||
              job.company.toLowerCase().includes(search.toLowerCase()) ||
              job.location.toLowerCase().includes(search.toLowerCase())
          )
          .map((job, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, background: "#fff" }}>
              <div>
                <h3 style={{ margin: 0 }}>{job.title}</h3>
                <p style={{ margin: "2px 0", fontSize: 14 }}>{job.company}</p>
                <p style={{ fontSize: 12, color: "#888" }}>{job.location} | {job.salary} | {job.type}</p>
              </div>
              <button
                onClick={() => handleApply(job)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: "#10b981",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
      </section>

      {/* Resume & Profile */}
      <section style={{ marginTop: 40 }}>
        <h2>Resume & Profile</h2>
        <p>Keep your resume updated to increase your chances of getting hired</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 10 }}>
          <button style={{ padding: "10px 20px", borderRadius: 6, border: "none", backgroundColor: "#2563eb", color: "#fff", cursor: "pointer" }}>
            Upload Resume
          </button>
          <button style={{ padding: "10px 20px", borderRadius: 6, border: "none", backgroundColor: "#10b981", color: "#fff", cursor: "pointer" }}>
            Build Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobPlacement;
