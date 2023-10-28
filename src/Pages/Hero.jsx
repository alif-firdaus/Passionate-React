import React from "react";

const Hero = () => {
	return (
		<div
			id="hero"
			className="pt-20 pb-20 lg:pb-36 lg:pt-24 h-fit px-sectionpl"
		>
			{/* Hero Identity */}
			<div className="relative px-6 py-2 m-auto align-middle rounded-full dark:bg-accent bg-lightblue w-fit h-fit">
				<p className="text-center text-[16px] dark:font-medium font-semibold text-primary">
					Personal Website
				</p>
			</div>

			{/* Hero Headline */}
			<div className="relative m-auto mt-9 lg:mt-12 lg:px-52 px">
				<h1 className="text-5xl font-semibold text-center text-black lg:text-[86px] md:text-6xl dark:text-white">
					Crafting pixels to make{" "}
					<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
						dreams
					</span>{" "}
					come true
				</h1>
			</div>

			{/* Hero Description */}
			<div className="relative m-auto mt-8 lg:mt-11 lg:px-[300px]">
				<p className="text-lg font-normal leading-8 text-center text-black lg:text-[20px] lg:leading-10 dark:font-light dark:text-white">
					A <span className="text-primary">tech-savvy artist</span>{" "}
					crafting interfaces for over 4 years, blending the art of
					Product Design with Front-end Development.
				</p>
			</div>

			{/* Main Button */}
			<div className="flex justify-center mt-14 lg:mt-16">
				<button className="pt-3 pb-[15px] text-[17px] font-medium dark:text-black text-white dark:bg-white bg-black rounded-xl w-fit h-fit px-10">
					Let's talk!
				</button>
			</div>
		</div>
	);
};

export default Hero;
