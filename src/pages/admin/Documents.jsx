import React from "react";
import { FaFileUpload, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaClock } from "react-icons/fa";

const documents = [
  { name: "Driver's License", description: "Valid government-issued driver's license", status: "Verified", expires: "Dec 31, 2025", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
  { name: "DOT Medical Card", description: "Department of Transportation medical certification", status: "Under Review", expires: null, action: "Upload Document", icon: <FaExclamationTriangle color="#ff9800" /> },
  { name: "Social Security Card", description: "Original or certified copy", status: "Required", expires: null, action: "Upload Document", icon: <FaFileUpload color="#2196f3" /> },
  { name: "Proof of Residency", description: "Utility bill or lease agreement (last 30 days)", status: "Rejected", expires: null, action: "Upload Document", icon: <FaTimesCircle color="#f44336" /> },
  { name: "Birth Certificate", description: "Original or certified copy", status: "Verified", expires: "N/A", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
  { name: "Background Check Authorization", description: "Signed authorization form", status: "Verified", expires: "Valid", action: "Replace Document", icon: <FaCheckCircle color="#4caf50" /> },
];

const expiringDocs = [
  { name: "DOT Medical Card", expires: "Feb 28, 2025", daysLeft: 45 },
  { name: "Driver's License", expires: "Dec 31, 2025", daysLeft: 328 },
];

export default function DocumentsDashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Documents</h1>
      <p>Upload and manage your required documents</p>

      {/* Action Required */}
      <div style={{ marginBottom: "20px", padding: "15px", background: "#fff3cd", borderRadius: "5px", color: "#856404", display: "flex", alignItems: "center", gap: "10px" }}>
        <FaExclamationTriangle /> You have 2 documents that need attention. Please upload the required documents to complete your enrollment.
      </div>

      {/* Document List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
        {documents.map((doc, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            background: "#f5f5f5",
            borderRadius: "5px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ fontSize: "24px" }}>{doc.icon}</div>
              <div>
                <strong>{doc.name}</strong><br />
                <small>{doc.description}</small><br />
                {doc.status === "Verified" && doc.expires && <small>Expires: {doc.expires}</small>}
              </div>
            </div>
            <button style={{ padding: "5px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "#fff", fontWeight: "bold" }}>
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
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              background: "#fff3cd",
              borderRadius: "5px",
              color: "#856404",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
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
