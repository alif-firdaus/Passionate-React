import React from "react";

// Import CSS Styling
import "./input.css";

// Import Section
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero-Section";
import Tools from "./Components/Tools-Section";
import About from "./Components/About-Section";
import Expertise from "./Components/Expertise-Section";
import Experience from "./Components/Experience-Section";
import Projects from "./Components/Project-Section";
import Getintouch from "./Components/Getintouch-Section";
import Footer from "./Components/Footer";

const App = () => {
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
};

export default App;
