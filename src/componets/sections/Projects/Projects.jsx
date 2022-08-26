import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects-route">
      <div className=" projects">
        <div className="projects-tag">
          <h1>Projects</h1>
        </div>
        <div className="projects-container">
          <div className="project-card">
            <h3>Speech Recognition through API</h3>
            <p>Made using HTML,CSS,JS</p>
            <a
              target="_blank"
              href="https://github.com/sathish-nalladevagari/3-1-project-speech-recognition-basic-webpage"
              className="link"
            >
              Link
            </a>
          </div>
          <div className="project-card">
            <h3>Virtual Mouse</h3>
            <p>Made using Python,OpenCV</p>
            <a
              target="_blank"
              href="https://github.com/sathish-nalladevagari"
              className="link"
            >
              Link
            </a>
          </div>
          <div className="project-card">
            <h3>Couner</h3>
            <p>Made using React</p>
            <a
              target="_blank"
              href="https://sathish-nalladevagari.github.io/react-counter/"
              className="link"
            >
              Link
            </a>
          </div>
          <div className="project-card">
            <h3>Drum Kit</h3>
            <p>Made Using JS</p>
            <a
              target="_blank"
              href="https://sathish-nalladevagari.github.io/Drum-kit/"
              className="link"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
