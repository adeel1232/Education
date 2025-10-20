import React from "react";

const Support = () => {
  const tickets = [
    { title: "Cannot access course materials", priority: "high", id: "TKT-2024-001", created: "2 hours ago", updated: "1 hour ago", status: "Open" },
    { title: "Payment confirmation not received", priority: "medium", id: "TKT-2024-002", created: "1 day ago", updated: "5 hours ago", status: "In Progress" },
    { title: "Schedule conflict for next week", priority: "low", id: "TKT-2024-003", created: "3 days ago", updated: "2 days ago", status: "Resolved" },
    { title: "Document upload error", priority: "medium", id: "TKT-2024-004", created: "5 days ago", updated: "4 days ago", status: "Closed" },
  ];

  const faqs = [
    { question: "How do I access my course materials?", answer: "You can access all course materials from the 'My Courses' page. Click on any course card and then select 'Materials' to view videos, PDFs, and other resources." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, and ACH transfers. You can also apply for financing through our third-party partners." },
    { question: "How do I upload required documents?", answer: "Navigate to the 'Documents' page from the sidebar. Click on any required document card and follow the upload instructions." },
    { question: "Can I reschedule a class?", answer: "Yes, please contact your instructor or the admin office at least 24 hours in advance to reschedule a class." },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Support & Help</h1>
      <p>Get help with your questions and issues</p>

      {/* Tickets Section */}
      <section style={{ marginTop: 20 }}>
        <h2>My Support Tickets</h2>
        {tickets.map((ticket, idx) => (
          <div key={idx} style={{ padding: 12, marginBottom: 10, borderRadius: 8, border: "1px solid #ddd", backgroundColor: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong>{ticket.title}</strong>
              <p style={{ fontSize: 12, color: "#555", margin: "2px 0" }}>
                Priority: {ticket.priority} • {ticket.id} • Created: {ticket.created} • Updated: {ticket.updated}
              </p>
            </div>
            <span style={{
              padding: "4px 8px",
              borderRadius: 6,
              color: "#fff",
              backgroundColor:
                ticket.status === "Open" ? "#2563eb" :
                ticket.status === "In Progress" ? "#f59e0b" :
                ticket.status === "Resolved" ? "#10b981" :
                "#6b7280",
              fontSize: 12,
            }}>
              {ticket.status}
            </span>
          </div>
        ))}
      </section>

      {/* FAQs */}
      <section style={{ marginTop: 40 }}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: 15, backgroundColor: "#fff", padding: 12, borderRadius: 8, border: "1px solid #ddd" }}>
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>{faq.question}</p>
            <p style={{ margin: 0, fontSize: 14, color: "#555" }}>{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Contact Info */}
      <section style={{ marginTop: 40 }}>
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> support@thetruckingvault.com</p>
        <p><strong>Office Hours:</strong><br/>
          Monday - Friday: 8:00 AM - 6:00 PM<br/>
          Saturday: 9:00 AM - 2:00 PM
        </p>
      </section>
    </div>
  );
};

export default Support;
