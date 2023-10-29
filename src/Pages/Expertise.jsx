import React from "react";

// Import Icons
import uiuxdesign from "../Assets/Icons/uiuxdesign.png";
import planning from "../Assets/Icons/planning.png";
import prototyping from "../Assets/Icons/prototyping.png";
import frontend from "../Assets/Icons/frontend.png";

const Expertise = () => {
	return (
		<div
			id="expertise"
			className="relative w-full h-auto pt-20 pb-40 px-sectionpxsm"
		>
			{/* Expertise Title */}
			<h1 className="text-5xl font-semibold text-center text-black md:text-6xl dark:text-white">
				Skillset that propels my path as{" "}
				<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
					Tech-savvy Artist
				</span>{" "}
			</h1>

			{/* Expertise Container 1 */}
			<div className="flex flex-col items-center justify-between pt-20 md:flex-row gap-7 md:gap-5 h-fit">
				{/* UI/UX Design */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] dark:bg-[#21254c] bg-lightgrey rounded-md w-fit h-fit">
						<img
							src={uiuxdesign}
							alt="uiuxdesign"
							className="w-6"
						/>
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						UI/UX Design
					</h1>
					<p className="mt-3 text-lg font-normal dark:font-light">
						I am highly-skilled at architecting User Interface and
						User Experience for mobile apps and websites.
					</p>
				</div>

				{/* Project Planning */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] dark:bg-[#21254c] bg-lightgrey rounded-md w-fit h-fit">
						<img src={planning} alt="planning" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Project Planning
					</h1>
					<p className="mt-3 text-lg font-normal dark:font-light">
						I tend to create wireframe, user-flow, and user-persona
						to determine intended features and functionality.
					</p>
				</div>
			</div>

			{/* Expertise Container 2 */}
			<div className="flex flex-col items-center justify-between md:flex-row pt-7 md:pt-6 gap-7 md:gap-5 h-fit">
				{/* Prototyping */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] dark:bg-[#21254c] bg-lightgrey rounded-md w-fit h-fit">
						<img
							src={prototyping}
							alt="prototyping"
							className="w-6"
						/>
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Prototyping
					</h1>
					<p className="mt-3 text-lg font-normal dark:font-light">
						An interactive and clickable prototype is needed to
						carry out the usability testing and evaluation.
					</p>
				</div>

				{/* Front-end Development */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] dark:bg-[#21254c] bg-lightgrey rounded-md w-fit h-fit">
						<img src={frontend} alt="frontend" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Front-end Development
					</h1>
					<p className="mt-3 text-lg font-normal dark:font-light">
						I am skilled in building dynamic web-app using React,
						HTML, CSS and any other relevant Frameworks.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Expertise;
