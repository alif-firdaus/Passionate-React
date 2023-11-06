import React from "react";

// Import Images
import pattern3 from "../Assets/Images/pattern3.png";
import pattern4 from "../Assets/Images/pattern4.png";

// Import Icons
import linkedin from "../Assets/Icons/linkedin.png";
import dribbble from "../Assets/Icons/dribbble.png";
import github from "../Assets/Icons/github.png";
import behance from "../Assets/Icons/behance.png";

const Footer = () => {
	return (
		<>
			<div
				id="footer"
				className="relative w-full h-auto pb-12 pt-14 lg:pt-20 border-t-[1px] dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40 backdrop-blur-lg"
			>
				<img
					src={pattern4}
					alt="pattern4"
					className="absolute bottom-0 block w-screen origin-bottom-right h-80 opacity-20 lg:hidden"
				/>
				{/* Footer Title */}
				<div className="flex flex-col justify-between px-sectionpxsm lg:px-sectionpxlg lg:flex-row">
					<div className="flex flex-col lg:z-10">
						<div className="flex items-center font-semibold cursor-pointer text-[24px] pb-[2px] dark:text-white text-black">
							Passionate
						</div>

						{/* Footer Description */}
						<p className="mt-2 text-black lg:mt-4 dark:text-white">
							Crafting pixels to make dreams come true
						</p>

						{/* Footer Socials */}
						<div className="flex gap-5 mt-7">
							{/* Linkedin */}
							<div className="items-center justify-center p-[14px] dark:bg-darktertiary bg-purple-700 rounded-lg w-fit h-fit dark:bg-opacity-60 cursor-pointer dark:hover:bg-green-700 hover:bg-darktertiary dark:duration-300">
								<a
									href="https://www.linkedin.com/in/aliffirdaus97/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={linkedin}
										alt="linkedin"
										className="w-5"
									/>
								</a>
							</div>

							{/* Dribbble */}
							<div className="items-center justify-center p-[14px] dark:bg-darktertiary bg-orange-600 rounded-lg w-fit h-fit dark:bg-opacity-60 cursor-pointer dark:hover:bg-orange-600 hover:bg-darktertiary dark:duration-300">
								<a
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={dribbble}
										alt="dribbble"
										className="w-5"
									/>
								</a>
							</div>

							{/* Github */}
							<div className="items-center justify-center p-[14px] dark:bg-darktertiary bg-blue-700 rounded-lg w-fit h-fit dark:bg-opacity-60 cursor-pointer dark:hover:bg-purple-700 hover:bg-darktertiary dark:duration-300">
								<a
									href="https://github.com/alif-firdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={github}
										alt="github"
										className="w-5"
									/>
								</a>
							</div>

							{/* Behance */}
							<div className="items-center justify-center p-[14px] dark:bg-darktertiary bg-green-700 rounded-lg w-fit h-fit dark:bg-opacity-60 cursor-pointer dark:hover:bg-blue-700 hover:bg-darktertiary duration-300">
								<a
									href="https://www.behance.net/aliffirdaus97"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={behance}
										alt="behance"
										className="w-5"
									/>
								</a>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className="flex flex-col mt-16 lg:mt-0">
						<div className="flex items-center font-semibold cursor-pointer text-[22px] lg:text-[18px] pb-[2px] dark:text-white text-black">
							Navigation
						</div>

						{/* Navigation Links */}
						<div className="flex flex-col gap-4 mt-5 lg:z-10">
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black cursor-pointer">
								<a href="#home">Home</a>
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black cursor-pointer">
								<a href="#about">About</a>
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black cursor-pointer">
								<a href="#expertise">Expertise</a>
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black cursor-pointer">
								<a href="#experience">Experience</a>
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black cursor-pointer">
								<a href="#projects">Projects</a>
							</p>
						</div>
					</div>

					{/* Connect */}
					<div className="flex flex-col mt-16 lg:mt-0">
						<div className="flex items-center font-semibold cursor-pointer text-[22px] lg:text-[18px] pb-[2px] dark:text-white text-black">
							Connect
						</div>

						{/* Connect List */}
						<div className="flex flex-col gap-4 mt-5">
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black">
								+62 813-3666-4586
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black">
								www.aliffirdaus.com
							</p>
							<p className="text-[18px] lg:text-[16px] dark:text-white text-black">
								aliffirdaus@petaniweb.com
							</p>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="w-full pt-10 mt-16 border-t-[1px] dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40 px-sectionpxsm lg:px-sectionpxlg">
					<p className="text-[18px] lg:text-[16px] dark:text-white text-black">
						&#169; Passionate Personal Website
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
