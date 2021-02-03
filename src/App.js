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
		 particles :{"number":{"value":9,"density":{"enable":false,"value_area":800}},"color":{"value":"#00ff2d"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":118.37775129623643,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":420,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};



class App extends Component {
	constructor() {
		super();
		this.state = {
				width: 0, 
				height: 0,
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
	
		heightAbove600() { 
			 if(this.state.height > 600) {
				return true;
			 }	else return false;
		}
		
		widthAbove1420() { 
			 if(this.state.width > 1420) {
				return true;
			 }	else return false;
		}

		titleButtonShadow() {
			if (this.state.theposition > 0 && this.state.theposition < 16 && this.heightAbove600() && this.widthAbove1420()) {
				return true
			} else return false
		}

		arrowButtonShadow() {
			if (this.state.theposition > 0 && this.state.theposition < 16 && !this.heightAbove600()) {
				return true
			} else return false
		}

		arrowButtonShadow2() {
			if (this.state.theposition > 0 && this.state.theposition < 16 && !this.widthAbove1420()) {
				return true
			} else return false
		}

		aboutMeButtonShadow() {
			if (this.state.theposition > 16 && this.state.theposition < 54 && this.heightAbove600() && this.widthAbove1420()) {
				return true
			} else return false
		}

		smallAboutMeButtonShadow() {
			if (this.state.theposition > 16 && this.state.theposition < 54 && !this.heightAbove600()) {
				return true
			} else return false
		}

		smallAboutMeButtonShadow2() {
			if (this.state.theposition > 16 && this.state.theposition < 54 && !this.widthAbove1420()) {
				return true
			} else return false
		}

		contactButtonShadow() {
			if (this.state.theposition > 54 && this.heightAbove600() && this.widthAbove1420()) {
				return true
			} else return false
		}

		smallContactButtonShadow() {
			if (this.state.theposition > 54 && !this.heightAbove600()) {
				return true
			} else return false
		}

		smallContactButtonShadow2() {
			if (this.state.theposition > 54 && !this.widthAbove1420()) {
				return true
			} else return false
		}
		

		executed() {
			if(this.state.i === 1) {
				return false
			} else return true
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
			<Footer />
			{(() => {
				if(this.titleButtonShadow() && document.readyState === "complete") {
					titleButton.style.transition = "0.3s";
					titleButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(this.arrowButtonShadow() && document.readyState === "complete") {
					arrowButton.style.transition = " all 0.3s";
					arrowButton.style.boxShadow = "4px 6px black";
					smallaboutMe.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(this.arrowButtonShadow2() && document.readyState === "complete") {
					arrowButton.style.transition = " all 0.3s";
					arrowButton.style.boxShadow = "4px 6px black";
					smallaboutMe.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(this.aboutMeButtonShadow() && document.readyState === "complete") {
					aboutMeButton.style.transition = "0.3s";
					aboutMeButton.style.boxShadow = "4px 6px black";
					titleButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(this.smallAboutMeButtonShadow() && document.readyState === "complete") {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(this.smallAboutMeButtonShadow2() && document.readyState === "complete") {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(this.contactButtonShadow() && document.readyState === "complete") {
					contactButton.style.transition = "0.3s";
					contactButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					titleButton.style.boxShadow = "none";
				} else if(this.smallContactButtonShadow() && document.readyState === "complete") {
					smallContact.style.transition = "0.3s";
					smallContact.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallaboutMe.style.boxShadow = "none";
				} else if(this.smallContactButtonShadow2() && document.readyState === "complete") {
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
 *
 * :)
 * 
 * 
 * 
 * 
 */






