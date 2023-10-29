import React from "react";

// Import Image
import fixit from "../Assets/Images/Fixit App.png";

const Projects = () => {
	return (
		<div id="projects" className="pb-44 pt-36 px-sectionpl">
			{/* Projects Title */}
			<h1 className="text-5xl font-semibold text-center text-black md:text-6xl dark:text-white">
				Featured projects I{" "}
				<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
					have created
				</span>{" "}
				so far
			</h1>

			{/* Projects Container 1 */}
			<div className="flex flex-col items-center justify-between pt-20 gap-7 h-fit">
				{/* Projects 1 */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<img
						src={fixit}
						alt="fixit"
						className="relative object-cover rounded-t-lg"
					/>
					<h1 className="mt-6 text-[25px] font-semibold">
						Fixit Mobile App
					</h1>
					<div className="w-10 h-[2px] mt-7 mb-9 bg-purple-400 rounded-full"></div>
					<p className="mt-3 text-lg font-light">
						This platform is where the users can find and recruit
						professional service providers for their needs.
					</p>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<button className="px-5 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey font-medium mt-8 rounded-lg text-[16px] w-fit h-fit">
							View Case Study
						</button>
					</a>
				</div>

				{/* Projects 2 */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<img
						src={fixit}
						alt="fixit"
						className="relative object-cover rounded-t-lg"
					/>
					<h1 className="mt-6 text-[25px] font-semibold">
						AQUA Crypto Wallet
					</h1>
					<div className="w-10 h-[2px] mt-7 mb-9 bg-purple-400 rounded-full"></div>
					<p className="mt-3 text-lg font-light">
						This platform is where the users can find and recruit
						professional service providers for their needs.
					</p>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<button className="px-5 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey font-medium mt-8 rounded-lg text-[16px] w-fit h-fit">
							View Case Study
						</button>
					</a>
				</div>
			</div>

			{/* Projects Container 2 */}
			<div className="flex flex-col items-center justify-between pt-7 gap-7 h-fit">
				{/* Projects 3 */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<img
						src={fixit}
						alt="fixit"
						className="relative object-cover rounded-t-lg"
					/>
					<h1 className="mt-6 text-[25px] font-semibold">
						Groceries Mobile App
					</h1>
					<div className="w-10 h-[2px] mt-7 mb-9 bg-purple-400 rounded-full"></div>
					<p className="mt-3 text-lg font-light">
						This platform is where the users can find and recruit
						professional service providers for their needs.
					</p>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<button className="px-5 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey font-medium mt-8 rounded-lg text-[16px] w-fit h-fit">
							View Case Study
						</button>
					</a>
				</div>

				{/* Projects 4 */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<img
						src={fixit}
						alt="fixit"
						className="relative object-cover rounded-t-lg"
					/>
					<h1 className="mt-6 text-[25px] font-semibold">
						Travel Website
					</h1>
					<div className="w-10 h-[2px] mt-7 mb-9 bg-purple-400 rounded-full"></div>
					<p className="mt-3 text-lg font-light">
						This platform is where the users can find and recruit
						professional service providers for their needs.
					</p>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<button className="px-5 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey font-medium mt-8 rounded-lg text-[16px] w-fit h-fit">
							View Case Study
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
