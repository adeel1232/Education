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
  FaUserPlus as FaAdd,
} from "react-icons/fa";
import "./CandidateManagement.css";

function CandidateManagement() {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState([
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
  ]);

  const [viewCandidate, setViewCandidate] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    role: "",
    status: "Under Review",
    rating: 0,
    email: "",
    phone: "",
    location: "",
    experience: "",
    applied: new Date().toISOString().slice(0, 10),
    skills: [],
  });

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleApprove = (index) => {
    const updated = [...candidates];
    updated[index].status = "Hired";
    setCandidates(updated);
  };

  const handleReject = (index) => {
    const updated = [...candidates];
    updated[index].status = "Rejected";
    setCandidates(updated);
  };

  const handleAddCandidate = () => {
    if (!newCandidate.name) return alert("Name required");
    setCandidates([
      ...candidates,
      { ...newCandidate, initials: newCandidate.name.split(" ").map(n => n[0]).join("").toUpperCase() },
    ]);
    setNewCandidate({ ...newCandidate, name: "", role: "", email: "", phone: "", location: "", experience: "", skills: [], rating: 0 });
    setShowAddForm(false);
  };

  const stats = [
    { icon: <FaClipboardList />, label: "Total Applications", count: candidates.length, note: "All positions" },
    { icon: <FaUserClock />, label: "Under Review", count: candidates.filter(c => c.status === "Under Review").length, note: "Pending review" },
    { icon: <FaUserCheck />, label: "Interviews", count: candidates.filter(c => c.status === "Interview Scheduled").length, note: "Scheduled" },
    { icon: <FaUserPlus />, label: "Hired", count: candidates.filter(c => c.status === "Hired").length, note: "This month" },
  ];

  return (
    <div className="candidate-management">
      <header className="header">
        <h1><FaUserTie /> Candidate Management</h1>
        <p>Review and manage job applications and candidates</p>
        <button onClick={() => setShowAddForm(true)}><FaAdd /> Add Candidate</button>
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
        <button className="filter-btn"><FaFilter /> Filter</button>
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
                <span className={`status ${c.status.toLowerCase().replace(" ", "-")}`}>{c.status}</span>
              </div>
              <div className="rating"><FaStar /> {c.rating}</div>
            </div>

            <div className="actions">
              <button className="view-btn" onClick={() => setViewCandidate(c)}>View</button>
              <button className="approve-btn" onClick={() => handleApprove(i)}><FaCheckCircle /> Approve</button>
              <button className="reject-btn" onClick={() => handleReject(i)}><FaTimesCircle /> Reject</button>
            </div>
          </div>
        ))}
      </div>

      {/* View Modal */}
      {viewCandidate && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>{viewCandidate.name}</h3>
            <p><strong>Role:</strong> {viewCandidate.role}</p>
            <p><strong>Status:</strong> {viewCandidate.status}</p>
            <p><strong>Email:</strong> {viewCandidate.email}</p>
            <p><strong>Phone:</strong> {viewCandidate.phone}</p>
            <p><strong>Location:</strong> {viewCandidate.location}</p>
            <p><strong>Experience:</strong> {viewCandidate.experience}</p>
            <p><strong>Applied:</strong> {viewCandidate.applied}</p>
            <p><strong>Skills:</strong> {viewCandidate.skills.join(", ")}</p>
            <button onClick={() => setViewCandidate(null)} style={{ marginTop: "10px", padding: "8px 12px", background: "#f44336", color: "#fff" }}>Close</button>
          </div>
        </div>
      )}

      {/* Add Candidate Modal */}
      {showAddForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Add New Candidate</h3>
            <input placeholder="Full Name" value={newCandidate.name} onChange={e => setNewCandidate({...newCandidate, name: e.target.value})} />
            <input placeholder="Role" value={newCandidate.role} onChange={e => setNewCandidate({...newCandidate, role: e.target.value})} />
            <input placeholder="Email" value={newCandidate.email} onChange={e => setNewCandidate({...newCandidate, email: e.target.value})} />
            <input placeholder="Phone" value={newCandidate.phone} onChange={e => setNewCandidate({...newCandidate, phone: e.target.value})} />
            <input placeholder="Location" value={newCandidate.location} onChange={e => setNewCandidate({...newCandidate, location: e.target.value})} />
            <input placeholder="Experience" value={newCandidate.experience} onChange={e => setNewCandidate({...newCandidate, experience: e.target.value})} />
            <input placeholder="Skills (comma separated)" value={newCandidate.skills} onChange={e => setNewCandidate({...newCandidate, skills: e.target.value.split(",")})} />
            <input type="number" placeholder="Rating" value={newCandidate.rating} onChange={e => setNewCandidate({...newCandidate, rating: parseFloat(e.target.value)})} />
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button onClick={handleAddCandidate} style={{ background: "#4caf50", color: "#fff", padding: "8px 12px" }}>Add Candidate</button>
              <button onClick={() => setShowAddForm(false)} style={{ background: "#f44336", color: "#fff", padding: "8px 12px" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const modalOverlay = {
  position: "fixed",
  top:0, left:0, right:0, bottom:0,
  background: "rgba(0,0,0,0.5)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  zIndex:1000,
};

const modalContent = {
  background:"#fff",
  padding:"20px",
  borderRadius:"10px",
  width:"400px",
  display:"flex",
  flexDirection:"column",
  gap:"10px",
};

export default CandidateManagement;
