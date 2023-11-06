import React from "react";

// Import React Router
import { useNavigate } from "react-router";

// Import Image
import fixit from "../Assets/Images/Fixit App.png";

const Projects = () => {
	const navigate = useNavigate();

	return (
		<div
			id="projects"
			className="relative w-full h-auto pt-32 pb-40 lg:pt-52 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl"
		>
			{/* Projects Title */}
			<h1 className="text-5xl lg:text-[70px] xl:text-[80px] font-semibold text-center text-black md:text-6xl dark:text-white">
				Featured projects I{" "}
				<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
					have created
				</span>{" "}
				so far
			</h1>

			{/* Projects 1 */}
			<div className="flex flex-col justify-between w-full mt-20 text-white bg-purple-700 px-7 lg:gap-8 lg:flex-row lg:mt-36 py-7 rounded-xl">
				<div className="flex flex-col lg:w-[800px]">
					<p className="text-[15px]">FIXIT MOBILE APP</p>
					<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
						Connecting people with local service provider
					</h1>
					<button
						className="px-5 pt-3 pb-[14px] bg-purple-600 mt-14 rounded-lg text-[16px] w-fit h-fit"
						onClick={() => navigate("/projects-fixit-mobile-app")}
					>
						Case Study coming soon
					</button>
				</div>
				<div className="flex w-full mt-14 lg:mt-0">
					<img
						src={fixit}
						alt="fixit"
						className="object-cover w-full h-auto rounded-lg"
					/>
				</div>
			</div>

			{/* Projects 2 */}
			<div className="flex flex-col justify-between w-full text-white bg-orange-600 px-7 lg:gap-8 lg:flex-row py-7 mt-7 lg:mt-10 rounded-xl bg-opacity-90">
				<div className="flex flex-col lg:w-[800px]">
					<p className="text-[15px]">AQUA WALLET</p>
					<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
						Transferring and storing Crypto and NFTs
					</h1>
					<button
						className="px-5 pt-3 pb-[14px] bg-orange-500 mt-14 rounded-lg text-[16px] w-fit h-fit"
						onClick={() => navigate("/projects-aqua-wallet")}
					>
						Case Study coming soon
					</button>
				</div>
				<div className="flex w-full mt-14 lg:mt-0">
					<img
						src={fixit}
						alt="fixit"
						className="object-cover w-full h-auto rounded-lg"
					/>
				</div>
			</div>

			{/* Projects 3 */}
			<div className="flex flex-col justify-between w-full text-white bg-blue-700 px-7 lg:gap-8 lg:flex-row py-7 mt-7 lg:mt-10 rounded-xl bg-opacity-90">
				<div className="flex flex-col lg:w-[800px]">
					<p className="text-[15px]">SWIFTBASKET</p>
					<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
						Platform to fill customer's daily grocery needs
					</h1>
					<button
						className="px-5 pt-3 pb-[14px] bg-blue-600 mt-14 rounded-lg text-[16px] w-fit h-fit"
						onClick={() => navigate("/projects-swiftbasket")}
					>
						Case Study coming soon
					</button>
				</div>
				<div className="flex w-full mt-14 lg:mt-0">
					<img
						src={fixit}
						alt="fixit"
						className="object-cover w-full h-auto rounded-lg"
					/>
				</div>
			</div>

			{/* Projects 4 */}
			<div className="flex flex-col justify-between w-full text-white bg-green-700 px-7 lg:gap-8 lg:flex-row py-7 mt-7 lg:mt-10 rounded-xl bg-opacity-90">
				<div className="flex flex-col lg:w-[800px]">
					<p className="text-[15px]">E-COMMERCE BUILDER</p>
					<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
						Building e-commerce and selling online
					</h1>
					<button
						className="px-5 pt-3 pb-[14px] bg-green-600 mt-14 rounded-lg text-[16px] w-fit h-fit"
						onClick={() => navigate("/projects-ecommerce-builder")}
					>
						Case Study coming soon
					</button>
				</div>
				<div className="flex w-full mt-14 lg:mt-0">
					<img
						src={fixit}
						alt="fixit"
						className="object-cover w-full h-auto rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
