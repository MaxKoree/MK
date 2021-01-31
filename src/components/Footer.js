import React from 'react';
import './css/Footer.css';


function Footer() {
  return (
    <div className="footerClass" id="footerID">
	<h2 id="footerTitle">Ways I can help you <br></br>&#8595; <br></br> <br></br></h2>
		<div className="footerGrid">
		<span id="span1"><b>Create website<br></br>&#10003;</b></span>
		<span id="span2"><b>Edit your website<br></br>&#189;</b></span>
		<span id="span3"><b>Be part of your developer team<br></br>&#8364;</b></span>
		</div>
    </div>
  );
}

export default Footer;
