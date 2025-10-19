import React, { useState } from "react";
import { FaEnvelope, FaUser, FaFilter, FaPlus } from "react-icons/fa";
import "./Messages.css";

const Messages = () => {
  const [search, setSearch] = useState("");

  const stats = [
    { icon: <FaPlus />, label: "New Applications", count: 5, note: "Job applications" },
    { icon: <FaUser />, label: "Training Updates", count: 3, note: "From training staff" },
    { icon: <FaEnvelope />, label: "Admin Messages", count: 2, note: "From administration" },
    { icon: <FaEnvelope />, label: "Total Messages", count: 28, note: "All conversations" },
  ];

  const messages = [
    {
      initials: "JS",
      name: "John Smith",
      role: "Student",
      type: "job application",
      time: "1 hour ago",
      subject: "Job Application - CDL Driver Position",
      body: "Hi, I'm interested in the CDL Driver position you posted. I have my Class A license and 2 years of experience...",
    },
    {
      initials: "SW",
      name: "Sarah Williams",
      role: "Admin",
      type: "admin notification",
      time: "3 hours ago",
      subject: "Training Program Update",
      body: "Your company's training program has been updated. New safety protocols are now available for your drivers...",
    },
    {
      initials: "MJ",
      name: "Mike Johnson",
      role: "Instructor",
      type: "performance report",
      time: "1 day ago",
      subject: "Driver Performance Report",
      body: "Here's the monthly performance report for your drivers who completed our training program...",
    },
    {
      initials: "ED",
      name: "Emily Davis",
      role: "Student",
      type: "certificate request",
      time: "2 days ago",
      subject: "Training Completion Certificate",
      body: "I've completed the CDL training program. When will I receive my certificate? I need it for my new job...",
    },
  ];

  const filteredMessages = messages.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="messages-page">
      <header className="header">
        <h1><FaEnvelope /> Messages</h1>
        <p>Communicate with candidates, training staff, and administration</p>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.count}</h3>
            <p>{s.label}</p>
            <span>{s.note}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="search-bar">
        <FaEnvelope />
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="filter-btn">
          <FaFilter /> Filter
        </button>
      </div>

      {/* Message List */}
      <div className="message-list">
        {filteredMessages.map((m, i) => (
          <div key={i} className="message-card">
            <div className="message-header">
              <div className="initials">{m.initials}</div>
              <div className="info">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                <span className="type">{m.type}</span>
              </div>
              <span className="time">{m.time}</span>
            </div>
            <div className="message-body">
              <strong>{m.subject}</strong>
              <p>{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
