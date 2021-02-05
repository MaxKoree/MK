import React from 'react';
import './css/Footer.css';


function Footer() {
  return (
    <div className="footerClass" id="footerID">
	<h2 id="footerTitle">Ways I can help you</h2><br></br> <br></br>
		<div className="footerGrid">
		<span id="span1"><b>Create website<br></br>&#10003;</b></span>
		<span id="span2"><b>Edit your website<br></br>&#189;</b></span>
		<span id="span3"><b>Be part of a developer team<br></br>&#8364;</b></span>
		</div>
    </div>
  );
}

export default Footer;
