import React from 'react';
import './css/Contact.scss';
import emailjs from 'emailjs-com';
emailjs.init('user_eFbFfL2FoJtbHTkXQgxkA');

const sendEmail = (e)  => {
	e.preventDefault();

	emailjs.sendForm('service_8vmef3d', 'template_wbkmp1p', e.target)
	  .then((result) => {
		  	if(document.getElementById("submitButton") != null) {
			document.getElementById("submitButton").value = 'Message sent';
			document.getElementById("submitButton").disabled = true;
			} 
			if (document.getElementById("submitButton2") != null) {
			document.getElementById("submitButton2").value = 'Message sent';
			document.getElementById("submitButton2").disabled = true;
			}
	  }, (error) => {
		  alert("Oops, something went wrong :(");
	  });
  }
  
class Contact extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    }
	  }

	  render() {
		    return (
		    <div className="contactClass">
    			    		  <div className="contact">	
    						    <div className="contactMeClass">
    						    <div className="contactBackground" id="contactBackground" />
    						    	<article>
    						    	<form id='form' className="contact-form" onSubmit={sendEmail}>
    							    	<h3 id="contactFormHeader">Contact Me</h3>
    							    	<input type="hidden" name="contact_number" />
    							    	<label htmlFor="nameInput" id="nameLabel">Name:</label><br></br><br></br>
    							    	<input id="nameInput" type="text"  name="user_name" required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="emailInput" id="emailLabel">Email:</label><br></br><br></br>
    							    	<input id="emailInput" type="email"  name="user_email" required></input> <br></br><br></br><br></br><br></br>
    							    	<label htmlFor="questionInput" id="questionLabel">Question:</label><br></br><br></br><br></br><br></br>
    							    	<textarea rows="10" cols="10" id="questionInput"  name="message" required /> <br></br><br></br>
    							    	<input id="submitButton" type="submit" value="Send" /> <br></br><br></br>
    							    </form>
    						    	</article>
    						    </div>
    				</div>
		    </div>
		  );
	  }
}

export default Contact;