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
			<div className="flex items-center font-semibold cursor-pointer text-[24px] pb-[2px] dark:text-white text-black ml-[32px]">
				Passionate
			</div>

			{/* Navbar Links */}
			<div
				className={`fixed gap-4 pt-6 w-full flex flex-col px-sectionpl h-screen dark:bg-base bg-white z-[1] ${
					isOpen ? "top-[73px]" : "-left-full"
				}`}
			>
				{menuOptions.map((option, index) => (
					<div
						className="w-full transition-all duration-500 ease-in-out"
						key={index}
					>
						<a
							className="flex w-full pb-5 items-center text-lg font-light dark:text-white text-black dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 border-b-[1px]"
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
			<div className="flex justify-between gap-4 mr-[32px]">
				<div
					className="flex justify-center border-[1px] w-[40px] h-[40px] rounded-md dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 items-center cursor-pointer"
					onClick={handleThemeSwitch}
				>
					{theme === "dark" ? (
						<MoonIcon className="w-[22px] text-black dark:text-primary" />
					) : (
						<SunIcon className="w-[24px] text-black dark:text-primary" />
					)}
				</div>

				<div
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					className="flex justify-center border-[1px] w-[40px] h-[40px] rounded-md dark:border-slate-50 border-slate-400 dark:border-opacity-10 border-opacity-20 items-center cursor-pointer"
				>
					{isOpen ? (
						<XMarkIcon className="w-7 stroke-[1.3px] dark:text-white text-black" />
					) : (
						<Bars3Icon className="w-7 stroke-[1.3px] dark:text-white text-black" />
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
