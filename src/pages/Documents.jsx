import React, { useState } from "react";

const Documents = () => {
  const [docs, setDocs] = useState([
    { name: "Driver's License", description: "Valid government-issued driver's license", status: "Verified", expires: "Dec 31, 2025", file: null },
    { name: "DOT Medical Card", description: "Department of Transportation medical certification", status: "Under Review", expires: "Feb 28, 2025", file: null },
    { name: "Social Security Card", description: "Original or certified copy", status: "Required", expires: null, file: null },
    { name: "Proof of Residency", description: "Utility bill or lease agreement (last 30 days)", status: "Rejected", expires: null, file: null },
    { name: "Birth Certificate", description: "Original or certified copy", status: "Verified", expires: "N/A", file: null },
    { name: "Background Check Authorization", description: "Signed authorization form", status: "Verified", expires: "Valid", file: null },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Verified": return "#10b981"; // green
      case "Under Review": return "#fbbf24"; // yellow
      case "Rejected": return "#ef4444"; // red
      case "Required": return "#2563eb"; // blue
      default: return "#6b7280"; // gray
    }
  };

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    if (!file) return;

    const updatedDocs = [...docs];
    updatedDocs[index].file = file;
    updatedDocs[index].status = "Under Review";
    setDocs(updatedDocs);
    alert(`✅ ${updatedDocs[index].name} uploaded successfully.`);
  };

  const handleReplace = (index) => {
    document.getElementById(`fileInput-${index}`).click();
  };

  const handleView = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    } else {
      alert("No document uploaded yet.");
    }
  };

  const expiringDocs = [
    { name: "DOT Medical Card", expires: "Feb 28, 2025", daysLeft: 45 },
    { name: "Driver's License", expires: "Dec 31, 2025", daysLeft: 328 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Documents</h1>
      <p>Upload and manage your required documents</p>

      {/* Notification Banner */}
      <div style={{ marginTop: 20, marginBottom: 20, padding: 15, backgroundColor: "#fef3c7", borderRadius: 8 }}>
        <strong>Action Required:</strong> You have documents pending upload or review. Please complete them to stay compliant.
      </div>

      {/* Required Documents */}
      <section style={{ marginTop: 20 }}>
        <h2>Required Documents</h2>
        {docs.map((doc, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 8,
              marginBottom: 10,
              backgroundColor: "#fff",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{doc.name}</h3>
              <p style={{ margin: "2px 0", fontSize: 14, color: "#555" }}>{doc.description}</p>
              {doc.expires && <p style={{ fontSize: 12, color: "#888" }}>Expires: {doc.expires}</p>}
              {doc.file && (
                <p style={{ fontSize: 12, color: "#2563eb" }}>
                  Uploaded: {doc.file.name}
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 6,
                  backgroundColor: getStatusColor(doc.status),
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                {doc.status}
              </span>

              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="file"
                  id={`fileInput-${idx}`}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload(idx, e)}
                />

                <button
                  onClick={() => handleReplace(idx)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 6,
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  {doc.file ? "Replace" : "Upload"}
                </button>

                <button
                  onClick={() => handleView(doc.file)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 6,
                    border: "1px solid #2563eb",
                    backgroundColor: "#fff",
                    color: "#2563eb",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Expiring Documents */}
      <section style={{ marginTop: 40 }}>
        <h2>Expiring Documents</h2>
        {expiringDocs.map((doc, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 8,
              marginBottom: 10,
              backgroundColor: "#fff",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{doc.name}</h3>
              <p style={{ fontSize: 12, color: "#888" }}>Expires: {doc.expires}</p>
            </div>
            <span
              style={{
                padding: "4px 8px",
                borderRadius: 6,
                backgroundColor: "#f59e0b",
                color: "#fff",
                fontSize: 12,
              }}
            >
              {doc.daysLeft} days left
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Documents;
