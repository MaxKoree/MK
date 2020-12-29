import React from 'react';
import './css/HireMe.css';

const hireMe = () => window.location.replace("https://www.upwork.com/freelancers/~01361471f78248a9b3");


function HireMe() {
  return (
    <div className="hireMeClass">
    <h1 id="hireMeButton" onClick={hireMe}>Hire <br></br> Me.</h1>
    <h2>Full stack developer</h2>
    </div>
  );
}

export default HireMe;
