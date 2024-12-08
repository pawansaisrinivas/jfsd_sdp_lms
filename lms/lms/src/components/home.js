import React from 'react';
import logo1 from '../assets/logo1.png'; // Import logo

const Home = () => {
  // Hover handler function
  const handleHover = (e, type, isHover) => {
    const target = e.target;
    const hoverStyles = {
      signup: {
        backgroundColor: isHover ? '#45a049' : '#4CAF50',
        transform: isHover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHover
          ? '0 6px 12px rgba(0, 0, 0, 0.4)'
          : '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      signin: {
        backgroundColor: isHover ? '#1976D2' : '#2196F3',
        transform: isHover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHover
          ? '0 6px 12px rgba(0, 0, 0, 0.4)'
          : '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    };

    Object.assign(target.style, hoverStyles[type]);
  };

  return (
    <div style={styles.homeContainer}>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Boost your learning with ease</h1>
        <p style={styles.subHeading}>
          Come and Work Collaboratively with your peers!!
        </p>
        <div style={styles.buttonContainer}>
          <button
            style={styles.signupBtn}
            onMouseOver={(e) => handleHover(e, 'signup', true)}
            onMouseOut={(e) => handleHover(e, 'signup', false)}
            onClick={() => (window.location.href = '/signup')}
          >
            Sign Up
          </button>
          <button
            style={styles.signinBtn}
            onMouseOver={(e) => handleHover(e, 'signin', true)}
            onMouseOut={(e) => handleHover(e, 'signin', false)}
            onClick={() => (window.location.href = '/signin')}
          >
            Sign In
          </button>
        </div>
      </div>
      <div style={styles.illustrationContainer}>
        <img src={logo1} alt="Illustration" style={styles.illustration} />
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
  },
  textContainer: {
    flex: 1,
    padding: '20px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '3.5em',
    marginBottom: '20px',
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#333',
  },
  subHeading: {
    fontSize: '1.5em',
    marginBottom: '40px',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  signupBtn: {
    padding: '15px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  signinBtn: {
    padding: '15px 30px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  illustrationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    maxWidth: '80%',
    height: 'auto',
  },
};

export default Home;
