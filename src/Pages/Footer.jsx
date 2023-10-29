import React from "react";

// Import Icons
import linkedin from "../Assets/Icons/linkedin.png";
import dribbble from "../Assets/Icons/dribbble.png";
import github from "../Assets/Icons/github.png";
import behance from "../Assets/Icons/behance.png";

const Footer = () => {
	return (
		<div
			id="footer"
			className="relative w-full h-auto pb-12 pt-14 bg-gradient-to-br from-purple-800 to-purple-950"
		>
			{/* Footer Title */}
			<div className="px-sectionpxsm">
				<div className="flex items-center font-semibold cursor-pointer text-[24px] pb-[2px] text-white">
					Passionate
				</div>

				{/* Footer Description */}
				<p className="mt-2 text-white">
					Crafting pixels to make dreams come true
				</p>

				{/* Footer Socials */}
				<div className="flex gap-5 mt-7">
					{/* Linkedin */}
					<div className="items-center justify-center p-[14px] bg-purple-700 rounded-lg w-fit h-fit bg-opacity-60">
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
					<div className="items-center justify-center p-[14px] bg-purple-700 rounded-lg w-fit h-fit bg-opacity-60">
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
					<div className="items-center justify-center p-[14px] bg-purple-700 rounded-lg w-fit h-fit bg-opacity-60">
						<a
							href="https://github.com/alif-firdaus"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={github} alt="github" className="w-5" />
						</a>
					</div>

					{/* Behance */}
					<div className="items-center justify-center p-[14px] bg-purple-700 rounded-lg w-fit h-fit bg-opacity-60">
						<a
							href="https://www.behance.net/aliffirdaus97"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={behance} alt="behance" className="w-5" />
						</a>
					</div>
				</div>

				{/* Navigation */}
				<div className="flex items-center mt-16 font-semibold cursor-pointer text-[22px] pb-[2px] text-white">
					Navigation
				</div>

				{/* Navigation Links */}
				<div className="flex flex-col gap-4 mt-5">
					<p className="text-[18px] text-white">Home</p>
					<p className="text-[18px] text-white">About</p>
					<p className="text-[18px] text-white">Expertise</p>
					<p className="text-[18px] text-white">Experience</p>
					<p className="text-[18px] text-white">Projects</p>
				</div>

				{/* Connect */}
				<div className="flex items-center mt-16 font-semibold cursor-pointer text-[22px] pb-[2px] text-white">
					Connect
				</div>

				{/* Connect List */}
				<div className="flex flex-col gap-4 mt-5">
					<p className="text-[18px] text-white">+62 813-3666-4586</p>
					<p className="text-[18px] text-white">
						www.aliffirdaus.com
					</p>
					<p className="text-[18px] text-white">
						aliffirdaus@petaniweb.com
					</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="w-full pt-10 mt-16 border-t-[1px] border-opacity-30 border-slate-50 px-sectionpxsm">
				<p className="text-[18px] text-white">
					&#169; Passionate Personal Website
				</p>
			</div>
		</div>
	);
};

export default Footer;
