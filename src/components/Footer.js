import React from 'react';
import Tilt from 'react-tilt';


function Footer() {
  return (
    <div className="footerClass" id="footerID">
	<h2 id="footerTitle">Ways I can help you</h2><br></br> <br></br>
		<div className="footerGrid">
		<Tilt style={{ height: 64, width: 192 }} ><span id="span1"><b>Create website &#10003;</b></span></Tilt>
		<Tilt style={{ height: 64, width: 192 }} >	<span id="span2"><b>Edit website &#189;</b></span></Tilt>
		</div>
    </div>
  );
}

export default Footer;
