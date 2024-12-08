import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

// CSS in JS
const styles = {
  container: {
    backgroundColor: '#f5f5dc', // Cream background color for the container
    color: 'black', // Change text color to black for better contrast
    padding: '150px ',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '50px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  box: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    flex: '1',
    margin: '10px',
    backgroundColor: '#ffffff', // White background for boxes for a light theme
    color: 'black', // Change text color to black for better contrast
  },
  icon: {
    marginRight: '10px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  socialIcon: {
    margin: '0 10px',
    fontSize: '2rem', // Increase size for better visibility
    color: 'black',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  socialIconHover: {
    color: '#4b8da2', // Hover color
  },
};

// Functional Component for Contact Us Page
const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <h2 style={styles.subtitle}>Student Sphere</h2>
      <div style={styles.row}>
        <div style={styles.box}>
          <h3>Reservations Office</h3>
          <p>
            <span style={styles.icon}>📍</span>
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>KL University, Vadeeswaram</a>
          </p>
          <p><span style={styles.icon}>📞</span>08645 - 350200</p>
          <p><span style={styles.icon}>📧</span>klu@kluniversity.in</p>
        </div>
        <div style={styles.box}>
          <h3>Office Hours</h3>
          <p>Monday to Friday<br />9:00 am to 6:00 pm</p>
          <p>Saturday<br />9:00 am to 12:00 noon</p>
        </div>
        <div style={styles.box}>
          <h3>Get Social</h3>
          <div style={styles.socialIcons}>
            <a
              href="https://facebook.com"
              style={styles.socialIcon}
              onMouseEnter={(e) => (e.target.style.color = styles.socialIconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.socialIcon.color)}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              style={styles.socialIcon}
              onMouseEnter={(e) => (e.target.style.color = styles.socialIconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.socialIcon.color)}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              style={styles.socialIcon}
              onMouseEnter={(e) => (e.target.style.color = styles.socialIconHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.socialIcon.color)}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
