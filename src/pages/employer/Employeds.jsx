import React, { useState } from "react";
import { FaUsers, FaUserCheck, FaUserClock, FaBuilding, FaSearch, FaFilter, FaEye } from "react-icons/fa";
import "./EmployeeManagement.css";

function EmployeeManagement() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      initials: "JS",
      name: "John Smith",
      role: "CDL Driver",
      status: "Active",
      email: "john.smith@company.com",
      phone: "(555) 123-4567",
      department: "Transportation",
      hired: "Jan 15, 2023",
      salary: "$65,000",
      manager: "Sarah Johnson",
    },
    {
      initials: "ED",
      name: "Emily Davis",
      role: "Fleet Manager",
      status: "Active",
      email: "emily.davis@company.com",
      phone: "(555) 234-5678",
      department: "Operations",
      hired: "Mar 10, 2022",
      salary: "$75,000",
      manager: "Mike Brown",
    },
    {
      initials: "MB",
      name: "Michael Brown",
      role: "Safety Coordinator",
      status: "On Leave",
      email: "michael.brown@company.com",
      phone: "(555) 345-6789",
      department: "Safety",
      hired: "Jun 20, 2023",
      salary: "$58,000",
      manager: "Lisa Garcia",
    },
    {
      initials: "SW",
      name: "Sarah Wilson",
      role: "HR Specialist",
      status: "Active",
      email: "sarah.wilson@company.com",
      phone: "(555) 456-7890",
      department: "Human Resources",
      hired: "Sep 5, 2023",
      salary: "$55,000",
      manager: "David Lee",
    },
  ];

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-management">
      {/* Header */}
      <header className="header">
        <h1>Employee Management</h1>
        <p>Manage your workforce and employee information</p>
        <button className="add-btn">+ Add Employee</button>
      </header>

      {/* Stats */}
      <section className="stats-grid">
        <div className="stat-card">
          <FaUsers className="icon" />
          <h3>Total Employees</h3>
          <p className="value">124</p>
          <span>All departments</span>
        </div>

        <div className="stat-card">
          <FaUserCheck className="icon" />
          <h3>Active Employees</h3>
          <p className="value">118</p>
          <span>Currently working</span>
        </div>

        <div className="stat-card">
          <FaUserClock className="icon" />
          <h3>On Leave</h3>
          <p className="value">6</p>
          <span>Temporary absence</span>
        </div>

        <div className="stat-card">
          <FaBuilding className="icon" />
          <h3>Departments</h3>
          <p className="value">8</p>
          <span>Active departments</span>
        </div>
      </section>

      {/* Directory */}
      <section className="directory-section">
        <div className="directory-header">
          <h2>Employee Directory</h2>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="filter-btn">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <div className="employee-list">
          {filteredEmployees.map((emp, i) => (
            <div
              key={i}
              className={`employee-card ${emp.status === "On Leave" ? "inactive" : ""}`}
            >
              <div className="employee-left">
                <div className="avatar">{emp.initials}</div>
                <div>
                  <h3>{emp.name}</h3>
                  <p>{emp.role}</p>
                  <span className={`status ${emp.status === "Active" ? "active" : "leave"}`}>
                    {emp.status}
                  </span>
                </div>
              </div>

              <div className="employee-right">
                <p><strong>Email:</strong> {emp.email}</p>
                <p><strong>Phone:</strong> {emp.phone}</p>
                <p><strong>Department:</strong> {emp.department}</p>
                <p><strong>Hired:</strong> {emp.hired}</p>
                <p><strong>Salary:</strong> {emp.salary}</p>
                <p><strong>Manager:</strong> {emp.manager}</p>
              </div>

              <div className="view-btn">
                <FaEye /> View
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EmployeeManagement;
