import React from 'react';
import './works.css';
import Robot from '../../img/robot-proj.png';

const Work = () => (
  <div className="work-container">
    <h1 className="work-title">Our Projects</h1>
    <div className="projects-grid">
      <div className="project-card">
        <img 
          src={Robot}
          alt="Auto Navigate Robot" 
          className="project-image" 
        />
        <p className="project-title">Auto Navigate Robot</p>
      </div>
      <div className="project-card">
        <img 
          src="https://via.placeholder.com/600x400?text=STM32+Door+Lock" 
          alt="STM32 Door Lock" 
          className="project-image" 
        />
        <p className="project-title">STM32 Door Lock</p>
      </div>
      <div className="project-card">
        <img 
          src="https://via.placeholder.com/600x400?text=Auto-driving+Car" 
          alt="Auto-driving Car in Vietnam Traffic" 
          className="project-image" 
        />
        <p className="project-title">Auto-driving Car in Vietnam Traffic</p>
      </div>
      <div className="project-card">
        <img 
          src="https://via.placeholder.com/600x400?text=Project+4" 
          alt="Project 4" 
          className="project-image" 
        />
        <p className="project-title">Project 4</p>
      </div>
    </div>
  </div>
);

export default Work;
