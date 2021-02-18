import React from 'react';
import './css/HireMe.scss';

const hireMe = () => {
	window.scroll({
		  top: 2443,
		  behavior: 'smooth'
		});
}

function HireMe() {
  return (
    <div className="hireMeClass">
    <h2 id="firstTitle">Do the best you can</h2>
 				<h1 id="hireMeButton" onClick={hireMe}>Hire Me.</h1>

    </div>
  );
}

export default HireMe;