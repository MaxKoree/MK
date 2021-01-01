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
			 if(this.state.width > 1420) {
				return true;
			 }	else return false;
		}
	  
	  onSubmit = () => {
		  if(!this.checkIfEmpty(this.state.email) && !this.checkIfEmpty(this.state.name) && !this.checkIfEmpty(this.state.question)) {
		 		return fetch('http://localhost:3002/sendMail', {
				      method: 'POST',
				      headers: {'Content-Type': 'application/json',
				    	  		'Accept': 'application/json'},
				      body: JSON.stringify({
				        email: this.state.email,
				        name: this.state.name,
				        question: this.state.question
				     })
			   }).then(response => response.json())
			      .then(message => {
			          alert(message);
			    })
		  }
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
		    		  <h1 id="contactMeHeader">Contact</h1>
					    <div className="contactMeClass" id="contactMeClass">
					    	<article id="article">
					    	<form  id="form">
			    			<div id="contactBackground"></div>
	     	    	    	<div id="inputBackground"></div>  
						    	<h3>Ask me fast</h3>
						    	<label htmlFor="nameInput2" id="nameLabel2">Name:</label><br></br><br></br>
						    	<input id="nameInput2" type="text" onChange={this.onNameChange} required></input> <br></br><br></br><br></br><br></br>
						    	<label htmlFor="emailInput2" id="emailLabel2">Email:</label><br></br><br></br>
						    	<input id="emailInput2" type="email" onChange={this.onEmailChange} required></input> <br></br><br></br><br></br><br></br>
						    	<label htmlFor="questionInput2" id="questionLabel2">Question:</label><br></br><br></br><br></br><br></br>
						    	<textarea rows="10" cols="10" id="questionInput2" onChange={this.onQuestionChange} required>
						    	</textarea> <br></br><br></br>
						    	<input id="submitButton2" type="submit" value="Send" onClick={this.onSubmit}></input> <br></br><br></br>
						    </form>
					    	</article>
					    </div>
						<div className="myInfo" id="myInfo2">
				    	<h6>My information<br></br>&#8595;</h6>
				    	<b>** Business inquiries only **</b><br></br><br></br>
				    	<b>maxkoree@yahoo.de</b>
				    	</div>
					    </div>
    			      ) : (
    			    		  <div>
    			    		  <h1 id="contactMeHeader">Contact</h1>
    			    		  <div className="myInfo" id="myInfo">
						    	<h6>My information<br></br>&#8595;</h6>
						    	<b>** Business inquiries only **</b><br></br><br></br>
						    	<b>maxkoree@yahoo.de</b><br></br><br></br>
    						    <div className="contactMeClass">
    						    	<article>
    						    	<form>
    							    	<h3>Ask me fast</h3>
    							    	<label htmlFor="nameInput" id="nameLabel">Name:</label><br></br><br></br>
    							    	<input id="nameInput" type="text" onChange={this.onNameChange} required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="emailInput" id="emailLabel">Email:</label><br></br><br></br>
    							    	<input id="emailInput" type="email" onChange={this.onEmailChange} required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="questionInput" id="questionLabel">Question:</label><br></br><br></br><br></br><br></br>
    							    	<textarea rows="10" cols="10" id="questionInput" onChange={this.onQuestionChange} required>
    							    	</textarea> <br></br><br></br>
    							    	<input id="submitButton" type="submit" value="Send" onClick={this.onSubmit}></input> <br></br><br></br>
    							    </form>
    						    	</article>
    						    </div>
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
