import React, { useState } from "react";

const StudentDashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [policySigned, setPolicySigned] = useState(false);
  const [enrollmentSigned, setEnrollmentSigned] = useState(false);
  const [tuitionPaid, setTuitionPaid] = useState(false);
  const [financingApplied, setFinancingApplied] = useState(false);
  const [installments, setInstallments] = useState([
    { month: "Oct", paid: false },
    { month: "Nov", paid: false },
  ]);

  const handleDocumentUpload = (e) => {
    setDocuments([...documents, ...Array.from(e.target.files)]);
    alert("Documents uploaded successfully!");
  };

  const handleSignPolicy = () => {
    setPolicySigned(true);
    alert("School policy signed digitally ✅");
  };

  const handleSignEnrollment = () => {
    setEnrollmentSigned(true);
    alert("Enrollment agreement signed digitally ✅");
  };

  const handleTuitionPayment = () => {
    setTuitionPaid(true);
    alert("Tuition payment successful 💳");
  };

  const handleApplyFinancing = () => {
    setFinancingApplied(true);
    alert("Financing applied successfully ✅");
  };

  const handlePayInstallment = (index) => {
    const updated = [...installments];
    updated[index].paid = true;
    setInstallments(updated);
    alert(`Installment for ${updated[index].month} paid successfully!`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        {/* Circular School Logo */}
        <img src="/abc.jpeg" alt="School Logo" style={styles.logo} />

        <h1 style={styles.title}>Student Dashboard</h1>

        {/* School Policies */}
        <div style={styles.card}>
          <h2>School Policies</h2>
          <p>Attendance, Refund, Behavior, and more.</p>
          <button
            style={styles.button}
            onClick={handleSignPolicy}
            disabled={policySigned}
          >
            {policySigned ? "Signed ✅" : "Sign Digitally"}
          </button>
        </div>

        {/* Enrollment Agreement */}
        <div style={styles.card}>
          <h2>Enrollment Agreement</h2>
          <p>Complete your digital enrollment form or fillable PDF.</p>
          <button
            style={styles.button}
            onClick={handleSignEnrollment}
            disabled={enrollmentSigned}
          >
            {enrollmentSigned ? "Signed ✅" : "Sign Agreement"}
          </button>
        </div>

        {/* Document Upload */}
        <div style={styles.card}>
          <h2>Upload Documents</h2>
          <input
            type="file"
            multiple
            onChange={handleDocumentUpload}
            style={styles.fileInput}
          />
          <ul>
            {documents.map((doc, i) => (
              <li key={i}>{doc.name}</li>
            ))}
          </ul>
        </div>

        {/* Tuition Payment */}
        <div style={styles.card}>
          <h2>Tuition Payment</h2>
          <button
            style={styles.button}
            onClick={handleTuitionPayment}
            disabled={tuitionPaid}
          >
            {tuitionPaid ? "Paid ✅" : "Pay Now 💳"}
          </button>
        </div>

        {/* Financing */}
        <div style={styles.card}>
          <h2>Financing Application</h2>
          <button
            style={styles.button}
            onClick={handleApplyFinancing}
            disabled={financingApplied}
          >
            {financingApplied ? "Applied ✅" : "Apply Now"}
          </button>
        </div>

        {/* Installments */}
        <div style={styles.card}>
          <h2>Installment Payments</h2>
          {installments.map((ins, i) => (
            <div key={i} style={styles.row}>
              <span>{ins.month}</span>
              <button
                style={{
                  ...styles.button,
                  backgroundColor: ins.paid ? "#16a34a" : "#2563eb",
                }}
                disabled={ins.paid}
                onClick={() => handlePayInstallment(i)}
              >
                {ins.paid ? "Paid ✅" : "Pay"}
              </button>
            </div>
          ))}
        </div>

        {/* Jobs / Opportunities */}
        <div style={styles.card}>
          <h2>Job Opportunities</h2>
          <ul>
            <li>
              <a href="https://www.google.com/search?q=jobs+for+students" target="_blank" rel="noreferrer">
                Google Jobs
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/categories/programming-tech" target="_blank" rel="noreferrer">
                Fiverr
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer">
                LinkedIn Jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  dashboard: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "900px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    animation: "fadeIn 0.5s ease-in-out",
  },
  logo: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #2563eb",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    display: "block",
    margin: "0 auto 20px",
  },
  title: {
    textAlign: "center",
    color: "#1e40af",
    fontSize: "32px",
    marginBottom: "30px",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#f9fafb",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s all",
  },
  fileInput: {
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
};

export default StudentDashboard;
