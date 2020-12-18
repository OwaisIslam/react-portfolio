import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About></About>;
			case "portfolio":
				return <Portfolio></Portfolio>;
			case "contact":
				return <Contact></Contact>;
			case "resume":
				return <Resume></Resume>;
			default:
				return null;
		}
	};

	return (
		<div>
			<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			<main>{renderTab()}</main>
			<Footer></Footer>
		</div>
	);
}

export default App;