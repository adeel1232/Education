import React, { useState } from "react";
import {
  FaSuitcase,
  FaSearch,
  FaFilter,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaFileUpload,
  FaUserEdit,
} from "react-icons/fa";

export default function JobPlacement() {
  const [search, setSearch] = useState("");
  const [showApplyForm, setShowApplyForm] = useState(null); // index of job being applied
  const [applicantInfo, setApplicantInfo] = useState({ firstName: "", lastName: "", description: "" });
  const [jobs, setJobs] = useState([
    {
      title: "Class A CDL Driver",
      company: "ABC Transport Inc.",
      location: "Houston, TX",
      salary: "$65,000 - $75,000/year",
      type: "Full-time",
      applied: false,
    },
    {
      title: "Long Haul Truck Driver",
      company: "TransAmerica Logistics",
      location: "Dallas, TX",
      salary: "$70,000 - $85,000/year",
      type: "Full-time",
      applied: true,
    },
    {
      title: "Regional CDL Driver",
      company: "Swift Transportation",
      location: "Austin, TX",
      salary: "$60,000 - $70,000/year",
      type: "Full-time",
      applied: "interview",
    },
  ]);

  const myApplications = jobs
    .filter((job) => job.applied === true || job.applied === "interview")
    .map((job) => ({ title: job.title, company: job.company, date: new Date().toLocaleDateString(), status: job.applied === true ? "Applied" : "Interview" }));

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].applied = true;
    setJobs(updatedJobs);
    setShowApplyForm(null);
    setApplicantInfo({ firstName: "", lastName: "", description: "" });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) alert(`File "${file.name}" uploaded successfully!`);
  };

  const handleBuildResume = () => {
    alert("Your PDF resume has been submitted!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1><FaSuitcase /> Job Placement</h1>
        <p>Find CDL driver positions and track your applications</p>
      </header>

      {/* My Applications */}
      <section>
        <h2>My Applications</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {myApplications.map((app, i) => (
            <div key={i} style={{ padding: "15px", background: "#f5f5f5", borderRadius: "5px", minWidth: "200px" }}>
              <h3>{app.title}</h3>
              <p>{app.company}</p>
              <p><strong>Applied:</strong> {app.date}</p>
              <span style={{ fontWeight: "bold" }}>{app.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Search */}
      <section style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "5px", width: "300px", marginRight: "10px" }}
        />
        <button><FaFilter /> Filters</button>
      </section>

      {/* Job Listings */}
      <section>
        <h2>Available Positions</h2>
        {filteredJobs.map((job, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "15px", background: "#f5f5f5", marginBottom: "10px", borderRadius: "5px" }}>
            <div>
              <h3>{job.title}</h3>
              <p><FaBuilding /> {job.company}</p>
              <p><FaMapMarkerAlt /> {job.location}</p>
              <p><FaMoneyBillWave /> {job.salary}</p>
              <p><FaClock /> {job.type}</p>
            </div>
            {job.applied === true ? (
              <button disabled style={{ background: "#ff9800", color: "#fff", padding: "8px 12px" }}>Applied</button>
            ) : job.applied === "interview" ? (
              <button disabled style={{ background: "#2196f3", color: "#fff", padding: "8px 12px" }}>Interview</button>
            ) : (
              <button onClick={() => setShowApplyForm(index)} style={{ background: "#4caf50", color: "#fff", padding: "8px 12px" }}>Apply Now</button>
            )}
          </div>
        ))}
      </section>

      {/* Apply Form Modal */}
      {showApplyForm !== null && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Apply for {jobs[showApplyForm].title}</h3>
            <input
              placeholder="First Name"
              value={applicantInfo.firstName}
              onChange={(e) => setApplicantInfo({ ...applicantInfo, firstName: e.target.value })}
            />
            <input
              placeholder="Last Name"
              value={applicantInfo.lastName}
              onChange={(e) => setApplicantInfo({ ...applicantInfo, lastName: e.target.value })}
            />
            <textarea
              placeholder="Brief Description About Yourself"
              value={applicantInfo.description}
              onChange={(e) => setApplicantInfo({ ...applicantInfo, description: e.target.value })}
            />
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button onClick={() => handleApply(showApplyForm)} style={{ background: "#4caf50", color: "#fff", padding: "8px 12px" }}>Submit Application</button>
              <button onClick={() => setShowApplyForm(null)} style={{ background: "#f44336", color: "#fff", padding: "8px 12px" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section style={{ marginTop: "20px" }}>
        <h2>Resume & Profile</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <label style={{ background: "#2196f3", color: "#fff", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}>
            <FaFileUpload /> Upload Resume
            <input type="file" style={{ display: "none" }} onChange={handleResumeUpload} />
          </label>
          <button onClick={handleBuildResume} style={{ background: "#4caf50", color: "#fff", padding: "8px 12px", borderRadius: "5px" }}>
            <FaUserEdit /> Build Resume
          </button>
        </div>
      </section>
    </div>
  );
}

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
