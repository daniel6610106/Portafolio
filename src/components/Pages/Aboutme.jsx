import React from "react";

export const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-avatar-section">
        <img
          src="/src/assets/portafolio.jpg"
          alt="Profile"
          className="aboutme-avatar"
        />
        <h1>About Me</h1>
      </div>
      <div className="aboutme-info">
        <p>
          Welcome to my portfolio! Software Analysis and Development student
          with experience in front- and back-end development using JavaScript,
          TypeScript, Java, React, and Node.js. I work with MySQL databases and
          tools like Git and GitHub. I stand out for my interest in continuous
          learning, problem-solving, and teamwork.
        </p>
        <h2>Projects</h2>
        <ul className="aboutme-projects">
          <li>
            <strong>Portfolio Website:</strong> Personal website built with
            React and Vite.
          </li>
          <li>
            <strong>Backend</strong> A simple marketplace built with Node.js
          </li>
        </ul>
        <p>
          Email:{" "}
          <a href="mailto:daniel6610106@gmail.com">daniel6610106@gmail.com</a>
        </p>
        <p>
          Thank you for visiting my portfolio. I look forward to connecting with
          you!
        </p>
      </div>
    </div>
  );
};
