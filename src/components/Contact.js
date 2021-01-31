import React from 'react';
import './css/Contact.css';

class Contact extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      name: '',
	      question: '',
		  height: '',
		  width: '',
		  tooSmall: false
	    }
	    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	  }
	  
	  onSubmit() {
		  const emailjs = require('emailjs-com');
		  emailjs.init('user_eFbFfL2FoJtbHTkXQgxkA');

		  window.onload = function() {
		      document.getElementById('form2').addEventListener('submit', function(event) {
		          event.preventDefault();
		          // generate a five digit number for the contact_number variable
		          this.contact_number.value = Math.random() * 100000 | 0;
		          // these IDs from the previous steps
		          emailjs.sendForm('service_8vmef3d', 'template_wbkmp1p', this)
		              .then(function() {
		                  alert('SUCCESS!');
		              }, function(error) {
		                  console.log('FAILED...', error);
		              });
		      })
		  }
	  }
	  
	  componentDidMount() {
		  this.updateWindowDimensions();
		  window.addEventListener('resize', this.updateWindowDimensions);
		 }
		 
		componentWillUnmount() {
			window.removeEventListener('resize', this.updateWindowDimensions);
		}

		updateWindowDimensions() {
			this.setState({ width: window.innerWidth, height: window.innerHeight });
			
		}
		
		checkWidth() { 
			 if(this.state.width > 1020) {
				return true;
			 }	else return false;
		}
	  
	  checkIfEmpty = (string) => {
		  if (string.length > 0) {
			  return false;
		  } else return true;
	  }
	  
	  onNameChange = (event) => {
		    this.setState({name: event.target.value})
		  }

	  onEmailChange = (event) => {
		    this.setState({email: event.target.value})
		  }
	  
	  onQuestionChange = (event) => {
		    this.setState({question: event.target.value})
		  }


	  render() {
			const tooSmall = this.checkWidth();
		    return (
		    <div className="contactClass">
		    {!tooSmall ? (

		    		  <div id="smallContact">
					    <div className="contactMeClass" id="contactMeClass">
					    	<article id="article">
					    	<form  id="form">
	     	    	    	<div id="inputBackground"></div>  
						    	<h3>Send email</h3>
						    	 <input type="hidden" name="contact_number" />
						    	<label htmlFor="nameInput2" id="nameLabel2">Name:</label><br></br><br></br>
						    	<input id="nameInput2" type="text"  name="user_name" onChange={this.onNameChange} required></input> <br></br><br></br><br></br><br></br>
						    	<label htmlFor="emailInput2" id="emailLabel2">Email:</label><br></br><br></br>
						    	<input id="emailInput2" type="email"  name="user_email" onChange={this.onEmailChange} required></input> <br></br><br></br><br></br><br></br>
						    	<label htmlFor="questionInput2" id="questionLabel2">Question:</label><br></br><br></br><br></br><br></br>
						    	<textarea rows="10" cols="10" id="questionInput2"  name="message" onChange={this.onQuestionChange} required>
						    	</textarea> <br></br><br></br>
						    	<input id="submitButton2" type="submit" value="Send"></input> <br></br><br></br>
						    </form>
					    	</article>
					    </div>
					    </div>
    			      ) : (
    			    		  <div className="bigContact">	
    	    		  <h1 id="contactMeHeader">Contact</h1>
    						    <div className="contactMeClass">
    						    <div className="contactBackground"></div>
    						    	<article>
    						    	<form id='form'>
    							    	<h3>Send email</h3>
    							    	<input type="hidden" name="contact_number" />
    							    	<label htmlFor="nameInput" id="nameLabel">Name:</label><br></br><br></br>
    							    	<input id="nameInput" type="text"  name="user_name" onChange={this.onNameChange} required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="emailInput" id="emailLabel">Email:</label><br></br><br></br>
    							    	<input id="emailInput" type="email"  name="user_email" onChange={this.onEmailChange} required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="questionInput" id="questionLabel">Question:</label><br></br><br></br><br></br><br></br>
    							    	<textarea rows="10" cols="10" id="questionInput"  name="message" onChange={this.onQuestionChange} required>
    							    	</textarea> <br></br><br></br>
    							    	<input id="submitButton" type="submit" value="Send"></input> <br></br><br></br>
    							    </form>
    						    	</article>
    						    </div>
						  
    				</div>
    			  )}
			
		    </div>
		  );
	  }
}


export default Contact;









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */
