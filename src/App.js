import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import FirstPicture from './components/FirstPicture';
import Particles from 'react-particles-js';
import HireMe from './components/HireMe';
import Contact from './components/Contact';

const particlesOptions = {
		 particles :{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};



class App extends Component {
	constructor() {
		super();
		this.state = {
				width: 0, 
				height: 0,
				theposition: 0
		}
		window.scrollTo(0, 0);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	
	 componentDidMount() {
	 fetch('http://localhost:3001').then(response => response.json());
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	  window.addEventListener('scroll', this.listenToScroll);
	 }
	 
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.removeEventListener('scroll', this.listenToScroll);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
		this.setState({
		    theposition: window.pageYOffset
		});
	}
	
	listenToScroll = () => {
		  const winScroll =
		    document.body.scrollTop || document.documentElement.scrollTop

		  const height =
		    document.documentElement.scrollHeight -
		    document.documentElement.clientHeight

		  const scrolled = winScroll / height

		  this.setState({
		    theposition: scrolled * 100,
		  })
		}
	
		checkHeight() { 
			 if(this.state.height > 735) {
				return true;
			 }	else return false;
		}
		
		checkWidth() { 
			 if(this.state.width > 1620) {
				return true;
			 }	else return false;
		}

	render() {
		const titleButton = document.getElementById("arrowButton");
		const arrowButton = document.getElementById("arrowButton2");
		const contactButton = document.getElementById("contactButton");
		const smallContact = document.getElementById("contactButton2");
		const smallaboutMe = document.getElementById("aboutmeButton2");
		const aboutMeButton = document.getElementById("aboutmeButton");
		return (
			<div>
				<Particles className='particles' 
				params={particlesOptions}
                />
			<Sidebar />
			<HireMe />	
			<FirstPicture />
			<Contact />
			{(() => { 
				if(this.state.theposition > 0 && this.state.theposition < 35 && this.checkHeight() && this.checkWidth() && document.readyState === "complete") {
					titleButton.style.transition = "0.3s";
					titleButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "";
					contactButton.style.boxShadow = "";
				} else if(this.state.theposition > 0 && this.state.theposition < 35 && !this.checkHeight() && !this.checkWidth() && document.readyState === "complete") {
					arrowButton.style.transition = " all 0.3s";
					arrowButton.style.boxShadow = "4px 6px black";
					smallaboutMe.style.boxShadow = "";
					smallContact.style.boxShadow = "";
				} else if(this.state.theposition > 21 && this.state.theposition < 64 && this.checkHeight() && this.checkWidth() && document.readyState === "complete") {
					aboutMeButton.style.transition = "0.3s";
					aboutMeButton.style.boxShadow = "4px 6px black";
					titleButton.style.boxShadow = "";
					contactButton.style.boxShadow = "";
				} else if(this.state.theposition > 21 && this.state.theposition < 64 && !this.checkHeight() && !this.checkWidth() && document.readyState === "complete") {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "";
					smallContact.style.boxShadow = "";
				} else if(this.state.theposition > 64 && this.checkHeight() && this.checkWidth() && document.readyState === "complete") {
					contactButton.style.transition = "0.3s";
					contactButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "";
					titleButton.style.boxShadow = "";
				} else if(this.state.theposition > 64 && !this.checkHeight() && !this.checkWidth() && document.readyState === "complete") {
					smallContact.style.transition = "0.3s";
					smallContact.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "";
					smallaboutMe.style.boxShadow = "";
				}
				})()}
			</div>
		);
	}
}

export default App;

/** 
 * 
 * 
 * 
 * als de button na de form gebruikt is is ie niet meer aan te klikken
 * bovenin: need a website? <br> Hire me
 * hire me knop gaat verwijst de input form
 * in de footer "ways I can help you"(1: website maken 2: be a part of a team 3: edit a website)
 * Full stack developer title onder about me
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  * implementeer de background generator maar dan dat de kleuren van de site veranderen

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



