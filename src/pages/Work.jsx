import React from 'react';
import "./Work.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const Work = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='wrapper'>
      <div className="container">
        <div className='project' onClick={() => handleRedirect("https://duc-v.github.io/Pokemon-Dex/")}>
          <div className="name">Pokemon Dex</div>
          <img src={project1} alt="project1" />
        </div>
        <div className='project' onClick={() => handleRedirect("https://duc-v.github.io/Weather-Dashboard/")}>
          <div className="name">Weather Dashboard</div>
          <img src={project2} alt="project2" />
        </div>
        <div className='project' onClick={() => handleRedirect("https://github.com/Duc-V/Pathfinding-Algorithms-Visualizer")}>
          <div className="name">Algorithms Visualizer</div>
          <img src={project3} alt="project3" />
        </div>
        <div className='project' onClick={() => handleRedirect("https://duc-v.github.io/Movie-Web-Application/")}>
          <div className="name">Movie Website</div>
          <img src={project4} alt="project4" />
        </div>
      </div>
    </div>
  );
}

export default Work;
