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
		 particles :{"number":{"value":115,"density":{"enable":true,"value_area":800}},"color":{"value":"#51fcc0"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top","random":true,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":158.24710894704822,"size":20.288090890647204,"duration":2,"opacity":0.2678027997565431,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};



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
				if(titleButton != null && this.state.theposition < 16) {
					titleButton.style.transition = "0.3s";
					titleButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(arrowButton != null && this.state.theposition < 16) {
					arrowButton.style.transition = " all 0.3s";
					arrowButton.style.boxShadow = "4px 6px black";
					smallaboutMe.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(aboutMeButton != null && this.state.theposition > 16 && this.state.theposition < 54) {
					aboutMeButton.style.transition = "0.3s";
					aboutMeButton.style.boxShadow = "4px 6px black";
					titleButton.style.boxShadow = "none";
					contactButton.style.boxShadow = "none";
				} else if(smallaboutMe != null && this.state.theposition > 16 && this.state.theposition < 54) {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "none";
					smallContact.style.boxShadow = "none";
				} else if(contactButton != null && this.state.theposition > 54) {
					contactButton.style.transition = "0.3s";
					contactButton.style.boxShadow = "4px 6px black";
					aboutMeButton.style.boxShadow = "none";
					titleButton.style.boxShadow = "none";
				} else if(smallContact != null && this.state.theposition > 54) {
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
 * contact header in het midden
 * contact form in het midden
 * footer content in het midden
 * full stack developer title iets meer naar rechts
 * small navbar moet weg en dan wanneer je scrolt zie je die die active is
 * 
 * 
 * 
 */






