import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import FirstPicture from './components/FirstPicture';
import Particles from 'react-particles-js';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeCheckBox from './components/ThemeCheckBox';

const emailjs = require('emailjs-com');
emailjs.init('user_eFbFfL2FoJtbHTkXQgxkA');
const particlesOptions = {
		 particles :{"number":{"value":169,"density":{"enable":false,"value_area":800}},"color":{"value":"#999"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":14,"direction":"none","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"grab"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":236,"size":9,"duration":0.9,"opacity":8,"speed":30},"repulse":{"distance":169,"duration":0.4},"push":{"particles_nb":69},"remove":{"particles_nb":2}}},"retina_detect":true};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				theposition: 0
		}
		window.scrollTo(0, 0);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	 componentDidMount() {	
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
			<Sidebar/>
			<ThemeCheckBox />
			<HireMe />	
			<h2 id="bigTitle">Full stack developer</h2>
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
 * maak templates en laat zien link naar websites die ik heb gebouwd
 * 
 * sidebar stylen met css.shapes site
 * 
 * make the gradient go to black
 * maybe move the pic a bit to the let so its in the gradient or make the gradient more width
 *
 */