import "./App.css";
import React from "react";
import Header from "./components/Header";
// import Project from "./components/Project";
// import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	return (
		<div>
			<Header></Header>
			<main>
				<About></About>
			</main>
		</div>
	);
}

export default App;