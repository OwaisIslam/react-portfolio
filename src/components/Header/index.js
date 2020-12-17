import React, { useState } from "react";
import Navigation from "../Navigation";

function Header() {
	const [categories] = useState(["about", "portfolio", "contact", "resume"]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<header>
			<h2>Owais' React Portfolio</h2>
			<Navigation
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Navigation>
		</header>
	);
}

export default Header;