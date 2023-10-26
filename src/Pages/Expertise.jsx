import React from "react";
import uiuxdesign from "../Assets/uiuxdesign.png";
import planning from "../Assets/planning.png";
import prototyping from "../Assets/prototyping.png";
import frontend from "../Assets/frontend.png";

const Expertise = () => {
	return (
		<div
			id="expertise"
			className="relative w-full h-auto pt-20 pb-40 px-sectionpl"
		>
			{/* Expertise Title */}
			<h1 className="text-5xl font-semibold text-center text-black dark:text-white">
				Delivering results that go{" "}
				<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
					beyond expectations
				</span>{" "}
			</h1>

			{/* Expertise Container 1 */}
			<div className="flex flex-col items-center justify-between pt-20 gap-7 h-fit">
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
			<div className="flex flex-col items-center justify-between pt-7 gap-7 h-fit">
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
