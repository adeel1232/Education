import React, { useState } from "react";
import { FaBriefcase, FaFileUpload, FaUserEdit, FaSearch, FaFilter } from "react-icons/fa";

const initialApplications = [
  { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", applied: "Jan 10, 2025", status: "Under Review" },
  { title: "Regional CDL Driver", company: "Swift Transportation", applied: "Jan 8, 2025", status: "Interview Scheduled" },
  { title: "Class A CDL Driver", company: "Freight Masters LLC", applied: "Jan 5, 2025", status: "Rejected" },
];

const initialJobs = [
  { title: "Class A CDL Driver", company: "ABC Transport Inc.", location: "Houston, TX", salary: "$65,000 - $75,000/year", type: "Full-time", status: "Open" },
  { title: "Long Haul Truck Driver", company: "TransAmerica Logistics", location: "Dallas, TX", salary: "$70,000 - $85,000/year", type: "Full-time", status: "Applied" },
  { title: "Regional CDL Driver", company: "Swift Transportation", location: "Austin, TX", salary: "$60,000 - $70,000/year", type: "Full-time", status: "Interview" },
  { title: "Local Delivery Driver", company: "Quick Freight Services", location: "San Antonio, TX", salary: "$50,000 - $60,000/year", type: "Full-time", status: "Open" },
  { title: "Hazmat Certified Driver", company: "Chemical Transport Co.", location: "Houston, TX", salary: "$75,000 - $90,000/year", type: "Full-time", status: "Open" },
  { title: "Team Driver Position", company: "National Trucking Inc.", location: "Dallas, TX", salary: "$80,000 - $100,000/year", type: "Full-time", status: "Open" },
];

export default function JobPlacement() {
  const [myApplications, setMyApplications] = useState(initialApplications);
  const [availablePositions, setAvailablePositions] = useState(initialJobs);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showBuildModal, setShowBuildModal] = useState(false);

  // Apply for job
  const handleApply = (index) => {
    const job = availablePositions[index];
    if (job.status === "Open") {
      const updatedJobs = [...availablePositions];
      updatedJobs[index].status = "Applied";
      setAvailablePositions(updatedJobs);

      const newApplication = {
        title: job.title,
        company: job.company,
        applied: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        status: "Under Review",
      };
      setMyApplications([newApplication, ...myApplications]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ color: "#333" }}>Job Placement</h1>
      <p style={{ color: "#555" }}>Find CDL driver positions and track your applications</p>

      {/* Search and Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button className="btn blue"><FaSearch /> Search Jobs</button>
        <button className="btn orange"><FaFilter /> Filters</button>
      </div>

      {/* My Applications */}
      <div style={{ marginBottom: "30px" }}>
        <h3>My Applications</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {myApplications.map((app, i) => (
            <div key={i} className="card">
              <div>
                <strong>{app.title}</strong> - {app.company}<br />
                <small>Applied: {app.applied}</small>
              </div>
              <span className={`status ${app.status.replace(/\s/g, "").toLowerCase()}`}>
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
            <div key={i} className="card">
              <div>
                <strong>{job.title}</strong> - {job.company}<br />
                <small>{job.location} | {job.salary} | {job.type}</small>
              </div>
              <button
                className={`btn ${job.status === "Applied" ? "orange" : job.status === "Interview" ? "blue" : "green"}`}
                onClick={() => handleApply(i)}
              >
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
          <button className="btn blue" onClick={() => setShowResumeModal(true)}><FaFileUpload /> Upload Resume</button>
          <button className="btn green" onClick={() => setShowBuildModal(true)}><FaUserEdit /> Build Resume</button>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Upload Resume</h3>
            <input type="file" />
            <button className="btn green" onClick={() => setShowResumeModal(false)}>Upload</button>
            <button className="btn red" onClick={() => setShowResumeModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Build Resume Modal */}
      {showBuildModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Build Resume</h3>
            <p>Resume builder coming soon...</p>
            <button className="btn red" onClick={() => setShowBuildModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-2px);
        }
        .btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 10px 15px;
          border-radius: 5px;
          border: none;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn.blue { background: #2196f3; }
        .btn.orange { background: #ff9800; }
        .btn.green { background: #4caf50; }
        .btn.red { background: #f44336; }
        .btn:hover { opacity: 0.85; }
        .status {
          font-weight: bold;
        }
        .status.underreview { color: #2196f3; }
        .status.interviewscheduled { color: #ff9800; }
        .status.rejected { color: #f44336; }
        .modal {
          position: fixed;
          top:0; left:0; right:0; bottom:0;
          background: rgba(0,0,0,0.5);
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .modal-content {
          background:#fff;
          padding:20px;
          border-radius:10px;
          display:flex;
          flex-direction:column;
          gap:10px;
          min-width:300px;
        }
      `}</style>
    </div>
  );
}
