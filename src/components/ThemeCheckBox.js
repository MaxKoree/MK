import React from 'react';
import './css/ThemeCheckBox.scss';
import './css/variables.scss';

const handleCheck = (checked, e) => {
  var checkBox = document.getElementById("checkbox");
  if (checkBox.checked === true){
    document.getElementById("body").style.backgroundColor = "#333635";
    document.getElementById("linkList").style.backgroundColor = "#333635";
    document.getElementById("firstTitle").style.color = "#999";
    document.getElementById("hireMeButton").style.color = "#999";
    document.getElementById("bigTitle").style.color = "#999";
    document.getElementById("arrowButton").style.backgroundColor = "#333635";
    document.getElementById("contactButton").style.backgroundColor = "#333635";
    document.getElementById("aboutmeButton").style.backgroundColor = "#333635";
    document.getElementById("textBackground").style.background = "#333635";
    document.getElementById("p").style.color = "#999";
    document.getElementById("aboutmeHeader").style.color = "#999";
    document.getElementById("footerTitle").style.color = "#999";
    document.getElementById("span1").style.color = "#999";
    document.getElementById("span2").style.color = "#999";
    document.getElementById("footerID").style.background = "linear-gradient(to right,  #333635  30%, #333635 40%, #999 100%)";
    document.getElementById("contactBackground").style.background = "linear-gradient(to right,  #333635  30%, #333635 30%, #999 100%)";
  } else {
    document.getElementById("body").style.backgroundColor = "#eaf0f6";
    document.getElementById("linkList").style.backgroundColor = "white";
    document.getElementById("firstTitle").style.color = "black";
    document.getElementById("hireMeButton").style.color = "black";
    document.getElementById("bigTitle").style.color = "black";
    document.getElementById("arrowButton").style.backgroundColor = "rgb(250, 145, 145)";
    document.getElementById("contactButton").style.backgroundColor = "rgb(250, 145, 145)";
    document.getElementById("aboutmeButton").style.backgroundColor = "rgb(250, 145, 145)";
    document.getElementById("textBackground").style.background = "linear-gradient(to top, rgb(218, 3, 3) 1%,rgb(238, 144, 144) 50%, #eaf0f6 100%)";
    document.getElementById("p").style.color = "black";
    document.getElementById("aboutmeHeader").style.color = "black";
    document.getElementById("footerTitle").style.color = "black";
    document.getElementById("span1").style.color = "black";
    document.getElementById("span2").style.color = "black";
    document.getElementById("footerID").style.background = "linear-gradient(to right,  white  1%,rgb(200, 242, 255) 70%, #9cffdc 100%)";
    document.getElementById("contactBackground").style.background = "linear-gradient(to right, #eaf0f6  1%, rgb(200, 242, 255) 20%, #51fcc0 100%)";
  }
 
}

function ThemeCheckBox() {

  return (
    <div className="checkboxClass">
      
    <input type="checkbox" id="checkbox" class="darkMode" name="checkbox" onChange={handleCheck} />
    </div>
  );
}

export default ThemeCheckBox;