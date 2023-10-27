import React from "react";
import picc from "../Assets/picc.png";
import imessage from "../Assets/imessage.png";
import linkedin from "../Assets/linkedin.png";
import dribbble from "../Assets/dribbble.png";
import github from "../Assets/github.png";
import behance from "../Assets/behance.png";

const About = () => {
	return (
		<>
			<div
				id="about"
				className="relative w-full h-auto pt-20 px-sectionpl"
			>
				{/* About Title */}
				<h1 className="text-5xl font-semibold text-center text-black md:text-6xl dark:text-white">
					Delivering results that go{" "}
					<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
						beyond expectations
					</span>{" "}
				</h1>
			</div>

			{/* About Decoration */}
			<div className="mt-20 px-sectionpl">
				<div className="relative flex bg-purple-600 pt-14 md:pt-16 h-fit rounded-3xl">
					<img
						src={picc}
						alt="picc"
						className="relative object-contain w-9/12 h-full origin-bottom-left md:w-6/12"
					/>
					<div className="absolute bottom-0 w-full px-6 py-6 md:hidden bg-none h-fit">
						<div className="px-4 py-3 text-black rounded-xl backdrop-blur-lg bg-slate-50 bg-opacity-70">
							<div className="flex items-center justify-between">
								<div className="flex items-center justify-between gap-3">
									<img
										src={imessage}
										alt="imessage"
										className="w-[18px]"
									/>
									<h1 className="text-sm font-medium text-gray-600">
										MESSAGES
									</h1>
								</div>
								<h1 className="text-sm font-medium text-gray-500">
									now
								</h1>
							</div>
							<p className="mt-2 font-medium text-md">
								Alif Firdaus
							</p>
							<p className="font-normal text-md">
								Hi there! get to know about me 👋
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* About Line */}
			<div className="flex justify-center mt-20 px-sectionpl">
				<div className="w-20 h-1 bg-black rounded-full dark:bg-white"></div>
			</div>

			{/* About Description */}
			<div className="px-sectionpl">
				<p className="z-40 mt-16 text-lg font-normal leading-8 text-center text-black dark:font-light dark:text-white">
					I am Alif Firdaus, a skilled Product Designer and Front-end
					Developer renowned for exceeding expectations with my
					meticulous attention to detail and in-depth understanding of
					the harmony between Product Interface and User Experience.
					With my expertise, I am confident to bring your ideas to
					life!
				</p>
			</div>

			{/* Socials Container 2 */}
			<div className="flex flex-col items-center justify-between pt-20 md:flex-row gap-7 md:gap-5 h-fit px-sectionpl">
				{/* Linkedin */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-green-700 rounded-md w-fit h-fit">
						<img src={linkedin} alt="linkedin" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-5 font-semibold">Linkedin</h1>
					<p className="mt-2 text-lg font-normal dark:font-light">
						See my career path on Linkedin
					</p>
					<a
						href="https://www.linkedin.com/in/aliffirdaus97/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-6 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey mt-8 font-medium rounded-lg text-[16px] w-fit h-fit">
							Check out
						</button>
					</a>
				</div>

				{/* Dribbble */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-orange-600 rounded-md w-fit h-fit">
						<img src={dribbble} alt="dribble" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-5 font-semibold">Dribbble</h1>
					<p className="mt-2 text-lg font-normal dark:font-light">
						See my Portfolio on Dribbble
					</p>
					<a
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-6 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey mt-8 font-medium rounded-lg text-[16px] w-fit h-fit">
							Check out
						</button>
					</a>
				</div>
			</div>

			{/* Socials Container 2 */}
			<div className="flex flex-col items-center justify-between pb-40 md:flex-row pt-7 md:pt-5 gap-7 md:gap-5 h-fit px-sectionpl">
				{/* Github */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-purple-700 rounded-md w-fit h-fit">
						<img src={github} alt="github" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-5 font-semibold">Github</h1>
					<p className="mt-2 text-lg font-normal dark:font-light">
						See my Repositories on Github
					</p>
					<a
						href="https://github.com/alif-firdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-6 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey mt-8 font-medium rounded-lg text-[16px] w-fit h-fit">
							Check out
						</button>
					</a>
				</div>

				{/* Behance */}
				<div className="w-full px-6 py-5 text-black bg-white dark:text-white dark:bg-accent rounded-xl">
					<div className="flex items-center justify-center px-[14px] py-[14px] bg-blue-700 rounded-md w-fit h-fit">
						<img src={behance} alt="behance" className="w-6" />
					</div>
					<h1 className="text-[23px] mt-5 font-semibold">Behance</h1>
					<p className="mt-2 text-lg font-normal dark:font-light">
						See my Portfolio on Behance
					</p>
					<a
						href="https://www.behance.net/aliffirdaus97"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="px-6 pt-3 pb-[14px] dark:bg-[#21254c] bg-lightgrey mt-8 font-medium rounded-lg text-[16px] w-fit h-fit">
							Check out
						</button>
					</a>
				</div>
			</div>
		</>
	);
};

export default About;
