import React from 'react';
import './css/ThemeCheckBox.scss';
import './css/variables.scss';

const handleCheck = (checked, e) => {
  let checkBox = document.getElementById("checkbox");
  let body = document.getElementById("body");
  let linkList = document.getElementById("linkList");
  let firstTitle = document.getElementById("firstTitle");
  let hireMeButton = document.getElementById("hireMeButton");
  let bigTitle = document.getElementById("bigTitle");
  let arrowButton = document.getElementById("arrowButton");
  let contactButton = document.getElementById("contactButton");
  let aboutmeButton = document.getElementById("aboutmeButton");
  let textBackground = document.getElementById("textBackground");
  let p = document.getElementById("p");
  let aboutmeHeader = document.getElementById("aboutmeHeader");
  let footerTitle = document.getElementById("footerTitle");
  let footerID = document.getElementById("footerID");
  let contactBackground = document.getElementById("contactBackground");
  if (checkBox.checked === true){
    body.style.backgroundColor = "#333635";
    linkList.style.backgroundColor = "#333635";
    firstTitle.style.color = "#999";
    hireMeButton.style.color = "#999";
    bigTitle.style.color = "#999";
    arrowButton.style.backgroundColor = "#333635";
    contactButton.style.backgroundColor = "#333635";
    aboutmeButton.style.backgroundColor = "#333635";
    arrowButton.style.color = "#999";
    contactButton.style.color = "#999";
    aboutmeButton.style.color = "#999";
    textBackground.style.background = "#333635";
    p.style.color = "#999";
    aboutmeHeader.style.color = "#999";
    footerTitle.style.color = "#999";
    footerID.style.background = "linear-gradient(to right,  #333635  30%, #333635 40%, #999 100%)";
    contactBackground.style.background = "linear-gradient(to right,  #333635  30%, #333635 30%, #999 100%)";
  } else {
    body.style.backgroundColor = "#eaf0f6";
    linkList.style.backgroundColor = "white";
    firstTitle.style.color = "black";
    hireMeButton.style.color = "black";
    bigTitle.style.color = "black";
    arrowButton.style.backgroundColor = "rgb(250, 145, 145)";
    contactButton.style.backgroundColor = "rgb(250, 145, 145)";
    aboutmeButton.style.backgroundColor = "rgb(250, 145, 145)";
    arrowButton.style.color = "black";
    contactButton.style.color = "black";
    aboutmeButton.style.color = "black";
    textBackground.style.background = "linear-gradient(to top, rgb(218, 3, 3) 1%,rgb(238, 144, 144) 50%, #eaf0f6 100%)";
    p.style.color = "black";
    aboutmeHeader.style.color = "black";
    footerTitle.style.color = "black";
    footerID.style.background = "linear-gradient(to right,  white  1%,rgb(200, 242, 255) 70%, #9cffdc 100%)";
    contactBackground.style.background = "linear-gradient(to right, #eaf0f6  1%, rgb(200, 242, 255) 20%, #51fcc0 100%)";
  }
 
}

function ThemeCheckBox() {

  return (
    <div className="checkboxClass">
      <div id="moon"></div>
    <input type="checkbox" id="checkbox" className="darkMode" name="checkbox" value="Dark mode" onChange={handleCheck}></input>
    </div>
  );
}

export default ThemeCheckBox;