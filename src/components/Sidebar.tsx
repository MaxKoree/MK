import React from 'react';
import linkedinIcon from './img/icons/linkedin-brands.svg';
import upworkIcon from './img/upwork-icon.png';
import githubCat from './img/icons/github-brands.svg';
//import Tilt from 'react-tilt';


const upScroll = () => {
	window.scroll({
		  top: 0,
		  behavior: 'smooth'
		});
}


const aboutMeScroll = () => {
	window.scroll({
		  top: 958,
		  behavior: 'smooth'
		});
}

const skillScroll = () => {
	window.scroll({
		  top: 1918,
		  behavior: 'smooth'
		});
}

const contactScroll = () => {
	window.scroll({
		  top: 2880,
		  behavior: 'smooth'
		});
}


interface SideBarState {
	theposition: number,
}


export default class Sidebar extends React.Component<{}, SideBarState> {


	constructor(props: {}) {	
		super(props);

		this.state = {
			theposition: 0,
		}

		window.scrollTo(0, 0);
	}
	

		
	componentDidMount() {
		// fetch('http://localhost:3690').then(response => response.json());
		window.addEventListener('scroll', this.listenToScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll);
	}



	listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = winScroll / height;

		let state: SideBarState = this.state;
		state.theposition = scrolled * 100;
		this.setState(state);
	}

	

	checkPortfolioHeight = () => {
		if(this.state.theposition < 18) {
			return true;
		} else return false;
	}

	checkAboutMeHeight = () => {
		if(this.state.theposition >= 18 && this.state.theposition < 55) {
			return true;
		} else return false;
	}

	checkSkillsHeight = () => {
		if(this.state.theposition >= 55 && this.state.theposition < 90) {
			return true;
		} else return false;
	}

	checkContactHeight = () => {
		if(this.state.theposition >= 90) {
			return true;
		} else return false;
	}

	render() {

		return (
			<div className="side-bar">
							
				<div className="side-bar-buttons">
					{this.checkPortfolioHeight() && <button className="side-bar-buttons-hover" onClick={upScroll}><b>Portfolio</b></button>}
					{!this.checkPortfolioHeight() && <button onClick={upScroll}><b>Portfolio</b></button>}
					{this.checkAboutMeHeight() && <button className="side-bar-buttons-hover" onClick={aboutMeScroll}><b>About me</b></button>}
					{!this.checkAboutMeHeight() && <button onClick={aboutMeScroll}><b>About me</b></button>}		
					{this.checkSkillsHeight() && <button className="side-bar-buttons-hover" onClick={skillScroll}><b>Skills</b></button>}
					{!this.checkSkillsHeight() && <button onClick={skillScroll}><b>Skills</b></button>}
					{this.checkContactHeight() && <button className="side-bar-buttons-hover" onClick={contactScroll}><b>Contact</b></button>}
					{!this.checkContactHeight() && <button onClick={contactScroll}><b>Contact</b></button>}
				</div>


				<div className="side-bar-socials">
					<a href="https://github.com/MaxKoree" target="_blank" rel="noreferrer">
						<img src={githubCat} alt="GitHub"/> 
					</a>

					{/* <a href="https://www.upwork.com/freelancers/~01361471f78248a9b3" target="_blank" rel="noreferrer">
						<img src={upworkIcon} alt="upWork"/>
					</a> */}

					<a href="https://nl.linkedin.com/in/max-koree-118971194" target="_blank" rel="noreferrer">
						<img src={linkedinIcon} alt="linkedIn"/>
					</a>	
				</div>				
			</div>			
		);
	}
}