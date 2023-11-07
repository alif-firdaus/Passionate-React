import React from "react";

// Import Images
import pic from "../Assets/Images/pic.png";

// Import Icons
import imessage from "../Assets/Icons/imessage.png";
import linkedin from "../Assets/Icons/linkedin.png";
import dribbble from "../Assets/Icons/dribbble.png";
import github from "../Assets/Icons/github.png";
import behance from "../Assets/Icons/behance.png";

const About = () => {
	return (
		<>
			<div
				id="about"
				className="relative w-full h-auto pt-20 lg:pt-44 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl"
			>
				{/* About Title */}
				<h1 className="text-5xl font-semibold text-center text-black lg:text-[70px] xl:text-[80px] lg:px-12 md:text-6xl dark:text-white">
					Delivering results that go{" "}
					<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
						beyond expectations
					</span>{" "}
				</h1>
			</div>

			<div className="flex flex-col pb-40 mt-20 lg:flex-row lg:justify-between lg:items-center lg:gap-12 lg:mt-36 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl">
				{/* About Decoration */}
				<div className="relative flex w-full bg-purple-600 h-fit lg:h-max pt-14 md:pt-16 rounded-3xl">
					<img
						src={pic}
						alt="pic"
						className="relative object-contain w-9/12 h-full lg:w-8/12 md:w-6/12"
					/>
					<div className="absolute bottom-0 w-full px-6 py-6 bg-none h-fit">
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

				{/* About Description */}
				<div className="w-full px-8 pt-9 pb-10 text-left h-fit lg:h-max text-black mt-14 lg:mt-0 flex flex-col dark:text-white rounded-xl border-[1px] dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40">
					<h1 className="text-3xl font-semibold lg:text-4xl xl:text-[50px] xl:leading-none">
						Elevating products to{" "}
						<span className="dark:text-darkprimary text-lightprimary">
							perfection
						</span>
					</h1>
					<p className="mt-8 text-lg font-normal dark:font-light">
						I am Alif Firdaus, a Product Designer and Front-end
						Developer renowned for exceeding expectations with my
						attention to detail and in-depth understanding of the
						harmony between Product Interface and User Experience.
						With my expertise, I am confident to bring your ideas to
						life!
					</p>
					{/* Social Links */}
					<div className="flex items-center gap-5 mt-11">
						{/* Linkedin */}
						<div className="items-center justify-center p-[14px] bg-green-700 rounded-lg w-fit h-fit hover:bg-darktertiary duration-300 cursor-pointer">
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
						<div className="items-center justify-center p-[14px] bg-orange-600 rounded-lg w-fit h-fit hover:bg-darktertiary duration-300 cursor-pointer">
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
						<div className="items-center justify-center p-[14px] bg-purple-700 rounded-lg w-fit h-fit hover:bg-darktertiary duration-300 cursor-pointer">
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
						<div className="items-center justify-center p-[14px] bg-blue-700 rounded-lg w-fit h-fit hover:bg-darktertiary duration-300 cursor-pointer">
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
			</div>
		</>
	);
};

export default About;
