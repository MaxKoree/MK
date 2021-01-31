import React from 'react';
import './css/Sidebar.css';
import linkedinLogo from './img/LI-Logo.png';
import upworkLogo from './img/upwork.png';
import githubLogo from './img/GitHub.png';
import linkedinIcon from './img/linkedin.png';
import upworkIcon from './img/upwork-icon.png';
import githubCat from './img/github-icon.png';

const aboutMeScroll = () => {
	window.scroll({
		  top: 710,
		  behavior: 'smooth'
		});
}

const contactScroll = () => {
	window.scroll({
		  top: 1690,
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
		      height: '',
		      width: '',
		      tooSmall: false,
		    }
		    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		  }
	  
	  
	  componentDidMount() {
			  this.updateWindowDimensions();
			  window.addEventListener('resize', this.updateWindowDimensions);
			 }
			 
			componentWillUnmount() {
				window.removeEventListener('resize', this.updateWindowDimensions);
			}

			updateWindowDimensions() {
				this.setState({ width: window.innerWidth, height: window.innerHeight });
				
			}
			
			checkHeight() { 
				 if(this.state.height < 600) {
					return true;
				 }	else return false;
			}
			
			checkWidth() { 
				 if(this.state.width < 1420) {
					return true;
				 }	else return false;
			}
			
render() {
	const tooSmall = this.checkHeight();
	const tooSmall2 = this.checkWidth();
	console.log("w: " + this.state.width);
	console.log("h: " + this.state.height);
    return (
    		<div className="sideBarClass">
    	    {tooSmall || tooSmall2 ? (
    	    			    	    <ul id="smallLinkList">
    	    			    	    <script>alert("1")</script>
    	    	    	    	    <ul>
    	    	    	    	    <button id="arrowButton2" onClick={upScroll}>&#8593;</button>
    	    	    	    	    </ul>
    	    	    	    	    <ul>
    	    	    	    	    <button id="aboutmeButton2" onClick={aboutMeScroll}><b>Me</b></button>
    	    	    	    	    </ul>
    	    	    	    	    <ul>
    	    	    	    	    <button id="contactButton2" onClick={contactScroll}><b>&#64;</b></button>
    	    	    	    	    </ul>
    	    	    	    		<ul>
    	    	    	    		<a href="https://nl.linkedin.com/in/max-koree-118971194" target="_blank" rel="noreferrer">
    	    	    	    		<img src={linkedinIcon} alt="linkedIn" id="linkedinIcon" />
    	    	    	    		</a>
    	    	    	    	    </ul>
    	    	    	    	    <ul>
    	    	    	    		<a href="https://www.upwork.com/freelancers/~01361471f78248a9b3" target="_blank" rel="noreferrer">
    	    	    	    		<img src={upworkIcon} alt="upWork" id="upworkIcon" />
    	    	    	    		</a>
    	    	    	    	    </ul>
    	    	    	    	    <ul>
    	    	    	    	    <a href="https://github.com/MaxKoree" target="_blank" rel="noreferrer">
    	    	    	    	    <img src={githubCat} alt="GitHub" id="githubCat" /> 
    	    	    	    	    </a>
    	    	    	    	    </ul>  
    	    	    	    	    </ul>
    			      ) : (
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
    			  )}
    	    </div>
    );
}
}
export default Sidebar;
