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
import "./JobPlacement.css";

function JobPlacement() {
  const [search, setSearch] = useState("");

  const myApplications = [
    {
      title: "Long Haul Truck Driver",
      company: "TransAmerica Logistics",
      date: "Jan 10, 2025",
      status: "Under Review",
    },
    {
      title: "Regional CDL Driver",
      company: "Swift Transportation",
      date: "Jan 8, 2025",
      status: "Interview Scheduled",
    },
    {
      title: "Class A CDL Driver",
      company: "Freight Masters LLC",
      date: "Jan 5, 2025",
      status: "Rejected",
    },
  ];

  const jobs = [
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
    {
      title: "Local Delivery Driver",
      company: "Quick Freight Services",
      location: "San Antonio, TX",
      salary: "$50,000 - $60,000/year",
      type: "Full-time",
      applied: false,
    },
    {
      title: "Hazmat Certified Driver",
      company: "Chemical Transport Co.",
      location: "Houston, TX",
      salary: "$75,000 - $90,000/year",
      type: "Full-time",
      applied: false,
    },
    {
      title: "Team Driver Position",
      company: "National Trucking Inc.",
      location: "Dallas, TX",
      salary: "$80,000 - $100,000/year",
      type: "Full-time",
      applied: false,
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-placement">
      <header className="header">
        <h1>
          <FaSuitcase /> Job Placement
        </h1>
        <p>Find CDL driver positions and track your applications</p>
      </header>

      {/* My Applications */}
      <section className="applications-section">
        <h2>My Applications</h2>
        <div className="applications-grid">
          {myApplications.map((app, i) => (
            <div key={i} className="app-card">
              <h3>{app.title}</h3>
              <p>{app.company}</p>
              <p>
                <strong>Applied:</strong> {app.date}
              </p>
              <span className={`status ${app.status.replace(" ", "-").toLowerCase()}`}>
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Job Search */}
      <section className="job-search-section">
        <div className="search-bar">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="filter-btn">
            <FaFilter /> Filters
          </button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="available-jobs">
        <h2>Available Positions</h2>
        <div className="job-list">
          {filteredJobs.map((job, i) => (
            <div key={i} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>
                  <FaBuilding /> {job.company}
                </p>
                <p>
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <p>
                  <FaMoneyBillWave /> {job.salary}
                </p>
                <p>
                  <FaClock /> {job.type}
                </p>
              </div>

              {job.applied === true ? (
                <button className="applied-btn">Applied</button>
              ) : job.applied === "interview" ? (
                <button className="interview-btn">Interview</button>
              ) : (
                <button className="apply-btn">Apply Now</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <h2>Resume & Profile</h2>
        <p>Keep your resume updated to increase your chances of getting hired</p>
        <div className="resume-actions">
          <button className="upload-btn">
            <FaFileUpload /> Upload Resume
          </button>
          <button className="build-btn">
            <FaUserEdit /> Build Resume
          </button>
        </div>
      </section>
    </div>
  );
}

export default JobPlacement;
