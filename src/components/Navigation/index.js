import React, { useEffect } from "react";

function Navigation() {
	return (
		<header>
			<h2>Owais' React Portfolio</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">About me</li>
                    <li className="mx-2">Portfolio</li>
                    <li className="mx-2">Contact</li>
                    <li className="mx-2">Resume</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
