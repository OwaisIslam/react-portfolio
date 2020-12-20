import React from "react";
import Project from "../Project";

function Portfolio() {
	const projects = [
		{
			name: "Auto Tracker",
			description:
				"This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.",
			image: "auto-tracker-image.png",
			technologies:
				"JavaScript, Node.js, HTML/CSS, Handlebars.js, Express & Sequelize, Heroku & AWS S3",
			github: "https://github.com/CamWills89/auto-tracker",
			deployed: "https://team-3-auto-tracker.herokuapp.com/",
		},
		{
			name: "Flash Beats",
			description:
				"A clean and accurate way to search for your favorite songs while also displaying the lyrics.",
			image: "flash-beats-image.gif",
			technologies: "HTML/CSS, JavaScript & jQuery",
			github: "https://github.com/TeamFlash1/music-app",
			deployed: "https://teamflash1.github.io/music-app/",
		},
		{
			name: "Budget Tracker",
			description:
				"Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",
			image: "budget-tracker-image.png",
			technologies:
				"JavaScript,MongoDb, IndexedDb & Service Workers, Node Js, Express js",
			github: "https://github.com/CamWills89/budget-tracker",
			deployed: "https://camerons-budget-tracker.herokuapp.com/",
		},
		{
			name: "Weather Dashboard",
			description:
				"A weather dashboard that shows current weather and five-day weather forecast for any city.",
			image: "weather-dashboard-image.png",
			technologies: "HTML, CSS, JavaScript",
			github: "https://github.com/OwaisIslam/weather-dashboard",
			deployed: "https://owaisislam.github.io/weather-dashboard/",
		},
		{
			name: "Password Generator",
			description:
				"This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",
			image: "password-generator-image.png",
			technologies: "HTML, CSS, JavaScript",
			github: "https://github.com/OwaisIslam/password-generator",
			deployed: "https://owaisislam.github.io/password-generator/",
		},
		{
			name: "Note Taker",
			description:
				"This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",
			image: "note-taker-image.png",
			technologies: "HTML, CSS, JavaScript",
			github: "https://github.com/OwaisIslam/note-taker",
			deployed: "https://note-taker-owais.herokuapp.com/",
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
