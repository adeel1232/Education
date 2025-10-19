import React, { useState } from "react";
import {
  FaUserTie,
  FaClipboardList,
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import "./CandidateManagement.css";

function CandidateManagement() {
  const [search, setSearch] = useState("");

  const stats = [
    { icon: <FaClipboardList />, label: "Total Applications", count: 48, note: "All positions" },
    { icon: <FaUserClock />, label: "Under Review", count: 12, note: "Pending review" },
    { icon: <FaUserCheck />, label: "Interviews", count: 8, note: "Scheduled" },
    { icon: <FaUserPlus />, label: "Hired", count: 15, note: "This month" },
  ];

  const candidates = [
    {
      initials: "JS",
      name: "John Smith",
      role: "CDL Driver",
      status: "Under Review",
      rating: 4.5,
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
      experience: "3 years experience",
      applied: "2025-01-15",
      skills: ["Class A CDL", "Long Haul", "Safety Certified"],
    },
    {
      initials: "ED",
      name: "Emily Davis",
      role: "Fleet Manager",
      status: "Interview Scheduled",
      rating: 4.8,
      email: "emily.davis@email.com",
      phone: "(555) 234-5678",
      location: "Chicago, IL",
      experience: "5 years experience",
      applied: "2025-01-14",
      skills: ["Fleet Management", "Logistics", "Team Leadership"],
    },
    {
      initials: "MB",
      name: "Michael Brown",
      role: "Safety Coordinator",
      status: "Rejected",
      rating: 3.2,
      email: "michael.brown@email.com",
      phone: "(555) 345-6789",
      location: "Los Angeles, CA",
      experience: "2 years experience",
      applied: "2025-01-13",
      skills: ["Safety Protocols", "Training", "Compliance"],
    },
    {
      initials: "SW",
      name: "Sarah Wilson",
      role: "CDL Driver",
      status: "Hired",
      rating: 4.7,
      email: "sarah.wilson@email.com",
      phone: "(555) 456-7890",
      location: "Houston, TX",
      experience: "1 year experience",
      applied: "2025-01-12",
      skills: ["Class B CDL", "Local Delivery", "Customer Service"],
    },
  ];

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="candidate-management">
      <header className="header">
        <h1>
          <FaUserTie /> Candidate Management
        </h1>
        <p>Review and manage job applications and candidates</p>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((item, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.count}</h3>
            <p>{item.label}</p>
            <span>{item.note}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Search candidates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="filter-btn">
          <FaFilter /> Filter
        </button>
      </div>

      {/* Candidate List */}
      <div className="candidate-list">
        {filteredCandidates.map((c, i) => (
          <div key={i} className="candidate-card">
            <div className="candidate-header">
              <div className="initials">{c.initials}</div>
              <div className="info">
                <h3>{c.name}</h3>
                <p className="role">{c.role}</p>
                <span className={`status ${c.status.toLowerCase().replace(" ", "-")}`}>
                  {c.status}
                </span>
              </div>
              <div className="rating">
                <FaStar /> {c.rating}
              </div>
            </div>

            <div className="candidate-details">
              <p>
                <FaEnvelope /> {c.email}
              </p>
              <p>
                <FaPhone /> {c.phone}
              </p>
              <p>
                <FaMapMarkerAlt /> {c.location}
              </p>
              <p>{c.experience}</p>
              <p>
                <strong>Applied:</strong> {c.applied}
              </p>
            </div>

            <div className="skills">
              <strong>Skills:</strong>
              <div className="skill-list">
                {c.skills.map((s, idx) => (
                  <span key={idx} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="actions">
              <button className="view-btn">View</button>
              <button className="approve-btn">
                <FaCheckCircle /> Approve
              </button>
              <button className="reject-btn">
                <FaTimesCircle /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandidateManagement;
