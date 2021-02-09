import FirstPicture from './img/0001.png';

const hireMe = () => {
	window.scroll({
		  top: 2430,
		  behavior: 'smooth'
		});
}


function HireMe() {
  return (
    <div className="hire-me">

        <div className="hire-me-text">
            <p>about me</p>
						<p>Hey, i&#39;m Max Koree. 18 years old. I live in Amsterdam. I&#39;m a full stack developer.
						I started studying computer science when I was 15 years old. I&#39;m a student at the MBO college Zuid-Oost in Amsterdam.
						I&#39;ve learned a lot since, I had an intership at ABN AMRO Bank N.V., IT department (Head office).
						Here I started really getting into programming.
						After the internship I followed the  
						<a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noreferrer"> ZeroToMastery </a> 
					online class. <br></br><br></br> I&#39;ve been writing code in the following languages.<br></br><br></br>
						- HTML5<br></br>
						- CSS<br></br>
						- JavaScript<br></br>
						- Bootstrap<br></br>
						- jQuery<br></br>
						<br></br>
						- React<br></br>
						- Node.js<br></br>
						- Java<br></br><br></br>
						Feel free to contact me if there is anything you&#39;d like to ask.</p>     	
        </div>

          {/* <p className="hire-me-button" onClick={hireMe}>Hire Me.</p> */}
        <div className="hire-me-pic">
          <img src={FirstPicture}></img>
          <p className="" >Full stack developer</p>
        </div>

    </div>
  );
}

export default HireMe;
