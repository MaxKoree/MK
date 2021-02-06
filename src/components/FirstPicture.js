import React from 'react';
import FirstPicture from './img/0001.png';


class PictureClass extends React.Component {
	  constructor(props) {
		    super(props);
		    this.state = {
		      width: '',
		      tooSmall: false
		    }
		    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		  }
	  
	  
	  componentDidMount() {
			  this.updateWindowDimensions();
			  window.addEventListener('resize', this.updateWindowDimensions);
			 }
			 
			componentWillUnmount() {
				window.removeEventListener('resize', this.updateWindowDimensions);
			}

			updateWindowDimensions() {
				this.setState({ width: window.innerWidth });
				
			}
			
			checkWidth() { 
				 if(this.state.width < 1420) {
					return true;
				 }	else return false;
			}

render() {
	const tooSmall = this.checkWidth();
  return (
    <div >
    	    	
    	    	{tooSmall ? (
    	    			  <div className="firstPictureClass2">
    	    	    	    	
    	    	    	<img src={FirstPicture} alt="Me :)" id="firstPicture2"></img>
    	    	    	    	<div className="textBackground"></div>
    			    	<p id="p">Hey, i&#39;m Max Koree. i&#39;m 18 years old, live in Amsterdam. I&#39;m working towards the full stack developer title.
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
        	    	
        	    </div>
    	    			) : (
    	    			<div className="firstPictureClass">
    	     	    	<h1 className="aboutmeHeader">About me</h1>
    	     	    	<img src={FirstPicture} alt="Me :)" id="firstPicture"></img>
    	     	    	<div className="textBackground"></div>
    	     		    	<p>Hey, i&#39;m Max Koree. 18 years old. I live in Amsterdam. I&#39;m a full stack developer.
    	     		    	I started studying computer science when I was 15 years old. I&#39;m a student at the MBO college Zuid-Oost in Amsterdam.
    	     		    	I&#39;ve learned a lot since, I had an intership at ABN AMRO Bank N.V., IT department (Head office).
    	     		    	Here I started really getting into programming.
    	     		    	After the internship I followed the  
    	     		    	<a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noreferrer"> ZeroToMastery </a> 
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
    	     		    	Feel free to contact me if there is anything you&#39;d like to ask.</p> 
    	    	    	</div>
    	    	    	)}  	    	

    	        </div>
);
}
}
export default PictureClass;
