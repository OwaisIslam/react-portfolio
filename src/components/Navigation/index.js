import React, { useEffect } from "react";

function Navigation() {
	return (
		<nav>
			<ul className="flex-row">
				<li className="mx-2">About me</li>
				<li className="mx-2">Portfolio</li>
				<li className="mx-2">Contact</li>
				<li className="mx-2">Resume</li>
			</ul>
		</nav>
	);
}

export default Navigation;
