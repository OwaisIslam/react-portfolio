import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require("../../assets/images/recent-photo.jpg")}
					alt="flash-beats"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi there! My name is Owais Islam and I hope you've come to this page to see some of my work and learn some more about me. I was born in Houston, TX and currently reside in Austin with my wife and our cat Shuri. During the day, I work for a popular e-commerce platform company. In my spare time, I love to play video games and watch comedy shows. Currently we are catching up on <em>Brooklyn Nine Nine</em> and <em>Veep</em>. I'm a huge Trekkie and I have seen all the episodes of every single show (yes, even the animated cartoon!).
				</p>
				<p>
					I recently picked up a copy of <em>Ghost of Tsushima</em> for the PS4 and it is one of the best games I have ever played.
				</p>
				<p>
					I love coding and programming and it's one of the reasons I took this class. I am looking forward to expanding my knowledge and being able to create great web pages.
				</p>
			</div>
		</section>
	);
}

export default About;
