import React from "react";
import { FaUserCircle, FaLock, FaShieldAlt } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <header className="header">
        <h1><FaUserCircle /> Profile Settings</h1>
        <p>Manage your personal information and account settings</p>
      </header>

      {/* Edit Profile */}
      <section className="section">
        <h2>Edit Profile</h2>
        <div className="profile-picture">
          <FaUserCircle size={80} />
          <p>adeelchand785@gmail.com</p>
        </div>

        <div className="form-grid">
          {/* Personal Information */}
          <div className="form-section">
            <h3>Personal Information</h3>
            <label>First Name</label>
            <input type="text" value="Employer" readOnly />
            <label>Last Name</label>
            <input type="text" value="Example" readOnly />
            <label>Email Address</label>
            <input type="email" value="employer@example.com" readOnly />
            <label>Phone Number</label>
            <input type="text" value="(555) 123-4567" readOnly />
            <label>Address</label>
            <input type="text" value="123 Main Street, City, State 12345" readOnly />
          </div>

          {/* Professional Information */}
          <div className="form-section">
            <h3>Professional Information</h3>
            <label>Position</label>
            <input type="text" value="Employee" readOnly />
            <label>Department</label>
            <input type="text" value="Training Department" readOnly />
            <label>Bio</label>
            <textarea readOnly>
              Professional trucking instructor with 10+ years of experience in CDL training and safety protocols.
            </textarea>

            {/* Account Information */}
            <h3>Account Information</h3>
            <label>Password</label>
            <div className="password-field">
              <FaLock /> <span>Last changed 3 months ago</span>
              <button>Change Password</button>
            </div>
            <label>Two-Factor Authentication</label>
            <div className="two-fa">
              <FaShieldAlt /> <span>Add an extra layer of security</span>
              <button>Enable 2FA</button>
            </div>
            <label>Account Status</label>
            <p>Active since January 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
