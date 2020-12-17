import React, { useState } from "react";
import Navigation from "../Navigation";

function Header(props) {
	const {
		aboutSelected,
		setAboutSelected,
		portfolioSelected,
		setPortfolioSelected,
		contactSelected,
		setContactSelected,
		resumeSelected,
		setResumeSelected
	} = props;

	return (
		<header>
			<h2>Owais' React Portfolio</h2>
			<Navigation
				aboutSelected={aboutSelected}
				setAboutSelected={setAboutSelected}
				portfolioSelected={portfolioSelected}
				setPortfolioSelected={setPortfolioSelected}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
				resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}
			></Navigation>
		</header>
	);
}

export default Header;