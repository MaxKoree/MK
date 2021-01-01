import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import FirstPicture from './components/FirstPicture';
import Particles from 'react-particles-js';
import HireMe from './components/HireMe';
import Contact from './components/Contact';



const particlesOptions = {
		 particles :{"number":{"value":82,"density":{"enable":false,"value_area":2762.147530245516}},"color":{"value":"#f7f7f7"},"shape":{"type":"circle","stroke":{"width":6,"color":"#e1e1e1"},"polygon":{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":true}},"size":{"value":39.459250432078804,"random":true,"anim":{"enable":true,"speed":60.86427267194163,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.3685543056757366,"width":1.4421690222094041},"move":{"enable":true,"speed":11.048590120982064,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":631.3480069132609,"rotateY":473.51100518494565}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":133.90139987827155,"size":81.15236356258882,"duration":4.13877054169203,"opacity":0.9819435991073248,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};



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
	 fetch('http://localhost:3002').then(response => response.json());
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
				}
				if(this.state.theposition > 21 && this.state.theposition < 64 && this.checkHeight() && this.checkWidth() && document.readyState === "complete") {
					aboutMeButton.style.transition = "0.3s";
					aboutMeButton.style.boxShadow = "4px 6px black";
					titleButton.style.boxShadow = "";
					contactButton.style.boxShadow = "";
				} else if(this.state.theposition > 21 && this.state.theposition < 64 && !this.checkHeight() && !this.checkWidth() && document.readyState === "complete") {
					smallaboutMe.style.transition = "0.3s";
					smallaboutMe.style.boxShadow = "4px 6px black";
					arrowButton.style.boxShadow = "";
					smallContact.style.boxShadow = "";
				}
				if(this.state.theposition > 64 && this.checkHeight() && this.checkWidth() && document.readyState === "complete") {
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
 * data naar database sturen werkt, alleen responses niet :( kijk video hoe hij
 * het doet
 *  :) 
 * fully responsive(wanneer scherm kleiner wordt maak de navbar dun en met kleine icons) 
 * projects in the footer
 * implementeer de background generator maar dan dat de kleuren van de site veranderen ook bij de particles
 * when its too small change z-index of blackgrounds so bubbles are in front
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



