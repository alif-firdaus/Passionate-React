import React from "react";
import { useState, useEffect } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
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

	const menuOptions = [
		{
			text: "Home",
			href: "#",
		},
		{
			text: "About",
			href: "#",
		},
		{
			text: "Expertise",
			href: "#",
		},
		{
			text: "Experience",
			href: "#",
		},
		{
			text: "Projects",
			href: "#",
		},
	];

	return (
		// Navbar //
		<nav className="sticky top-0 z-50 flex justify-between py-4 bg-white border-b-2 px-sectionpl border-accent dark:bg-base">
			<div className="flex items-center font-medium text-black cursor-pointer text-[24px] pb-[2px] dark:text-white">
				Passionate
			</div>

			<div className="flex items-center justify-between gap-5">
				<div className="hidden">
					{menuOptions.map((option, index) => (
						<a
							className="text-[14px] dark:text-white text-black duration-100 dark:hover:text-primary hover:text-primary"
							key={index}
							href={option.href}
						>
							{option.text}
						</a>
					))}
				</div>

				<div
					className="flex justify-center duration-200 dark:hover:bg-[#262b56] hover:bg-lightgrey rounded-full cursor-pointer w-11 h-11"
					onClick={handleThemeSwitch}
				>
					<SunIcon className="text-black w-7 dark:text-primary" />
					<MoonIcon className="hidden w-[29px] text-primary" />
				</div>
				<div className="min-h-[24px] w-px h-fit bg-[#414983] from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
				<div className="flex justify-center w-11 h-11">
					<Bars3Icon className="w-8 text-black stroke-[1.3px] dark:text-white" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

<div className="absolute rounded-full opacity-20 right-1/3 w-96 h-96 top-32 bg-gradient-to-br from-blue-500 to-pink-500"></div>
<div className="absolute rounded-full opacity-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500 to-pink-500"></div>
<div className="relative flex flex-col items-center justify-center pt-40 px-sectionpl"></div>

<img
				src={fluid}
				alt="fluid"
				className="absolute top-40 right-1/3 opacity-20 -z-10"
			/>
			<img
				src={fluid}
				alt="fluid"
				className="absolute bottom-20 left-1/3 opacity-20 -z-10"
			/>


<div className="relative flex pt-20 mt-20 bg-purple-500 h-fit rounded-tr-3xl rounded-bl-3xl">
					<img
						src={picc}
						alt="picc"
						className="relative object-cover w-10/12 h-full origin-bottom-left rounded-t-lg"
					/>
					<div className="relative z-50 text-black origin-bottom-right bg-white w-80 h-fit">
						<h1>Alif Firdaus</h1>
					</div>
				</div>