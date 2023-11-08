import React from "react";

// React Router
import { useNavigate } from "react-router";

// Navbar
import Navbar from "../Navbar";
// Footer
import Footer from "../Footer";

// Import Images
import fixit from "../../Assets/Images/Fixit App.png";

// Import HeroIcons
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-lightbg dark:bg-darkbg">
			<Navbar />
			<div className="relative w-full h-auto pt-20 lg:pt-32 pb-44 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl">
				{/* Projects Title */}
				<h1 className="text-5xl lg:text-[70px] xl:text-[80px] font-semibold text-center text-black md:text-6xl dark:text-white xl:px-10">
					Featured works
				</h1>

				{/* Projects Description */}
				<div className="relative m-auto mt-5 lg:mt-10 md:px-16">
					<p className="text-lg font-normal leading-7 text-center text-black lg:text-[20px] lg:leading-10 dark:font-light dark:text-white">
						For over the years, I have been improving the process to
						deliver outstanding results
					</p>
				</div>

				{/* Projects Container 1 */}
				<div className="flex flex-col justify-between mt-20 lg:mt-32 lg:flex-row lg:items-center gap-7">
					{/* Projects 1 */}
					<div className="flex flex-col justify-between w-full text-white bg-purple-700 px-7 lg:gap-8 py-7 rounded-xl">
						<div className="flex flex-col">
							<p className="text-[15px]">FIXIT MOBILE APP</p>
							<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
								Connecting people with the best local service
								providers
							</h1>
							<button
								className="px-5 flex justify-between gap-4 items-center pt-3 pb-[14px] bg-purple-600 mt-14 rounded-lg text-[16px] w-fit h-fit hover:gap-6 duration-300"
								onClick={() =>
									navigate("/projects-fixit-mobile-app")
								}
							>
								View Case Study
								<ArrowLongRightIcon className="h-6 text-white" />
							</button>
						</div>
						<div className="flex w-full mt-14 lg:mt-7">
							<img
								src={fixit}
								alt="fixit"
								className="object-cover w-full h-auto rounded-lg"
							/>
						</div>
					</div>

					{/* Projects 2 */}
					<div className="flex flex-col justify-between w-full text-white bg-orange-600 px-7 lg:gap-8 py-7 rounded-xl bg-opacity-90">
						<div className="flex flex-col">
							<p className="text-[15px]">AQUA WALLET</p>
							<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
								Transferring, and storing Crypto and NFT Assets
							</h1>
							<button
								className="px-5 flex justify-between gap-4 items-center pt-3 pb-[14px] bg-orange-500 mt-14 rounded-lg text-[16px] w-fit h-fit hover:gap-6 duration-300"
								onClick={() =>
									navigate("/projects-aqua-wallet")
								}
							>
								View Case Study
								<ArrowLongRightIcon className="h-6 text-white" />
							</button>
						</div>
						<div className="flex w-full mt-14 lg:mt-7">
							<img
								src={fixit}
								alt="fixit"
								className="object-cover w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</div>
				{/* Projects Container 2 */}
				<div className="flex flex-col justify-between mt-7 lg:mt-8 lg:flex-row lg:items-center gap-7">
					{/* Projects 3 */}
					<div className="flex flex-col justify-between w-full text-white bg-blue-700 px-7 lg:gap-8 py-7 rounded-xl">
						<div className="flex flex-col">
							<p className="text-[15px]">SWIFTBASKET</p>
							<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
								Platform to fill customer's daily grocery needs
							</h1>
							<button
								className="px-5 flex justify-between gap-4 items-center pt-3 pb-[14px] bg-blue-600 mt-14 rounded-lg text-[16px] w-fit h-fit hover:gap-6 duration-300"
								onClick={() =>
									navigate("/projects-swiftbasket")
								}
							>
								View Case Study
								<ArrowLongRightIcon className="h-6 text-white" />
							</button>
						</div>
						<div className="flex w-full mt-14 lg:mt-7">
							<img
								src={fixit}
								alt="fixit"
								className="object-cover w-full h-auto rounded-lg"
							/>
						</div>
					</div>

					{/* Projects 4 */}
					<div className="flex flex-col justify-between w-full text-white bg-green-700 px-7 lg:gap-8 py-7 rounded-xl bg-opacity-90">
						<div className="flex flex-col">
							<p className="text-[15px]">E-COMMERCE BUILDER</p>
							<h1 className="text-5xl font-semibold mt-7 lg:mt-10">
								Building custom e-commerce and selling online
							</h1>
							<button
								className="px-5 flex justify-between gap-4 items-center pt-3 pb-[14px] bg-green-600 mt-14 rounded-lg text-[16px] w-fit h-fit hover:gap-6 duration-300"
								onClick={() =>
									navigate("/projects-ecommerce-builder")
								}
							>
								View Case Study
								<ArrowLongRightIcon className="h-6 text-white" />
							</button>
						</div>
						<div className="flex w-full mt-14 lg:mt-7">
							<img
								src={fixit}
								alt="fixit"
								className="object-cover w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
