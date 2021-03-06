import React from 'react';
import './css/FirstPicture.scss';
import FirstPicture from './img/0001.png';

class PictureClass extends React.Component {
	  constructor(props) {
		    super(props);
		    this.state = {
		    }
		  }
render() {
  return (
    <div >
    	    			<div className="firstPictureClass">
						
						<div className="aboutMeGrid">
    	     	    	<div className="textBackground" id="textBackground"></div>
						 <div className="text">
						 <h1 className="aboutmeHeader" id="aboutmeHeader">About me</h1>
    	     		    	<p id="p">Hey, i&#39;m Max Koree, 18 years old, live in Amsterdam. I&#39;m a full stack developer.
    	     		    	I started studying computer science when I was 15 years old.
    	     		    	I&#39;ve learned a lot since, I have had an intership at the ABN AMRO Bank N.V., IT department (Head office).
    	     		    	Here I started really getting into programming.
    	     		    	After the internship I followed the&nbsp;<a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noreferrer" id="zeroToMasteryLink">ZeroToMastery</a>&nbsp;
							 online class. <br></br><br></br> I&#39;ve been writing code in the following languages.<br></br><br></br>
    	     		    	- HTML5<br></br>
    	     		    	- CSS<br></br>
							- JavaScript<br></br>
    	     		    	- Bootstrap<br></br>
    	     		    	- jQuery<br></br>
    	     		    	<br></br>
    	     		    	- React<br></br>
    	     		    	- Node.js<br></br>
    	     		    	- Java<br></br><br></br>
    	     		    	Feel free to contact me.</p> 
							 </div>
							 <img src={FirstPicture} alt="Me :)" id="firstPicture"></img>
							 </div>
    	    	    	</div>
    	        </div>
);
}
}
export default PictureClass;
