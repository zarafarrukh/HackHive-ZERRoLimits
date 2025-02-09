import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/AboutPage.css"; // Import CSS
import Footer from "../pages/Footer"; // Import Footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  {
    name: "Zara Farrukh",
    github: "https://github.com/zarafarrukh",
    username: "zarafarrukh",
  },
  {
    name: "Rabia Chattha",
    github: "https://github.com/rabiachattha",
    username: "rabiachattha",
  },
  {
    name: "Ethan Janovitz",
    github: "https://github.com/ejanovitz",
    username: "ejanovitz",
  },
  {
    name: "Rithika Rushrendra",
    github: "https://github.com/rithika0812",
    username: "rithika0812",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Revivo</h1>
        <p>Revivo is an AI-powered app designed to help users find solutions for skin and hair concerns.</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>Using AI, we aim to provide personalized recommendations for a healthier future.</p>

        <h2>Meet the Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="github-link">
                @{member.username}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Go Home Link */}
      <div className="go-home">
        <Link to="/" className="go-home-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;