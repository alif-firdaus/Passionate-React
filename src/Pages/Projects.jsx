import React from "react";

// Import Image
import fixit from "../Assets/Images/Fixit App.png";

const Projects = () => {
	return (
		<div id="projects" className="pb-44 pt-36 px-sectionpxsm">
			{/* Projects Title */}
			<h1 className="text-5xl font-semibold text-center text-black md:text-6xl dark:text-white">
				Featured projects I{" "}
				<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
					have created
				</span>{" "}
				so far
			</h1>

			{/* Projects 1 */}
			<div className="w-full px-8 mt-20 text-white bg-purple-700 py-9 rounded-xl">
				<p className="text-[15px]">FIXIT MOBILE APP</p>
				<h1 className="text-5xl font-semibold mt-7">
					Connecting people with local service provider
				</h1>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<button className="px-5 pt-3 pb-[14px] bg-purple-600 mt-14 rounded-lg text-[16px] w-fit h-fit">
						Case Study coming soon
					</button>
				</a>
				<img
					src={fixit}
					alt="fixit"
					className="object-cover w-full h-auto rounded-lg mt-14"
				/>
			</div>

			{/* Projects 2 */}
			<div className="w-full px-8 text-white bg-orange-600 py-9 mt-7 rounded-xl bg-opacity-90">
				<p className="text-[15px]">AQUA WALLET</p>
				<h1 className="text-5xl font-semibold mt-7">
					Transferring and storing Crypto and NFTs
				</h1>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<button className="px-5 pt-3 pb-[14px] bg-orange-500 mt-14 rounded-lg text-[16px] w-fit h-fit">
						Case Study coming soon
					</button>
				</a>
				<img
					src={fixit}
					alt="fixit"
					className="object-cover w-full h-auto rounded-lg mt-14"
				/>
			</div>

			{/* Projects 3 */}
			<div className="w-full px-8 text-white bg-blue-700 py-9 mt-7 rounded-xl bg-opacity-90">
				<p className="text-[15px]">SWIFTBASKET</p>
				<h1 className="text-5xl font-semibold mt-7">
					Platform to fill customer's daily grocery needs
				</h1>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<button className="px-5 pt-3 pb-[14px] bg-blue-600 mt-14 rounded-lg text-[16px] w-fit h-fit">
						Case Study coming soon
					</button>
				</a>
				<img
					src={fixit}
					alt="fixit"
					className="object-cover w-full h-auto rounded-lg mt-14"
				/>
			</div>

			{/* Projects 4 */}
			<div className="w-full px-8 text-white bg-green-700 py-9 mt-7 rounded-xl bg-opacity-90">
				<p className="text-[15px]">E-COMMERCE BUILDER</p>
				<h1 className="text-5xl font-semibold mt-7">
					Building e-commerce and selling online
				</h1>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<button className="px-5 pt-3 pb-[14px] bg-green-600 mt-14 rounded-lg text-[16px] w-fit h-fit">
						Case Study coming soon
					</button>
				</a>
				<img
					src={fixit}
					alt="fixit"
					className="object-cover w-full h-auto rounded-lg mt-14"
				/>
			</div>
		</div>
	);
};

export default Projects;
