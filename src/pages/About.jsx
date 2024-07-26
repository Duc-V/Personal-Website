import React from 'react'
import "./About.css"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import download from "../assets/download.png"
import location from "../assets/location.png"
import resumePdf from '../assets/Duc-Resume.pdf'
const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Duc-Resume.pdf'; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='about'>
      <div className="about-content">
        <div className="intro">
          <h1>{`<Hello!/>`}</h1>
          <p className='location'>
            <img src={location} alt="Description of the icon" width={40} height={40} />
            <p> Melbourne, AU </p>
          </p>
          <p className='text'>My name is Duc. I am a developer. 
            I have experience working remotely for agencies and startups, 
            collaborating with talented individuals to create digital products.
             Most of my work is open source and publicly available on GitHub. 
             If you like what you see, feel free to reach out to me via Linked In or Email.
             </p>
          </div>
          <div className='resume' onClick={handleDownload}>
            Download Resume
            <img src={download} className={'download-icon'} alt="Description of the icon" width={25} height={25} />
          </div>
          <div className="reach-out">
            <a href="mailto:ducvupprrt@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Description of the icon" className="icon" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/in/ducv/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Description of the icon" className="icon" width={40} height={40} />
            </a>
            <a href="https://github.com/Duc-V" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Description of the icon" className="icon" width={40} height={40} />
            </a>
          </div>

      </div>

      <div className="skillset">
        <div className="slide-wrapper">
          <div className="slide slide-top">
            <span>C++</span>
            <span>Python</span>
            <span>Javascript</span>
            <span>Java</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>C#</span>
          </div>
          <div className="slide slide-top">
            <span>C++</span>
            <span>Python</span>
            <span>Javascript</span>
            <span>Java</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>C#</span>
          </div>
        </div>
        <div className="slide-wrapper">
          <div className="slide slide-bot">
            <span>React.js</span>
            <span>.NET</span>
            <span>Express.js</span>
            <span>Git</span>
            <span>OOP</span>
            <span>Node.js</span>
          </div>
          <div className="slide slide-bot">
            <span>React.js</span>
            <span>.NET</span>
            <span>Express.js</span>
            <span>Git</span>
            <span>OOP</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About