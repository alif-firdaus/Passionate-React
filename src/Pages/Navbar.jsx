import React, { useState, useEffect } from "react";
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
		<nav className="sticky top-0 z-10 flex items-center justify-between py-4 border-b-[1px] backdrop-blur-lg dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20">
			{/* Navbar Title */}
			<div className="flex items-center font-semibold cursor-pointer text-[24px] pb-[2px] dark:text-white text-black ml-[26px] lg:ml-32">
				Passionate
			</div>

			{/* Navbar Links */}
			<div
				className={`fixed lg:flex lg:relative lg:flex-row gap-4 lg:gap-10 pt-6 lg:py-0 w-full lg:items-center lg:justify-between lg:w-fit flex flex-col px-sectionpl h-screen lg:h-fit dark:bg-base md:dark:bg-base bg-white md:bg-white lg:bg-transparent lg:dark:bg-transparent z-[1] ${
					isOpen ? "top-[73px] lg:top-0" : "-left-full lg:left-0"
				}`}
			>
				{menuOptions.map((option, index) => (
					<div
						className="w-full transition-all duration-500 ease-in-out"
						key={index}
					>
						<a
							className="flex w-full lg:w-fit pb-5 lg:py-0 items-center text-lg lg:text-base font-light dark:text-white text-black dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 border-b-[1px] lg:border-none"
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

			{/* Navbar Extra */}
			<div className="flex justify-between gap-4 lg:gap-5 mr-[26px] lg:mr-32">
				<div
					className="flex justify-center border-[1px] w-[40px] h-[40px] rounded-lg dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 lg:bg-accent lg:border-none items-center cursor-pointer"
					onClick={handleThemeSwitch}
				>
					{theme === "dark" ? (
						<MoonIcon className="w-[20px] text-primary" />
					) : (
						<SunIcon className="w-[24px] text-black " />
					)}
				</div>

				<div
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className="flex lg:hidden justify-center border-[1px] w-[40px] h-[40px] rounded-lg dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 items-center cursor-pointer"
				>
					{isOpen ? (
						<XMarkIcon className="w-6 stroke-[1.3px] dark:text-white text-black" />
					) : (
						<Bars3Icon className="w-6 stroke-[1.3px] dark:text-white text-black" />
					)}
				</div>

				<div className="hidden lg:flex lg:items-center lg:justify-center ">
					<button className="text-black text-[15px] font-medium bg-white h-[40px] px-6 pb-[2px] rounded-lg hover:bg-grey duration-300">
						Connect
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
