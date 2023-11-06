import React from "react";

// Import HeroIcons
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Experience = () => {
	return (
		<div
			id="experience"
			className="relative w-full h-auto pt-32 pb-40 lg:pt-44 lg:pb-64 dark:bg-darksecondary bg-softblue px-sectionpxsm lg:px-sectionpxlg"
		>
			{/* Experience Title */}
			<h1 className="text-5xl font-semibold text-center dark:text-white text-black md:text-6xl lg:text-[70px]">
				My career path as{" "}
				<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
					Tech-savvy Artist
				</span>{" "}
			</h1>

			<div className="flex flex-col items-center justify-between pt-20 lg:flex-row lg:pt-36 md:flex-row gap-7 lg:gap-5 md:gap-5 h-fit">
				{/* Experience 1 */}
				<div className="w-full pb-8 text-black bg-white lg:pb-7 px-7 lg:px-5 pt-7 lg:pt-5 dark:text-white rounded-xl dark:bg-darktertiary">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-purple-500 rounded lg:w-4 lg:h-4"></div>
						<p className="text-xl font-medium lg:text-lg">JAN3</p>
					</div>
					<h1 className="text-[40px] lg:text-3xl font-medium mt-14 leading-tight">
						UI/UX Designer
					</h1>
					<p className="text-lg font-light lg:text-[15px] mt-14">
						May 2023 - Present
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg dark:bg-white bg-black">
						<p className="text-[17px] lg:text-[15px] font-medium text-white dark:text-black">
							United States
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-300 dark:border-slate-500">
						<p className="text-[17px] lg:text-[15px] font-medium dark:text-white text-black">
							Contract
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-purple-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Improving and maintaining our Crypto E-wallet
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-purple-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Developing and creating reusable UI assets
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-purple-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Staying in the loop of the latest standards and
							trends
						</p>
					</div>
				</div>

				{/* Experience 2 */}
				<div className="w-full pb-8 text-white bg-purple-700 lg:pb-7 px-7 lg:px-5 lg:pt-5 pt-7 rounded-xl">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-white rounded lg:w-4 lg:h-4"></div>
						<p className="text-xl font-medium lg:text-lg">
							Ohceans
						</p>
					</div>
					<h1 className="text-[40px] lg:text-3xl font-medium mt-14 leading-tight">
						UI/UX Designer
					</h1>
					<p className="text-lg font-light lg:text-[15px] mt-14">
						Nov 2022 - May 2023
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg bg-white">
						<p className="text-[17px] lg:text-[15px] font-medium text-black">
							Singapore
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-400">
						<p className="text-[17px] lg:text-[15px] font-medium text-white">
							Full-time
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-white" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Developing user-flow, scenarios, and wireframe
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-white" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Work with stakeholders to identify requirements
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-white" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Aligning relevant features with the users' needs
						</p>
					</div>
				</div>

				{/* Experience 3 */}
				<div className="w-full pb-8 text-black bg-white lg:pb-7 px-7 lg:px-5 lg:pt-5 pt-7 dark:text-white rounded-xl dark:bg-darktertiary">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-blue-500 rounded lg:w-4 lg:h-4"></div>
						<p className="text-xl font-medium lg:text-lg">
							PetaniWeb
						</p>
					</div>
					<h1 className="text-[40px] lg:text-3xl font-medium mt-14 leading-tight">
						CPO & UI/UX
					</h1>
					<p className="text-lg lg:text-[15px] font-light mt-14">
						July 2020 - Present
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg dark:bg-white bg-black">
						<p className="text-[17px] lg:text-[15px] font-medium text-white dark:text-black">
							Indonesia
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-300 dark:border-slate-500">
						<p className="text-[17px] lg:text-[15px] font-medium dark:text-white text-black">
							Self-employed
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-blue-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Building our MVP mobile app &#40;fixit.id&#41;
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-blue-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Definining strategy and identifying market
							opportunities
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] lg:w-5 text-blue-500" />
						</div>
						<p className="text-lg lg:text-[15px] font-light">
							Aligning relevant features with the users' needs
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
