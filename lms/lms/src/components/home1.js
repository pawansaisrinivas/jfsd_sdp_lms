import React from 'react';

export default function Home1() {
  return (
    <div>
      <style>{`
        /* Global Styling */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        .home-container {
          text-align: center;
        }

        /* Hero Section */
        .hero-section {
          background-color: #a2794b;
          color: white;
          padding: 60px 20px;
          margin-top: 80px; /* Adjust this value to move the hero section down */
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 10px;
        }

        .cta-button {
          background-color: transparent;
          color: white;
          padding: 15px 30px;
          font-size: 1.2em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: transparent;
        }

        /* Features Section */
        .features-section {
          display: flex;
          justify-content: center;
          padding: 50px 0;
        }

        .feature-box {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 0 20px;
          width: 250px;
        }

        .feature-box h3 {
          color: #a2794b; /* Updated heading color */
          font-size: 1.5em;
          margin-bottom: 15px;
        }

        .feature-box p {
          font-size: 1em;
          color: #333;
        }

        /* Footer Section */
        .footer-section {
          background-color: #333;
          color: white;
          padding: 20px;
          font-size: 0.9em;
        }
      `}</style>

<div className="home-container">
        {/* Hero Section */}
        <header className="hero-section">
          <h1>Collaborate and Review with Ease</h1>
          <p>A comprehensive platform to peer review, share knowledge, and grow together.</p>
          <button className="cta-button">Get Started</button>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-box">
            <h3>Streamlined Peer Reviews</h3>
            <p>Easily review and provide feedback on your peers' work in real time.</p>
          </div>
          <div className="feature-box">
            <h3>Collaborative Projects</h3>
            <p>Engage in group discussions and projects for a collective learning experience.</p>
          </div>
          <div className="feature-box">
            <h3>Knowledge Sharing</h3>
            <p>Share your expertise and insights with others to foster a supportive community.</p>
          </div>
          <div className="feature-box">
            <h3>Comprehensive Analytics</h3>
            <p>Track your progress and contributions to continuously improve.</p>
          </div>
        
        </section>
      </div>
    </div>
  );
}
