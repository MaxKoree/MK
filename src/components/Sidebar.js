import React from 'react';
import './css/Sidebar.scss';
import linkedinIcon from './img/linkedin.png';
import upworkIcon from './img/upwork-icon.png';
import githubCat from './img/github-icon.png';
import Tilt from 'react-tilt';

const aboutMeScroll = () => {
	window.scroll({
		  top: 990,
		  behavior: 'smooth'
		});
}

const contactScroll = () => {
	window.scroll({
		  top: 2436,
		  behavior: 'smooth'
		});
}

const upScroll = () => {
	window.scroll({
		  top: 0,
		  behavior: 'smooth'
		});
}

class Sidebar extends React.Component {
	  constructor(props) {
			super(props);
		    this.state = {

		    }
		  }

render() {
    return (
    		<div className="sideBarClass">
						
						<ul id="linkList">
					  <ul>
					 <Tilt ref={this.wrapper}>
 					<button id="arrowButton" ref={this.wrapper} onClick={upScroll}><b>Title{this.props.children}</b></button>
					</Tilt>
					  </ul>
					  <ul>
					  <Tilt  ref={this.wrapper}>
 					<button id="aboutmeButton" ref={this.wrapper} onClick={aboutMeScroll}><b>About me{this.props.children}</b></button>
					</Tilt>
					  </ul>
					  <ul>
					  <Tilt  className="tilt" >
 					<button id="contactButton" ref={this.wrapper} onClick={contactScroll} ><b>Contact{this.props.children}</b></button>
					</Tilt>
					  </ul>
					  </ul>
					  <ul id="linkL">
						  <ul>
						  <a href="https://github.com/MaxKoree" target="_blank" rel="noreferrer">
							  <img src={githubCat} alt="GitHub" id="githubCat" /> 
							  </a>
							  </ul>
							  <ul>
							  <a href="https://www.upwork.com/freelancers/~01361471f78248a9b3?viewMode=1" target="_blank" rel="noreferrer">
							  <img src={upworkIcon} alt="upWork" id="upworkIcon" />
							  </a>
							  </ul>
							  <ul>
							  <a href="https://nl.linkedin.com/in/max-koree-118971194" target="_blank" rel="noreferrer">
							  <img src={linkedinIcon} alt="linkedIn" id="linkedinIcon" />
							  </a>
							  </ul>  
						  </ul>
    	    </div>
    );
}
}
export default Sidebar;