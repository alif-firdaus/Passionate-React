import React from "react";

// Import CSS Styling
import "./input.css";

// Import Section
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Tools from "./Pages/Tools";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Getintouch from "./Pages/Getintouch";
import Footer from "./Pages/Footer";

function App() {
	return (
		<div className="bg-lightbg App dark:bg-darkbg">
			<Navbar />
			<Hero />
			<Tools />
			<About />
			<Expertise />
			<Experience />
			<Projects />
			<Getintouch />
			<Footer />
		</div>
	);
}

export default App;
