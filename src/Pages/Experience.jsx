import React from "react";
import About from "./About";

const Experience = () => {
	return (
		<div
			id="experience"
			className="relative w-full h-auto pt-32 pb-40 lg:pt-44 lg:pb-64 dark:bg-darksecondary bg-softblue px-sectionpxsm lg:px-sectionpxlg"
		>
			{/* Experience Title */}
			<h1 className="text-5xl font-semibold text-center dark:text-white text-black md:text-6xl lg:text-[80px]">
				My career path as{" "}
				<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
					Tech-savvy Artist
				</span>{" "}
			</h1>

			{/* Experience 1 */}
			<div className="w-full px-8 pb-10 mt-20 text-black bg-white dark:text-white dark:bg-darktertiary pt-9 rounded-xl lg:mt-40 shadow-slate-200 dark:shadow-none">
				<div className="flex items-center justify-between">
					<p className="text-[15px]">JAN3</p>
					<p className="text-[15px]">CONTRACT</p>
				</div>
				<h1 className="mt-14 text-[27px] font-semibold">
					UI/UX Designer
				</h1>
				<h1 className="mt-2 text-md">
					Improving and customizing our Crypto Wallet Mobile App
				</h1>
				<div className="px-4 pt-[6px] pb-[7px] dark:bg-slate-50 dark:bg-opacity-10 bg-lightbg mt-8 rounded-lg w-fit h-fit">
					<p className="text-md">United States</p>
				</div>
				<p className="mt-16 text-[16px]">May 2023 - Present</p>
			</div>

			{/* Experience 2 */}
			<div className="w-full px-8 pb-10 text-black bg-white mt-7 dark:text-white dark:bg-darktertiary pt-9 rounded-xl lg:mt-9 shadow-slate-200 dark:shadow-none">
				<div className="flex items-center justify-between">
					<p className="text-[15px]">OHCEANS</p>
					<p className="text-[15px]">FULL-TIME</p>
				</div>
				<h1 className="mt-14 text-[27px] font-semibold">
					Product Designer
				</h1>
				<h1 className="mt-2 text-md">
					Creating Mobile Apps related to vessels and Marine Affairs
				</h1>
				<div className="px-4 pt-[6px] pb-[7px] dark:bg-slate-50 dark:bg-opacity-10 bg-lightbg mt-8 rounded-lg w-fit h-fit">
					<p className="text-md">Singapore</p>
				</div>
				<p className="mt-16 text-[16px]">Nov 2022 - May 2023</p>
			</div>

			{/* Experience 3 */}
			<div className="w-full px-8 pb-10 text-black bg-white mt-7 dark:text-white dark:bg-darktertiary pt-9 rounded-xl lg:mt-9 shadow-slate-200 dark:shadow-none">
				<div className="flex items-center justify-between">
					<p className="text-[15px]">IVOSIGHTS</p>
					<p className="text-[15px]">FULL-TIME</p>
				</div>
				<h1 className="mt-14 text-[27px] font-semibold">
					UI/UX Designer
				</h1>
				<h1 className="mt-2 text-md">
					Creating Mobile Apps to empower Digital Community Platforms
				</h1>
				<div className="px-4 pt-[6px] pb-[7px] dark:bg-slate-50 dark:bg-opacity-10 bg-lightbg mt-8 rounded-lg w-fit h-fit">
					<p className="text-md">Jakarta</p>
				</div>
				<p className="mt-16 text-[16px]">Jul 2021 - Jun 2022</p>
			</div>

			{/* Experience 4 */}
			<div className="w-full px-8 pb-10 text-black bg-white mt-7 dark:text-white dark:bg-darktertiary pt-9 rounded-xl lg:mt-9 shadow-slate-200 dark:shadow-none">
				<div className="flex items-center justify-between">
					<p className="text-[15px]">PETANIWEB</p>
					<p className="text-[15px]">FOUNDER</p>
				</div>
				<h1 className="mt-14 text-[27px] font-semibold">
					Chief Product Officer
				</h1>
				<h1 className="mt-2 text-md">
					Building a product which connects people to professional
					service providers
				</h1>
				<div className="px-4 pt-[6px] pb-[7px] dark:bg-slate-50 dark:bg-opacity-10 bg-lightbg mt-8 rounded-lg w-fit h-fit">
					<p className="text-md">Malang</p>
				</div>
				<p className="mt-16 text-[16px]">Jul 2020 - Present</p>
			</div>
		</div>
	);
};

export default Experience;
