import React from 'react';
import './css/Sidebar.css';
import linkedinLogo from './img/LI-Logo.png';
import upworkLogo from './img/upwork.png';
import githubLogo from './img/GitHub.png';



const aboutMeScroll = () => {
	window.scroll({
		  top: 440,
		  behavior: 'smooth'
		});
}

const contactScroll = () => {
	window.scroll({
		  top: 1290,
		  behavior: 'smooth'
		});
}

const upScroll = () => {
	window.scroll({
		  top: 0,
		  behavior: 'smooth'
		});
}

function Sidebar() {
  return (
    <div className="sideBarClass">
    <ul id="linkList">
    <ul>
    <button id="arrowButton" onClick={upScroll}>Title</button>
    </ul>
    <ul>
    <button id="aboutmeButton" onClick={aboutMeScroll}><b>About me</b></button>
    </ul>
    <ul>
    <button id="contactButton" onClick={contactScroll}><b>Contact</b></button>
    </ul>
	<ul>
	<a href="https://nl.linkedin.com/in/max-koree-118971194" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="linkedIn" id="linkedinIMG"></img></a>
    </ul>
    <ul>
	<a href="https://www.upwork.com/freelancers/~01361471f78248a9b3" target="_blank" rel="noreferrer"><img src={upworkLogo} alt="upWork" id="upworkIMG"></img></a>
    </ul>
    <ul>
        <a href="https://github.com/MaxKoree" target="_blank" rel="noreferrer"><img src={githubLogo} alt="GitHub" id="githubIMG"></img></a>
    </ul>
    </ul>
    </div>
  );
}

export default Sidebar;
