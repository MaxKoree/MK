import React, { FormEvent } from 'react';
//import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
//emailjs.init('user_eFbFfL2FoJtbHTkXQgxkA');

// const sendEmail = (e: any) => {
	
// 	e.preventDefault();

// 	emailjs.sendForm('service_8vmef3d', 'template_wbkmp1p', e.target, 'user_eFbFfL2FoJtbHTkXQgxkA').then(() => {
// 		let submitButton = document.getElementById("submitButton");
// 		if (submitButton !== null) {
// 			submitButton.innerText = 'Message sent';
// 			// submitButton.delivered = true;
// 		}
// 		}).catch(() => {
// 			alert("Oops, something went wrong :(");
// 		});
//   }


interface ContactState {
	email: string,
	name: string,
	question: string,
}

export default class Contact extends React.Component<{}, ContactState> {

	constructor(props: {}) {
		super(props);

		this.state = {
			email: '',
			name: '',
			question: '',
		}
	}
	  
	checkIfEmpty(string: React.ChangeEvent<HTMLTextAreaElement>) {
		if (string) {
			return false;
		} else return true;
	}
	  
	onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({name: event.target.value})
	}

	onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({email: event.target.value})
		}
	  
	onQuestionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		this.setState({question: event.target.value})
		}


	render() {

		return (
			<div className="contact-container">
				<form id='form' className="contact-form">
					<p>Contact Me</p>
					<input type="hidden" name="contact_number" />
					<label htmlFor="nameInput" id="nameLabel">Name:</label>
					<input id="nameInput" type="text"  name="user_name" onChange={this.onNameChange} required></input>
					<label htmlFor="emailInput" id="emailLabel">Email:</label>
					<input id="emailInput" type="email"  name="user_email" onChange={this.onEmailChange} required></input>
					<label htmlFor="questionInput" id="questionLabel">Question:</label>
					<textarea id="questionInput"  name="message" onChange={this.onQuestionChange} required>
					</textarea>
					<input id="submitButton" type="submit" value="Send"></input>
				</form>
			</div>
		  );
	  }
}








/**
 * 
 * 
 * 
 * maybe be able to change the anounmt of 
 * 
 * 
 */
