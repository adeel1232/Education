import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const AdminDashboard = () => {
  // Enrollment Management
  const [enrollRequests, setEnrollRequests] = useState([
    { id: 1, name: "Ali", status: "Pending" },
    { id: 2, name: "Sara", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setEnrollRequests(
      enrollRequests.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );
  };

  const handleWaitlist = (id) => {
    setEnrollRequests(
      enrollRequests.map((r) => (r.id === id ? { ...r, status: "Waitlisted" } : r))
    );
  };

  // Document Verification
  const [documents, setDocuments] = useState([]);
  const handleDocumentUpload = (e) => {
    setDocuments([...documents, ...Array.from(e.target.files)]);
    alert("Documents uploaded successfully!");
  };

  // Payments & Payroll
  const [payments, setPayments] = useState([
    { student: "Ali", amount: 500, status: "Paid" },
    { student: "Sara", amount: 500, status: "Pending" },
  ]);

  const [payroll, setPayroll] = useState([
    { teacher: "Mr. Khan", hours: 40, salary: 2000 },
    { teacher: "Ms. Ayesha", hours: 35, salary: 1750 },
  ]);

  // Attendance & Grades
  const [attendance, setAttendance] = useState([
    { student: "Ali", present: 20, absent: 2 },
    { student: "Sara", present: 18, absent: 4 },
  ]);

  const [grades, setGrades] = useState([
    { student: "Ali", grade: "A" },
    { student: "Sara", grade: "B+" },
  ]);

  // Class Scheduling
  const [schedule, setSchedule] = useState([
    { class: "Math", time: "10:00 AM" },
    { class: "Science", time: "11:00 AM" },
  ]);

  // Transcripts / Certificates
  const [transcripts, setTranscripts] = useState([
    { student: "Ali", certificate: "Not generated" },
    { student: "Sara", certificate: "Not generated" },
  ]);

  const generateTranscript = (student) => {
    setTranscripts(
      transcripts.map((t) =>
        t.student === student ? { ...t, certificate: "Generated ✅" } : t
      )
    );
    alert(`Transcript for ${student} generated!`);
  };

  // Graph Data
  const hoursData = payroll.map((p) => ({ name: p.teacher, hours: p.hours }));
  const paymentsData = payments.map((p) => ({
    name: p.student,
    amount: p.amount,
  }));
  const attendanceData = attendance.map((a) => ({
    name: a.student,
    present: a.present,
    absent: a.absent,
  }));

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
        <h1 style={styles.title}>Admin Dashboard</h1>

        {/* Enrollment */}
        <section style={styles.card}>
          <h2>Enrollment Management</h2>
          {enrollRequests.map((r) => (
            <div key={r.id} style={styles.row}>
              <span>{r.name}</span>
              <span>Status: {r.status}</span>
              {r.status === "Pending" && (
                <div>
                  <button style={styles.button} onClick={() => handleApprove(r.id)}>Approve</button>
                  <button style={{...styles.button, backgroundColor: "#f59e0b"}} onClick={() => handleWaitlist(r.id)}>Waitlist</button>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Documents */}
        <section style={styles.card}>
          <h2>Document Verification</h2>
          <input type="file" multiple onChange={handleDocumentUpload} style={styles.fileInput}/>
          <ul>{documents.map((f, i) => <li key={i}>{f.name}</li>)}</ul>
        </section>

        {/* Payments & Payroll */}
        <section style={styles.card}>
          <h2>Payments & Payroll</h2>
          <h3>Student Payments</h3>
          {payments.map((p, i) => (
            <div key={i} style={styles.row}>
              {p.student} - ${p.amount} - {p.status}
            </div>
          ))}
          <h3>Teacher Payroll</h3>
          {payroll.map((p, i) => (
            <div key={i} style={styles.row}>
              {p.teacher} - Hours: {p.hours} - Salary: ${p.salary}
            </div>
          ))}

          {/* Graphs */}
          <h4>Hours Worked (Graph)</h4>
          <BarChart width={500} height={250} data={hoursData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="hours" fill="#2563eb" />
          </BarChart>

          <h4>Student Payments (Graph)</h4>
          <BarChart width={500} height={250} data={paymentsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#16a34a" />
          </BarChart>
        </section>

        {/* Attendance & Grades */}
        <section style={styles.card}>
          <h2>Attendance & Grades</h2>
          {attendance.map((a, i) => (
            <div key={i}>{a.student} - Present: {a.present}, Absent: {a.absent}</div>
          ))}
          {grades.map((g, i) => (
            <div key={i}>{g.student} - Grade: {g.grade}</div>
          ))}

          <h4>Attendance Graph</h4>
          <BarChart width={500} height={250} data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="present" fill="#2563eb" />
            <Bar dataKey="absent" fill="#ef4444" />
          </BarChart>
        </section>

        {/* Class Schedule */}
        <section style={styles.card}>
          <h2>Class Schedule</h2>
          {schedule.map((s, i) => (
            <div key={i}>{s.class} - {s.time}</div>
          ))}
        </section>

        {/* Transcripts / Certificates */}
        <section style={styles.card}>
          <h2>Transcripts / Certificates</h2>
          {transcripts.map((t, i) => (
            <div key={i} style={styles.row}>
              <span>{t.student} - {t.certificate}</span>
              {t.certificate === "Not generated" && (
                <button style={styles.button} onClick={() => generateTranscript(t.student)}>Generate</button>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

// Beautiful styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
    fontFamily: "Arial, sans-serif",
  },
  dashboard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "40px",
    width: "100%",
    maxWidth: "1000px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#1e40af",
    marginBottom: "30px",
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#f9fafb",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },
  fileInput: {
    marginBottom: "10px",
  },
};

export default AdminDashboard;
