import React, { useState } from "react";
import Navigation from "../Navigation";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<h2>Owais' React Portfolio</h2>
			<Navigation
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			></Navigation>
		</header>
	);
}

export default Header;