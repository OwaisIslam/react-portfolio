import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
	// const { categories = [], setCurrentCategory, currentCategory } = props;
	const categories = ["about", "portfolio", "contact", "resume"];

	return (
		<nav>
			<ul className="flex-row">
				{categories.map((category) => (
					<li className="mx-2" key={category}>
						<a href={"#" + category} className="mx-2">
							{capitalizeFirstLetter(category)}
						</a>
					</li>
				))}

				{/* <li className="mx-2">
					<a data-testid="about" href="#about">
						About me
					</a>
				</li>
				<li className="mx-2">
					<a data-testid="portfolio" href="#portfolio">
						Portfolio
					</a>
				</li>
				<li className="mx-2">
					<a data-testid="contact" href="#contact">
						Contact
					</a>
				</li>
				<li className="mx-2">
					<a data-testid="resume" href="#resume">
						Resume
					</a>
				</li> */}
			</ul>
		</nav>
	);
}

export default Navigation;