import React from 'react';

const ContactPage = () => {
  return (
    <main className="content">
      <h1 className="page-title">Contact Us</h1>
      <div style={{ padding: '20px' }}>
        <p>We'd love to hear from you!</p>
        <br />
        <p><strong>Email:</strong> support@mobileshop.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Shopping Street, Mumbai, India</p>
        <br />
        <h3>Send us a message</h3>
        <form style={{ maxWidth: '500px', margin: '20px 0' }}>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
          <button type="submit" style={{ padding: '12px 30px', background: '#6a11cb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;