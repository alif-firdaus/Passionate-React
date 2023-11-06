import React, { useState, useEffect } from "react";

// Import HeroIcons
import {
	Bars3Icon,
	XMarkIcon,
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
	// Navbar Links //
	const menuOptions = [
		{
			text: "Home",
			href: "#home",
		},
		{
			text: "About",
			href: "#about",
		},
		{
			text: "Expertise",
			href: "#expertise",
		},
		{
			text: "Experience",
			href: "#experience",
		},
		{
			text: "Projects",
			href: "#projects",
		},
	];

	// Responsive Navbar //
	const [isOpen, setIsOpen] = useState(false);

	// Dark Mode Switcher //
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<nav className="sticky top-0 z-10 flex items-center justify-between py-4 border-b-[1px] backdrop-blur-lg dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40">
			{/* Navbar Title */}
			<div className="flex items-center font-semibold cursor-pointer text-[24px] pb-[2px] dark:text-white text-black ml-[26px] lg:ml-14 xl:ml-32">
				Passionate
			</div>

			<div className="flex items-center justify-between">
				{/* Navbar Links */}
				<div
					className={`fixed lg:flex lg:relative lg:flex-row gap-4 lg:gap-10 pt-6 lg:py-0 w-full lg:items-center lg:justify-between lg:w-fit flex flex-col px-sectionpxsm lg:px-0 h-screen lg:h-fit dark:bg-darkbg md:dark:bg-darkbg bg-white md:bg-white lg:bg-transparent lg:dark:bg-transparent z-[1] ${
						isOpen
							? "top-[73px] left-0 lg:top-0 transition-all duration-300 ease-in-out"
							: "-left-full lg:left-0"
					}`}
				>
					{menuOptions.map((option, index) => (
						<div key={index}>
							<a
								className="flex w-full lg:w-fit pb-5 lg:py-0 items-center text-lg lg:text-[15px] font-light lg:font-normal dark:text-white text-grey dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 border-b-[1px] lg:border-none lg:dark:hover:text-softgrey lg:hover:text-black duration-300"
								href={option.href}
								onClick={() => {
									setIsOpen(!isOpen);
								}}
							>
								{option.text}
							</a>
						</div>
					))}
				</div>

				{/* Divider */}
				<div className="hidden lg:flex w-[1px] h-7 dark:bg-slate-50 bg-slate-400 bg-opacity-50 dark:bg-opacity-20 mx-11"></div>

				{/* Navbar Extra */}
				<div className="flex justify-between gap-4 lg:gap-6 mr-[26px] lg:mr-14 xl:mr-32">
					<div
						className="flex justify-center border-[1px] w-[40px] h-[40px] rounded-lg dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40 items-center cursor-pointer lg:hover:border-opacity-50 duration-300"
						onClick={handleThemeSwitch}
					>
						{theme === "dark" ? (
							<MoonIcon className="w-[20px] stroke-2 text-darkprimary" />
						) : (
							<SunIcon className="w-[24px] text-black " />
						)}
					</div>

					<div
						onClick={() => {
							setIsOpen(!isOpen);
						}}
						className="flex lg:hidden justify-center border-[1px] w-[40px] h-[40px] rounded-lg dark:border-slate-50 border-slate-400 dark:border-opacity-20 border-opacity-40 items-center cursor-pointer"
					>
						{isOpen ? (
							<XMarkIcon className="w-6 stroke-[1.3px] dark:text-white text-black" />
						) : (
							<Bars3Icon className="w-6 stroke-[1.3px] dark:text-white text-black" />
						)}
					</div>

					<div className="items-center justify-center hidden lg:flex">
						<button className="dark:text-black text-white text-[15px] font-medium dark:bg-white bg-black h-[40px] px-6 pb-[2px] rounded-lg dark:hover:bg-softgrey hover:bg-grey duration-300">
							Connect
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
