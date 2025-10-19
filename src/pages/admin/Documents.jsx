import React, { useState } from "react";
import { FaFileUpload, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaClock, FaPlus } from "react-icons/fa";

export default function DocumentsDashboard() {
  const [documents, setDocuments] = useState([
    { name: "Driver's License", description: "Valid government-issued driver's license", status: "Verified", expires: "Dec 31, 2025", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
    { name: "DOT Medical Card", description: "Department of Transportation medical certification", status: "Under Review", expires: null, action: "Upload Document", icon: <FaExclamationTriangle color="#ff9800" /> },
    { name: "Social Security Card", description: "Original or certified copy", status: "Required", expires: null, action: "Upload Document", icon: <FaFileUpload color="#2196f3" /> },
    { name: "Proof of Residency", description: "Utility bill or lease agreement (last 30 days)", status: "Rejected", expires: null, action: "Upload Document", icon: <FaTimesCircle color="#f44336" /> },
    { name: "Birth Certificate", description: "Original or certified copy", status: "Verified", expires: "N/A", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
    { name: "Background Check Authorization", description: "Signed authorization form", status: "Verified", expires: "Valid", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
  ]);

  const [expiringDocs, setExpiringDocs] = useState([
    { name: "DOT Medical Card", expires: "Feb 28, 2025", daysLeft: 45 },
    { name: "Driver's License", expires: "Dec 31, 2025", daysLeft: 328 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newDoc, setNewDoc] = useState({ name: "", description: "", status: "Required", expires: "", action: "Upload Document" });

  const handleAddDocument = () => setShowForm(true);
  const handleSaveDocument = (e) => {
    e.preventDefault();
    const icon = newDoc.status === "Verified" ? <FaCheckCircle color="#4caf50" /> :
                 newDoc.status === "Rejected" ? <FaTimesCircle color="#f44336" /> :
                 <FaFileUpload color="#2196f3" />;
    setDocuments([...documents, { ...newDoc, icon }]);
    setNewDoc({ name: "", description: "", status: "Required", expires: "", action: "Upload Document" });
    setShowForm(false);
  };

  const handleDocumentAction = (doc) => {
    alert(`${doc.action} clicked for ${doc.name}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Documents</h1>
      <p>Upload and manage your required documents</p>

      {/* Add Document Button */}
      <div style={{ margin: "20px 0" }}>
        <button onClick={handleAddDocument} style={buttonStyle("#4caf50")}><FaPlus /> Add Document</button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Add New Document</h3>
            <form onSubmit={handleSaveDocument} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" placeholder="Document Name" value={newDoc.name} onChange={e => setNewDoc({ ...newDoc, name: e.target.value })} required />
              <input type="text" placeholder="Description" value={newDoc.description} onChange={e => setNewDoc({ ...newDoc, description: e.target.value })} required />
              <select value={newDoc.status} onChange={e => setNewDoc({ ...newDoc, status: e.target.value })}>
                <option value="Required">Required</option>
                <option value="Under Review">Under Review</option>
                <option value="Verified">Verified</option>
                <option value="Rejected">Rejected</option>
              </select>
              <input type="text" placeholder="Expires (optional)" value={newDoc.expires} onChange={e => setNewDoc({ ...newDoc, expires: e.target.value })} />
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={buttonStyle("#4caf50")}>Save</button>
                <button type="button" onClick={() => setShowForm(false)} style={buttonStyle("#f44336")}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Action Required */}
      <div style={{ marginBottom: "20px", padding: "15px", background: "#fff3cd", borderRadius: "5px", color: "#856404", display: "flex", alignItems: "center", gap: "10px" }}>
        <FaExclamationTriangle /> You have {documents.filter(d => d.status !== "Verified").length} documents that need attention. Please upload them.
      </div>

      {/* Document List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
        {documents.map((doc, i) => (
          <div key={i} style={docCardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ fontSize: "24px" }}>{doc.icon}</div>
              <div>
                <strong>{doc.name}</strong><br />
                <small>{doc.description}</small><br />
                {doc.status === "Verified" && doc.expires && <small>Expires: {doc.expires}</small>}
              </div>
            </div>
            <button style={buttonStyle("#2196f3")} onClick={() => handleDocumentAction(doc)}>
              {doc.action}
            </button>
          </div>
        ))}
      </div>

      {/* Expiring Documents */}
      <div>
        <h3>Expiring Documents</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {expiringDocs.map((doc, i) => (
            <div key={i} style={expiringCardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FaClock /> <strong>{doc.name}</strong> - Expires: {doc.expires}
              </div>
              <span>{doc.daysLeft} days left</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Styles
const buttonStyle = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  background: color,
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
});

const docCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  background: "#f5f5f5",
  borderRadius: "5px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
};

const expiringCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  background: "#fff3cd",
  borderRadius: "5px",
  color: "#856404",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
};

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalContent = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};
