import React, { useState } from "react";
import { FaUsers, FaBriefcase, FaFileAlt, FaDollarSign, FaEdit, FaEye } from "react-icons/fa";

export default function DashboardIn() {
  const [employees] = useState([
    { name: "Robert Johnson", course: "Class A CDL", progress: 75 },
    { name: "Lisa Anderson", course: "Hazmat Certification", progress: 90 },
    { name: "James Wilson", course: "Class A CDL", progress: 45 },
  ]);

  const [applications] = useState([
    { name: "Mark Thompson", role: "Long Haul Driver", time: "2 hours ago", email: "mark@example.com", phone: "555-1234" },
    { name: "Jennifer Lee", role: "Regional Driver", time: "5 hours ago", email: "jennifer@example.com", phone: "555-5678" },
    { name: "David Martinez", role: "Local Delivery Driver", time: "1 day ago", email: "david@example.com", phone: "555-9012" },
  ]);

  const [jobPostings, setJobPostings] = useState([
    { id: 1, title: "Class A CDL Long Haul Driver", salary: "$70,000 - $85,000", apps: 18, posted: "3 days ago", paymentMethod: "Credit Card", amount: "$5000" },
    { id: 2, title: "Regional CDL Driver", salary: "$60,000 - $70,000", apps: 12, posted: "1 week ago", paymentMethod: "Bank Transfer", amount: "$4000" },
    { id: 3, title: "Local Delivery Driver", salary: "$50,000 - $60,000", apps: 8, posted: "2 weeks ago", paymentMethod: "PayPal", amount: "$3000" },
  ]);

  const [viewDetails, setViewDetails] = useState(null);
  const [newJob, setNewJob] = useState({ title: "", salary: "", paymentMethod: "", amount: "" });
  const [showNewJobForm, setShowNewJobForm] = useState(false);
  const [editJob, setEditJob] = useState(null);

  const handleAddJob = () => {
    setJobPostings([...jobPostings, { ...newJob, id: Date.now(), apps: 0, posted: "Just now" }]);
    setNewJob({ title: "", salary: "", paymentMethod: "", amount: "" });
    setShowNewJobForm(false);
  };

  const handleEditJob = () => {
    setJobPostings(jobPostings.map(job => job.id === editJob.id ? editJob : job));
    setEditJob(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header>
        <h1>Welcome, <span>Adeel AhmadTransport!</span></h1>
        <p>Track your employees' training progress and manage job postings</p>
      </header>

      {/* Stats */}
      <section style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
        <StatCard icon={<FaUsers />} label="Employees in Training" value={12} subtitle="Active participants" />
        <StatCard icon={<FaBriefcase />} label="Active Job Postings" value={5} subtitle="Open positions" />
        <StatCard icon={<FaFileAlt />} label="Total Applications" value={48} subtitle="↑ 23% this month" />
        <StatCard icon={<FaDollarSign />} label="Training Investment" value="$45K" subtitle="This quarter" />
      </section>

      {/* Employees */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Employees in Training</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {employees.map((emp, i) => (
            <div key={i} style={{ background: "#f5f5f5", padding: "15px", borderRadius: "10px", flex: "1 1 200px" }}>
              <h3>{emp.name}</h3>
              <p>{emp.course}</p>
              <div style={{ background: "#ddd", borderRadius: "5px", overflow: "hidden", height: "10px", marginBottom: "5px" }}>
                <div style={{ width: `${emp.progress}%`, background: "#4caf50", height: "100%" }}></div>
              </div>
              <span>{emp.progress}% Complete</span>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Recent Applications</h2>
        {applications.map((app, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", background: "#f5f5f5", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
            <div>
              <h4>{app.name}</h4>
              <p>{app.role}</p>
              <small>{app.time}</small>
            </div>
            <button onClick={() => setViewDetails(app)} style={btnStyle("#2196f3")}>View Details</button>
          </div>
        ))}
      </section>

      {/* Job Postings */}
      <section>
        <h2>Active Job Postings</h2>
        <button onClick={() => setShowNewJobForm(true)} style={btnStyle("#4caf50")}>+ Create New Posting</button>
        <div style={{ marginTop: "15px" }}>
          {jobPostings.map(job => (
            <div key={job.id} style={{ display: "flex", justifyContent: "space-between", background: "#f5f5f5", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
              <div>
                <h3>{job.title}</h3>
                <p>{job.salary}</p>
                <small>{job.apps} applications • Posted {job.posted}</small>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setEditJob(job)} style={btnStyle("#ff9800")}>Edit</button>
                <button onClick={() => setViewDetails(job)} style={btnStyle("#2196f3")}>View Applicants</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      {viewDetails && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Details</h3>
            {Object.entries(viewDetails).map(([key, val]) => (
              <p key={key}><strong>{key}:</strong> {val}</p>
            ))}
            <button onClick={() => setViewDetails(null)} style={btnStyle("#f44336")}>Close</button>
          </div>
        </div>
      )}

      {showNewJobForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Create New Job Posting</h3>
            <input placeholder="Job Title" value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} />
            <input placeholder="Salary" value={newJob.salary} onChange={e => setNewJob({ ...newJob, salary: e.target.value })} />
            <input placeholder="Payment Method" value={newJob.paymentMethod} onChange={e => setNewJob({ ...newJob, paymentMethod: e.target.value })} />
            <input placeholder="Amount" value={newJob.amount} onChange={e => setNewJob({ ...newJob, amount: e.target.value })} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleAddJob} style={btnStyle("#4caf50")}>Submit</button>
              <button onClick={() => setShowNewJobForm(false)} style={btnStyle("#f44336")}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {editJob && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Edit Job Posting</h3>
            <input placeholder="Job Title" value={editJob.title} onChange={e => setEditJob({ ...editJob, title: e.target.value })} />
            <input placeholder="Salary" value={editJob.salary} onChange={e => setEditJob({ ...editJob, salary: e.target.value })} />
            <input placeholder="Payment Method" value={editJob.paymentMethod} onChange={e => setEditJob({ ...editJob, paymentMethod: e.target.value })} />
            <input placeholder="Amount" value={editJob.amount} onChange={e => setEditJob({ ...editJob, amount: e.target.value })} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleEditJob} style={btnStyle("#ff9800")}>Save</button>
              <button onClick={() => setEditJob(null)} style={btnStyle("#f44336")}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Components
const StatCard = ({ icon, label, value, subtitle }) => (
  <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "10px", flex: "1 1 200px", textAlign: "center" }}>
    <div style={{ fontSize: "28px", marginBottom: "10px" }}>{icon}</div>
    <h3>{label}</h3>
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    <span>{subtitle}</span>
  </div>
);

// Styles
const btnStyle = (color) => ({
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  background: color,
  color: "#fff",
  cursor: "pointer"
});

const modalOverlay = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center",
  zIndex: 1000
};

const modalContent = {
  background: "#fff", padding: "20px", borderRadius: "10px", width: "300px",
  display: "flex", flexDirection: "column", gap: "10px"
};
