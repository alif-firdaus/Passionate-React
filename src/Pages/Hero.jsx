import React from "react";

const Hero = () => {
	return (
		<div className="pt-20 pb-20 h-fit px-sectionpl">
			{/* Hero Identity */}
			<div className="relative px-6 py-2 m-auto align-middle rounded-full bg-accent w-fit h-fit">
				<p className="text-center text-[16px] text-primary">
					Product Designer
				</p>
			</div>

			{/* Hero Headline */}
			<div className="relative m-auto mt-9">
				<h1 className="text-5xl font-semibold text-center text-white">
					Crafting pixels to make{" "}
					<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
						dreams
					</span>{" "}
					come true
				</h1>
			</div>

			{/* Hero Description */}
			<div className="relative m-auto mt-8">
				<p className="text-lg font-light leading-8 text-center text-white">
					A <span className="text-primary">tech-savvy artist</span>{" "}
					crafting interfaces for over 4 years, blending the art of
					Product Design with Front-end Development.
				</p>
			</div>

			{/* Main Button */}
			<div className="flex justify-center mt-14">
				<button className="pt-3 pb-[15px] text-[17px] font-medium text-black bg-white rounded-xl w-fit h-fit px-10">
					Let's talk!
				</button>
			</div>
		</div>
	);
};

export default Hero;
