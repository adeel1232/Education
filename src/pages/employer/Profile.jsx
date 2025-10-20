import React, { useState } from "react";
import { FaUserCircle, FaLock, FaShieldAlt } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState("Adeel");
  const [lastName, setLastName] = useState("Ahmad");
  const [email, setEmail] = useState("adeelchand785@gmail.com");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [passwordModal, setPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
    // یہاں آپ API کال بھی کر سکتے ہیں
  };

  const handleChangePassword = () => {
    if (!newPassword) return alert("Enter a new password");
    alert("Password changed successfully!");
    setNewPassword("");
    setPasswordModal(false);
  };

  return (
    <div className="profile-page">
      <header className="header">
        <h1><FaUserCircle /> Profile Settings</h1>
        <p>Manage your personal information and account settings</p>
      </header>

      <section className="section">
        <h2>Edit Profile</h2>
        <div className="profile-picture">
          {profilePic ? <img src={profilePic} alt="Profile" /> : <FaUserCircle size={80} />}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <div className="form-grid">
          {/* Personal Information */}
          <div className="form-section">
            <h3>Personal Information</h3>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Phone Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          {/* Account Information */}
          <div className="form-section">
            <h3>Account Information</h3>
            <label>Password</label>
            <div className="password-field">
              <FaLock /> <span>Last changed 3 months ago</span>
              <button onClick={() => setPasswordModal(true)}>Change Password</button>
            </div>

            <label>Two-Factor Authentication</label>
            <div className="two-fa">
              <FaShieldAlt /> <span>Add an extra layer of security</span>
              <button onClick={() => alert("2FA enabled")}>Enable 2FA</button>
            </div>
          </div>
        </div>

        <button onClick={handleSaveProfile} className="save-btn">Save Profile</button>
      </section>

      {/* Password Modal */}
      {passwordModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleChangePassword} style={btnStyleGreen}>Save</button>
              <button onClick={() => setPasswordModal(false)} style={btnStyleRed}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex", justifyContent: "center", alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const btnStyleGreen = {
  padding: "8px 12px",
  background: "#4caf50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const btnStyleRed = {
  padding: "8px 12px",
  background: "#f44336",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Profile;
