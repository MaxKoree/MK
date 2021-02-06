import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import FirstPicture from './components/FirstPicture';
import Particles from 'react-particles-js';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';




const emailjs = require('emailjs-com');
emailjs.init('user_eFbFfL2FoJtbHTkXQgxkA');
const particlesOptions = {
		 particles :{"number":{"value":369,"density":{"enable":false,"value_area":800}},"color":{"value":"#080093"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":14,"direction":"none","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":236,"size":5,"duration":0.1,"opacity":8,"speed":3},"repulse":{"distance":169,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};



class App extends Component {
	constructor() {
		super();
		this.state = {
				theposition: 0,
				i: 1
		}
		window.scrollTo(0, 0);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	
	 componentDidMount() {
	 fetch('http://localhost:3690').then(response => response.json());
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

		executed() {
			if(this.state.i === 1) {
				return false
			} else return true
		}

		checkTitleHeight() {
			if(this.state.theposition < 16) {
				return true;
			} else return false;
		}

		checkAboutMeHeight() {
			if(this.state.theposition > 16 && this.state.theposition < 54) {
				return true;
			} else return false;
		}

		checkContactHeight() {
			if(this.state.theposition > 54) {
				return true;
			} else return false;
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
			<Footer />
			<Contact />
			
			{(() => {
				if(titleButton != null && this.checkTitleHeight()) {
					titleButton.style.transition = "0.3s";
					titleButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(arrowButton != null && this.checkTitleHeight()) {
					arrowButton.style.transition = " all 0.3s";
					arrowButton.style.boxShadow = "4px 6px black";
					smallaboutMe.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(aboutMeButton != null && this.checkAboutMeHeight()) {
					aboutMeButton.style.transition = "0.3s";
					aboutMeButton.style.boxShadow = "4px 6px black";
					titleButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(smallaboutMe != null && this.checkAboutMeHeight()) {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(contactButton != null && this.checkContactHeight()) {
					contactButton.style.transition = "0.3s";
					contactButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					titleButton.style.boxShadow = "none";
				} else if(smallContact != null && this.checkContactHeight()) {
					smallContact.style.transition = "0.3s";
					smallContact.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallaboutMe.style.boxShadow = "none";
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
 * Check if email is valid door te checken if er een punt in zit bijvoorbeeld
 * :)
 * 
 * 
 * 
 */






