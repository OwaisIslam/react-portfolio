import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className="mx-2">
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
				<li className="mx-2">
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className="mx-2">
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className="mx-2">
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;