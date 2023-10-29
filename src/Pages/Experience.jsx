import React from "react";

const Experience = () => {
	return (
		<div
			id="experience"
			className="relative w-full h-auto pb-36 pt-28 bg-gradient-to-br from-purple-800 to-purple-950 px-sectionpxsm"
		>
			{/* Experience Title */}
			<h1 className="text-5xl font-semibold text-center text-white md:text-6xl">
				My career path as Tech-savvy Artist
			</h1>

			{/* Experience Container 1 */}
			<div className="flex flex-col items-center justify-between pt-20 md:flex-row gap-7 md:gap-5 h-fit">
				{/* Experience 1 */}
				<div className="w-full px-6 py-5 text-white bg-purple-700 bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-between">
						<p className="text-white text-[15px]">JAN3</p>
						<p className="text-white text-[15px]">CONTRACT</p>
					</div>
					<h1 className="mt-14 text-[27px] font-semibold">
						UI/UX Designer
					</h1>
					<h1 className="mt-2 text-md">
						Improving and customizing our Crypto Wallet Mobile App
					</h1>
					<div className="px-4 pt-[6px] pb-[7px] bg-slate-50 bg-opacity-20 mt-8 rounded-lg w-fit h-fit">
						<p className="text-white text-md">United States</p>
					</div>
					<p className="text-white mt-16 text-[16px]">
						May 2023 - Present
					</p>
				</div>

				{/* Experience 2 */}
				<div className="w-full px-6 py-5 text-white bg-purple-700 bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-between">
						<p className="text-white text-[15px]">OHCEANS</p>
						<p className="text-white text-[15px]">FULL-TIME</p>
					</div>
					<h1 className="mt-14 text-[27px] font-semibold">
						Product Designer
					</h1>
					<h1 className="mt-2 text-md">
						Creating Mobile Apps related to vessels and Marine
						Affairs
					</h1>
					<div className="px-4 pt-[6px] pb-[7px] bg-slate-50 bg-opacity-20 mt-8 rounded-lg w-fit h-fit">
						<p className="text-white text-md">Singapore</p>
					</div>
					<p className="text-white mt-16 text-[16px]">
						Nov 2022 - May 2023
					</p>
				</div>
			</div>

			{/* Experience Container 2 */}
			<div className="flex flex-col items-center justify-between md:flex-row pt-7 md:pt-6 gap-7 md:gap-5 h-fit">
				{/* Experience 3 */}
				<div className="w-full px-6 py-5 text-white bg-purple-700 bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-between">
						<p className="text-white text-[15px]">IVOSIGHTS</p>
						<p className="text-white text-[15px]">FULL-TIME</p>
					</div>
					<h1 className="mt-14 text-[27px] font-semibold">
						UI/UX Designer
					</h1>
					<h1 className="mt-2 text-md">
						Creating Mobile Apps to empower Digital Community
						Platforms
					</h1>
					<div className="px-4 pt-[6px] pb-[7px] bg-slate-50 bg-opacity-20 mt-8 rounded-lg w-fit h-fit">
						<p className="text-white text-md">Jakarta</p>
					</div>
					<p className="text-white mt-16 text-[16px]">
						Jul 2021 - Jun 2022
					</p>
				</div>

				{/* Experience 4 */}
				<div className="w-full px-6 py-5 text-white bg-purple-700 bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-between">
						<p className="text-white text-[15px]">PETANIWEB</p>
						<p className="text-white text-[15px]">FOUNDER</p>
					</div>
					<h1 className="mt-14 text-[27px] font-semibold">
						Chief Product Officer
					</h1>
					<h1 className="mt-2 text-md">
						Building a product which connects people to professional
						service providers
					</h1>
					<div className="px-4 pt-[6px] pb-[7px] bg-slate-50 bg-opacity-20 mt-8 rounded-lg w-fit h-fit">
						<p className="text-white text-md">Malang</p>
					</div>
					<p className="text-white mt-16 text-[16px]">
						Jul 2020 - Present
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
