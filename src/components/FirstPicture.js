import React from 'react';
import './css/FirstPicture.css';
import FirstPicture from './img/0001.png';

function FirstPictureFunction() {
  return (
    <div className="firstPictureClass">
    	<h1 className="aboutmeHeader">About me</h1>
	    	<p>Hey, i&#39;m Max Koree. 18 years old. I live in Amsterdam. I&#39;m working towards the full stack developer title.
	    	I started studying computer science when I was 15 years old. I&#39;m a student at the MBO college Zuid-Oost in Amsterdam.
	    	I have learned a lot since, I had an intership at ABN AMRO Bank N.V., IT department (Head office).
	    	Here I started really getting into programming.
	    	After the internship I followed the  
	    	<a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noreferrer"> ZeroToMastery </a> 
	    online course. <br></br><br></br> I&#39;ve written code in the following languages.<br></br><br></br>
	    	- HTML5<br></br>
	    	- CSS<br></br>
	    	- Bootstrap<br></br>
	    	- jQuery<br></br>
	    	- JavaScript<br></br>
	    	- React<br></br>
	    	- Node.js<br></br>
	    	- PHP<br></br>
	    	- Java<br></br><br></br>
	    	I&#39;m also very motivated to learn a lot more :)</p>
    	<img src={FirstPicture} alt="Me :)" id="firstPicture"></img>
    </div>
  );
}

export default FirstPictureFunction;
