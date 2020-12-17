import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
	const [aboutSelected, setAboutSelected] = useState(true);
	const [portfolioSelected, setPortfolioSelected] = useState(false);
	const [contactSelected, setContactSelected] = useState(false);
	const [resumeSelected, setResumeSelected] = useState(false);

	const renderTab = () => {
		if (aboutSelected) {
			return <About></About>;
		} else if (portfolioSelected) {
			return <Portfolio></Portfolio>;
		} else if (contactSelected) {
			return <Contact></Contact>;
		} else {
			return <Resume></Resume>;
		}
	};

	return (
		<div>
			<Header
				aboutSelected={aboutSelected}
				setAboutSelected={setAboutSelected}
				portfolioSelected={portfolioSelected}
				setPortfolioSelected={setPortfolioSelected}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
				resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}
			></Header>
			<main>
				{renderTab()}
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
