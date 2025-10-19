import React, { useState } from "react";
import { FaUsers, FaUserCheck, FaUserClock, FaBuilding, FaSearch, FaFilter, FaEye, FaPlus } from "react-icons/fa";

export default function EmployeeManagement() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([
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
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    status: "Active",
    email: "",
    phone: "",
    department: "",
    hired: "",
    salary: "",
    manager: "",
  });

  const [viewDetails, setViewDetails] = useState(null);

  const handleAddEmployee = () => {
    const initials = newEmployee.name.split(" ").map(n => n[0].toUpperCase()).join("");
    setEmployees([...employees, { ...newEmployee, initials }]);
    setNewEmployee({ name: "", role: "", status: "Active", email: "", phone: "", department: "", hired: "", salary: "", manager: "" });
    setShowAddForm(false);
  };

  const filteredEmployees = employees.filter(
    e =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1>Employee Management</h1>
          <p>Manage your workforce and employee information</p>
        </div>
        <button onClick={() => setShowAddForm(true)} style={btnStyle("#4caf50")}>
          <FaPlus /> Add Employee
        </button>
      </header>

      {/* Stats */}
      <section style={{ display: "flex", gap: "20px", margin: "20px 0", flexWrap: "wrap" }}>
        <StatCard icon={<FaUsers />} label="Total Employees" value={employees.length} subtitle="All departments" />
        <StatCard icon={<FaUserCheck />} label="Active Employees" value={employees.filter(e => e.status === "Active").length} subtitle="Currently working" />
        <StatCard icon={<FaUserClock />} label="On Leave" value={employees.filter(e => e.status !== "Active").length} subtitle="Temporary absence" />
        <StatCard icon={<FaBuilding />} label="Departments" value={[...new Set(employees.map(e => e.department))].length} subtitle="Active departments" />
      </section>

      {/* Search */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
        <FaSearch />
        <input type="text" placeholder="Search employees..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: "5px", flex: 1 }} />
        <button style={btnStyle("#ff9800")}><FaFilter /> Filter</button>
      </div>

      {/* Employee List */}
      <div>
        {filteredEmployees.map((emp, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", background: "#f5f5f5", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "40px", height: "40px", background: "#2196f3", color: "#fff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>{emp.initials}</div>
              <div>
                <h4>{emp.name}</h4>
                <p>{emp.role}</p>
                <span style={{ color: emp.status === "Active" ? "#4caf50" : "#ff9800", fontWeight: "bold" }}>{emp.status}</span>
              </div>
            </div>
            <button onClick={() => setViewDetails(emp)} style={btnStyle("#2196f3")}><FaEye /> View</button>
          </div>
        ))}
      </div>

      {/* Add Employee Modal */}
      {showAddForm && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Add Employee</h3>
            <input placeholder="Full Name" value={newEmployee.name} onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })} />
            <input placeholder="Role" value={newEmployee.role} onChange={e => setNewEmployee({ ...newEmployee, role: e.target.value })} />
            <input placeholder="Status" value={newEmployee.status} onChange={e => setNewEmployee({ ...newEmployee, status: e.target.value })} />
            <input placeholder="Email" value={newEmployee.email} onChange={e => setNewEmployee({ ...newEmployee, email: e.target.value })} />
            <input placeholder="Phone" value={newEmployee.phone} onChange={e => setNewEmployee({ ...newEmployee, phone: e.target.value })} />
            <input placeholder="Department" value={newEmployee.department} onChange={e => setNewEmployee({ ...newEmployee, department: e.target.value })} />
            <input placeholder="Hired Date" value={newEmployee.hired} onChange={e => setNewEmployee({ ...newEmployee, hired: e.target.value })} />
            <input placeholder="Salary" value={newEmployee.salary} onChange={e => setNewEmployee({ ...newEmployee, salary: e.target.value })} />
            <input placeholder="Manager" value={newEmployee.manager} onChange={e => setNewEmployee({ ...newEmployee, manager: e.target.value })} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleAddEmployee} style={btnStyle("#4caf50")}>Add</button>
              <button onClick={() => setShowAddForm(false)} style={btnStyle("#f44336")}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewDetails && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Employee Details</h3>
            {Object.entries(viewDetails).map(([key, value]) => (
              key !== "initials" && <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
            ))}
            <button onClick={() => setViewDetails(null)} style={btnStyle("#f44336")}>Close</button>
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

const btnStyle = color => ({
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  background: color,
  color: "#fff",
  cursor: "pointer",
});

const modalOverlay = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
};

const modalContent = {
  background: "#fff", padding: "20px", borderRadius: "10px", width: "300px", display: "flex", flexDirection: "column", gap: "10px"
};
