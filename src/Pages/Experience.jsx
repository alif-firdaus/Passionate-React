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

			<div className="flex flex-col items-center justify-between pt-20 lg:flex-row lg:pt-36 md:flex-row gap-7 lg:gap-6 md:gap-5 h-fit">
				{/* Experience 1 */}
				<div className="w-full pb-8 text-black bg-white px-7 pt-7 dark:text-white rounded-xl dark:bg-darktertiary">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-purple-500 rounded"></div>
						<p className="text-xl font-medium">JAN3</p>
					</div>
					<h1 className="text-[40px] font-medium mt-14 leading-tight">
						User Interface Designer
					</h1>
					<p className="text-lg font-light mt-14">
						July 2020 - Present
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg dark:bg-white bg-black">
						<p className="text-[17px] font-medium text-white dark:text-black">
							United States
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-300 dark:border-slate-500">
						<p className="text-[17px] font-medium dark:text-white text-black">
							Contract
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-purple-500" />
						</div>
						<p className="text-lg font-light">
							Building our MVP product &#40;fixit.id&#41;
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-purple-500" />
						</div>
						<p className="text-lg font-light">
							Identifying market opportunities
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-purple-500" />
						</div>
						<p className="text-lg font-light">
							Aligning features with the users' needs
						</p>
					</div>
				</div>

				{/* Experience 2 */}
				<div className="w-full pb-8 text-white bg-purple-700 px-7 pt-7 rounded-xl">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-white rounded"></div>
						<p className="text-xl font-medium">Ohceans</p>
					</div>
					<h1 className="text-[40px] font-medium mt-14 leading-tight">
						Product Designer
					</h1>
					<p className="text-lg font-light mt-14">
						July 2020 - Present
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg bg-white">
						<p className="text-[17px] font-medium text-black">
							Singapore
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-400">
						<p className="text-[17px] font-medium text-white">
							Full-time
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-white" />
						</div>
						<p className="text-lg font-light">
							Building our MVP product &#40;fixit.id&#41;
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-white" />
						</div>
						<p className="text-lg font-light">
							Identifying market opportunities
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-white" />
						</div>
						<p className="text-lg font-light">
							Aligning features with the users' needs
						</p>
					</div>
				</div>

				{/* Experience 3 */}
				<div className="w-full pb-8 text-black bg-white px-7 pt-7 dark:text-white rounded-xl dark:bg-darktertiary">
					<div className="flex items-center justify-start gap-5">
						<div className="w-5 h-5 bg-blue-500 rounded"></div>
						<p className="text-xl font-medium">PetaniWeb</p>
					</div>
					<h1 className="text-[40px] font-medium mt-14 leading-tight">
						Chief Product Officer
					</h1>
					<p className="text-lg font-light mt-14">
						July 2020 - Present
					</p>
					<div className="items-center w-full pt-3 pb-[15px] mt-7 text-center rounded-lg dark:bg-white bg-black">
						<p className="text-[17px] font-medium text-white dark:text-black">
							Indonesia
						</p>
					</div>
					<div className="items-center w-full pt-3 pb-[15px] mt-4 text-center rounded-lg border-[1px] border-slate-300 dark:border-slate-500">
						<p className="text-[17px] font-medium dark:text-white text-black">
							Self-employed
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-16">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-blue-500" />
						</div>
						<p className="text-lg font-light">
							Building our MVP product &#40;fixit.id&#41;
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-blue-500" />
						</div>
						<p className="text-lg font-light">
							Identifying market opportunities
						</p>
					</div>
					<div className="flex items-center justify-start gap-4 mt-4">
						<div className="flex self-start pt-1">
							<CheckCircleIcon className="w-[22px] text-blue-500" />
						</div>
						<p className="text-lg font-light">
							Aligning features with the users' needs
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
