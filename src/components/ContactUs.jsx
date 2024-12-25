import React from "react";
import umnPcLogo from "../assets/Logo.png"; // Mengimpor gambar
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <>
      <section id="contact" className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </a>
            <a href="mailto:example@example.com" className="icon email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section logo">
          <h3>Our Logo</h3>
          <img src={umnPcLogo} alt="UMN PC Logo" className="footer-logo" />
        </div>

        <div className="footer-section gmaps">
          <h3>Find Us on Google Maps</h3>
          <a
            href="https://goo.gl/maps/JbXbrLV6xWZL1uLF6"
            target="_blank"
            rel="noopener noreferrer"
            className="gmaps-link"
          >
            Open Google Maps
          </a>
          <div className="gmaps-iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.008489166223!2d106.61516214999999!3d-6.2574259999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb820aaa20e7%3A0x6a6b4e115520256c!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sid!2sid!4v1681112377446!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style jsx>{`
        #contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: white;
          color: #00d4ff;
          padding: 50px;
          box-sizing: border-box;
        }

        h2 {
          font-family: "Orbitron", sans-serif;
          font-size: 3em;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5),
            0px 2px 10px rgba(255, 255, 255, 0.2);
        }

        .contact-form {
          background: rgba(0, 0, 0, 0.6);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          width: 100%;
          max-width: 600px;
        }

        .contact-form:hover {
          transform: scale(1.05);
        }

        .form-group {
          margin-bottom: 20px;
        }

        input,
        textarea {
          width: 100%;
          padding: 15px;
          margin-top: 10px;
          border-radius: 10px;
          background: #333;
          color: #fff;
          font-size: 1em;
          border: 1px solid #ddd;
          transition: background 0.3s ease;
        }

        input:focus,
        textarea:focus {
          background: #f50057;
          outline: none;
        }

        .submit-button {
          padding: 15px 25px;
          background: #ff4081;
          border: none;
          color: #fff;
          font-size: 1.2em;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
        }

        .submit-button:hover {
          background: #e040fb;
        }

        footer {
          background-color: rgba(34, 45, 65, 0.9);
          color: #fff;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: center;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-section h3 {
          font-size: 1.5em;
          margin-bottom: 15px;
        }

        .footer-logo {
          width: 150px;
          height: auto;
        }

        .gmaps-link {
          color: #fff;
          font-size: 1.1em;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .gmaps-link:hover {
          color: #ff4081;
        }

        .icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .icon {
          font-size: 2.5em;
          color: #fff;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.2);
          color: #f50057;
        }

        .icon.twitter:hover {
          color: #1da1f2;
        }

        .icon.instagram:hover {
          color: #e1306c;
        }

        .icon.email:hover {
          color: #d44638;
        }

        .gmaps-iframe-container {
          margin-top: 15px;
          width: 100%;
          max-width: 600px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-logo {
            width: 120px;
          }
        }
      `}</style>
    </>
  );
}

export default ContactUs;
