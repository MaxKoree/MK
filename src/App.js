import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import FirstPicture from './components/FirstPicture';
import Particles from 'react-particles-js';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Projects from './components/Projects';


const particlesOptions = {
		 particles: {}
};


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

	 
	render() {
		return (
			<div>
				<Particles className='particles' 
				params={particlesOptions}
                />
				{(() => {
				if(this.state.theposition > 0 && this.state.theposition < 35) {
					document.getElementById("arrowButton").style.transition = "all 0.9s";
					document.getElementById("arrowButton").style.boxShadow = "4px 6px black";
					document.getElementById("aboutmeButton").style.boxShadow = "";
					document.getElementById("contactButton").style.boxShadow = "";
				}
				if(this.state.theposition > 21 && this.state.theposition < 64) {
					document.getElementById("aboutmeButton").style.transition = "all 0.9s";
					document.getElementById("aboutmeButton").style.boxShadow = "4px 6px black";
					document.getElementById("contactButton").style.boxShadow = "";
					document.getElementById("arrowButton").style.boxShadow = "";
				}
				if(this.state.theposition > 64) {
					console.log(this.state.theposition)
					document.getElementById("contactButton").style.transition = "all 0.9s";
					document.getElementById("contactButton").style.boxShadow = "4px 6px black";
					document.getElementById("aboutmeButton").style.boxShadow = "";
					document.getElementById("arrowButton").style.boxShadow = "";
				}
				})()}
			<Sidebar />
			<HireMe />	
			<FirstPicture />
		{/* <Projects /> */}
			<Contact />
			<Footer />
			</div>
		);
	}
}

export default App;

/**
 * data naar database sturen werkt, alleen responses niet :( kijk video hoe hij
 * het doet
 *  :) 
 * fully responsive(every inch) 
 * 
 * donkerder op hover Bij de tekst wel een achtergrond als je op een beoaalde
 * hoogte bent een pijl bij het juiste woord in de sidenavbar projects in the
 * footer
 * fix input
 * 
 * 
 * 					 * {(() => { if(this.state.height < 800) { alert('resize
					 * screen') } if(this.state.width < 1500) { alert('resize
					 * screen } })()}
 * 
 * 
 * 
 * 
 */



