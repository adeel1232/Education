import React from "react";
import { FaUsers, FaBriefcase, FaFileAlt, FaDollarSign, FaChartLine, FaEdit, FaEye } from "react-icons/fa";
import "./DashboardIn.css";

function DashboardIn() {
  return (
    <div className="employer-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome, <span>Adeel Ahmad Transport!</span></h1>
        <p>Track your employees' training progress and manage job postings</p>
      </header>

      {/* Stats Overview */}
      <section className="stats-grid">
        <div className="stat-card">
          <FaUsers className="icon" />
          <h3>Employees in Training</h3>
          <p className="value">12</p>
          <span className="subtitle">Active participants</span>
        </div>

        <div className="stat-card">
          <FaBriefcase className="icon" />
          <h3>Active Job Postings</h3>
          <p className="value">5</p>
          <span className="subtitle">Open positions</span>
        </div>

        <div className="stat-card">
          <FaFileAlt className="icon" />
          <h3>Total Applications</h3>
          <p className="value">48</p>
          <span className="subtitle">↑ 23% this month</span>
        </div>

        <div className="stat-card">
          <FaDollarSign className="icon" />
          <h3>Training Investment</h3>
          <p className="value">$45K</p>
          <span className="subtitle">This quarter</span>
        </div>
      </section>

      {/* Employees in Training */}
      <section className="training-section">
        <h2>Employees in Training</h2>
        <div className="training-grid">
          {[
            { name: "Robert Johnson", course: "Class A CDL", progress: 75 },
            { name: "Lisa Anderson", course: "Hazmat Certification", progress: 90 },
            { name: "James Wilson", course: "Class A CDL", progress: 45 },
          ].map((emp, i) => (
            <div className="employee-card" key={i}>
              <h3>{emp.name}</h3>
              <p>{emp.course}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${emp.progress}%` }}></div>
              </div>
              <span>{emp.progress}% Complete</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Applications */}
      <section className="applications-section">
        <div className="section-header">
          <h2>Recent Applications</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="applications-list">
          {[
            { name: "Mark Thompson", role: "Long Haul Driver", time: "2 hours ago" },
            { name: "Jennifer Lee", role: "Regional Driver", time: "5 hours ago" },
            { name: "David Martinez", role: "Local Delivery Driver", time: "1 day ago" },
          ].map((app, i) => (
            <div className="application-card" key={i}>
              <div>
                <h4>{app.name}</h4>
                <p>{app.role}</p>
                <small>{app.time}</small>
              </div>
              <button className="review-btn">Review</button>
            </div>
          ))}
        </div>
      </section>

      {/* Active Job Postings */}
      <section className="job-section">
        <div className="section-header">
          <h2>Active Job Postings</h2>
          <button className="create-btn">+ Create New Posting</button>
        </div>
        <div className="job-list">
          {[
            { title: "Class A CDL Long Haul Driver", salary: "$70,000 - $85,000", apps: 18, posted: "3 days ago" },
            { title: "Regional CDL Driver", salary: "$60,000 - $70,000", apps: 12, posted: "1 week ago" },
            { title: "Local Delivery Driver", salary: "$50,000 - $60,000", apps: 8, posted: "2 weeks ago" },
          ].map((job, i) => (
            <div className="job-card" key={i}>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.salary}</p>
                <small>{job.apps} applications • Posted {job.posted}</small>
              </div>
              <div className="job-actions">
                <button><FaEdit /> Edit</button>
                <button><FaEye /> View Applicants</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardIn;
