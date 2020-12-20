import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Owais' Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>responsive design</li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>MySQL/Sequelize/NoSQL</li>
					<li>MongoDB/Mongoose</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;
