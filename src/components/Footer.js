import React from 'react';
import Tilt from 'react-tilt';
import './css/Footer.scss';
import arrowIcon from './img/downArrow.png';

const popUp = () => {
	document.getElementById("pop-upFull").style.visibility = "visible";
}

const popUp2 = () => {
	document.getElementById("pop-upHalf").style.visibility = "visible";
}

const popUpClose = () => {
	document.getElementById("pop-upFull").style.visibility = "hidden";
}

const popUpClose2 = () => {
	document.getElementById("pop-upHalf").style.visibility = "hidden";
}

const contactScroll = () => {
	window.scroll({
		  top: 2436,
		  behavior: 'smooth'
		});
}



function Footer() {
  return (
    <div className="footerClass" id="footerID">
		<div className="pop-upFull" id="pop-upFull">
		<h6 className="pop-upHeader" id="pop-upHeader">Need a website?</h6>
    	     		    	<p id="pop-upText">
							 I will create a professional and responsive website using:<br></br><br></br>

							- HTML5<br></br>
							- SASS<br></br>
							- JavaScript<br></br>
							- React<br></br>
							- Node.js<br></br><br></br>
						

							Feel free to contact me using the contact form below</p> <button id="downButton" onClick={contactScroll}><img src={arrowIcon} alt="&#8595;" id="downIcon"></img></button><button id="xButton" onClick={popUpClose}>&#215;</button>
		</div>
		<div className="pop-upHalf" id="pop-upHalf">
		<h6 className="pop-upHeader" id="pop-upHeader">Need work done on your website?</h6>
    	     		    	<p id="pop-upText">
							 I will make the nessesary changes.<br></br><br></br>

							<br></br>

							Feel free to contact me using the contact form below</p> <button id="downButton" onClick={contactScroll}><img src={arrowIcon} alt="&#8595;" id="downIcon"></img></button><button id="xButton" onClick={popUpClose2}>&#215;</button>
		</div>
	<h2 id="footerTitle">Ways I can help you</h2><br></br> <br></br>
		<div className="footerGrid">
		<Tilt style={{ height: 64, width: 192 }} ><span onClick={popUp} id="span1"><b>Create website</b></span></Tilt>
		<Tilt style={{ height: 64, width: 192 }} ><span onClick={popUp2} id="span2"><b>Edit website</b></span></Tilt>
		</div>
    </div>
  );
}

export default Footer;