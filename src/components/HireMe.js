import React from 'react';
import './css/HireMe.css';

const hireMe = () => {
	window.scroll({
		  top: 2430,
		  behavior: 'smooth'
		});
}


function HireMe() {
  return (
    <div className="hireMeClass">
    <h2>Need work done?</h2>
 				<h1 id="hireMeButton" onClick={hireMe}>Hire Me.</h1>
    <h2 id="bigTitle">Full stack developer</h2>
    </div>
  );
}

export default HireMe;
