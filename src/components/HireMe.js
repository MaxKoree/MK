import React from 'react';
import './css/HireMe.css';
import Tilt from 'react-tilt';

const hireMe = () => {
	window.scroll({
		  top: 1690,
		  behavior: 'smooth'
		});
}


function HireMe() {
  return (
    <div className="hireMeClass">
    <h2>Need a website?</h2>
     <Tilt className="Tilt"  style={{ height: 480, width: 480 }} >
 					<div className="Tilt-inner"><h1 id="hireMeButton" onClick={hireMe}>Hire Me.</h1></div>
					</Tilt>
    <h2 id="bigTitle">Full stack developer</h2>
    </div>
  );
}

export default HireMe;
