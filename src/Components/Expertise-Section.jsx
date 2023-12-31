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
			className="relative w-full h-auto pt-20 pb-40 lg:pt-44 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl"
		>
			{/* Expertise Title */}
			<h1 className="text-5xl lg:text-[70px] xl:text-[80px] lg:px-11 font-semibold text-center text-black md:text-6xl dark:text-white">
				Skillset that propels my path as{" "}
				<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
					Tech-savvy Artist
				</span>{" "}
			</h1>

			{/* Expertise Container 1 */}
			<div className="flex flex-col items-center justify-between pt-20 lg:pt-36 md:flex-row gap-7 lg:gap-6 md:gap-5 h-fit">
				{/* UI/UX Design */}
				<div className="w-full px-8 pb-10 text-black bg-white shadow-2xl pt-9 dark:text-white dark:bg-darksecondary rounded-xl shadow-slate-200 dark:shadow-none">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-purple-700 rounded-md w-fit h-fit">
						<img
							src={uiuxdesign}
							alt="uiuxdesign"
							className="w-6"
						/>
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						UI/UX Design
					</h1>
					<p className="mt-3 text-lg font-light">
						I am highly-skilled at architecting User Interface and
						User Experience for mobile apps and websites.
					</p>
				</div>

				{/* Project Planning */}
				<div className="w-full px-8 pb-10 text-black bg-white shadow-2xl pt-9 dark:text-white dark:bg-darksecondary rounded-xl shadow-slate-200 dark:shadow-none">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-orange-600 rounded-md w-fit h-fit">
						<img src={planning} alt="planning" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Project Planning
					</h1>
					<p className="mt-3 text-lg font-light">
						I tend to create wireframe, user-flow, etc to determine
						intended features and functionalities.
					</p>
				</div>
			</div>

			{/* Expertise Container 2 */}
			<div className="flex flex-col items-center justify-between md:flex-row pt-7 lg:pt-6 md:pt-6 gap-7 lg:gap-6 md:gap-5 h-fit">
				{/* Prototyping */}
				<div className="w-full px-8 pb-10 text-black bg-white shadow-2xl pt-9 dark:text-white dark:bg-darksecondary rounded-xl shadow-slate-200 dark:shadow-none">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-blue-700 rounded-md w-fit h-fit">
						<img
							src={prototyping}
							alt="prototyping"
							className="w-6"
						/>
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Prototyping
					</h1>
					<p className="mt-3 text-lg font-light">
						An interactive and clickable prototype is needed to
						carry out the usability testing and evaluation.
					</p>
				</div>

				{/* Front-end Development */}
				<div className="w-full px-8 pb-10 text-black bg-white shadow-2xl pt-9 dark:text-white dark:bg-darksecondary rounded-xl shadow-slate-200 dark:shadow-none">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-green-700 rounded-md w-fit h-fit">
						<img src={frontend} alt="frontend" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-6 font-semibold">
						Front-end Dev
					</h1>
					<p className="mt-3 text-lg font-light">
						I am skilled in building web-app using React, HTML, CSS
						and other relevant Frameworks.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Expertise;
