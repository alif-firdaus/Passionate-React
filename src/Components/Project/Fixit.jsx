import React from "react";

// React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Navbar
import Navbar from "../Navbar";

// Footer
import Footer from "../Footer";

// Import Images
import fixitlogo from "../../Assets/Images/fixit logo.png";
import fixitlogo2 from "../../Assets/Images/fixit logo 2.png";
import fixitmockup from "../../Assets/Images/fixit mockup.png";
import fixitmockup2 from "../../Assets/Images/fixit mockup 2.jpg";
import navigation from "../../Assets/Images/navigation.jpg";

const Fixit = () => {
	const routePath = useLocation();
	const onTop = () => {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		onTop();
	}, [routePath]);

	return (
		<div className="bg-lightbg dark:bg-darkbg">
			<Navbar />
			<div className="relative w-full h-auto pt-20 pb-28 lg:pt-32 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl">
				{/* Hero Section */}
				<div className="flex flex-col justify-between">
					<div className="flex flex-col w-full">
						<img
							src={fixitlogo}
							alt="fixitlogo"
							className="hidden w-20 dark:block"
						/>
						<img
							src={fixitlogo2}
							alt="fixitlogo2"
							className="block w-20 dark:hidden"
						/>
						<h1 className="text-5xl font-semibold text-black mt-11 dark:text-white lg:mt-10">
							Connecting people with the best local{" "}
							<span className="text-transparent bg-gradient-to-r dark:from-darkprimary from-lightprimary dark:via-purple-500 dark:to-pink-500 via-purple-500 to-pink-500 bg-clip-text">
								service providers
							</span>
						</h1>
						<div className="flex items-center justify-start mt-20 text-black gap-14 dark:text-white">
							<div className="flex flex-col justify-between gap-1">
								<p className="dark:text-slate-300 text-slate-600">
									Year
								</p>
								<p className="text-lg font-medium">
									2023 - Present
								</p>
							</div>
							<div className="flex flex-col justify-between gap-1">
								<p className="dark:text-slate-300 text-slate-600">
									Platform
								</p>
								<p className="text-lg font-medium">
									Mobile App
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-full mt-28">
						<img
							src={fixitmockup}
							alt="fixitmockup"
							className="w-full"
						/>
					</div>
				</div>
			</div>
			{/* Case Study Section */}
			{/* Background */}
			<div className="flex flex-col justify-between w-screen gap-4">
				<img
					src={fixitmockup2}
					alt="fixitmockup2"
					className="w-screen ml-0"
				/>
				<div className="flex flex-col justify-between gap-8 mt-20 text-black dark:text-white px-sectionpxsm">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						BACKGROUND
					</p>
					<h1 className="text-5xl font-semibold">What is Fixit?</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white px-sectionpxsm">
					<p className="text-lg font-light">
						Fixit aims to revolutionize the way people access and
						interact with professional service providers. By
						providing a safe and reliable marketplace platform,
						Fixit empowers clients to find and hire the best
						professionals for their needs.
					</p>
				</div>
			</div>

			{/* Features */}
			{/* Navigation */}
			<div className="flex flex-col justify-between w-full gap-4 pb-44 px-sectionpxsm">
				<div className="flex flex-col justify-between gap-8 mt-32 text-black dark:text-white">
					<p className="text-sm font-medium dark:text-darkprimary text-lightprimary">
						FEATURES
					</p>
					<h1 className="text-5xl font-semibold">Navigation</h1>
				</div>
				<div className="flex items-center mt-5 text-black dark:text-white">
					<p className="text-lg font-light">
						Fixit aims to revolutionize the way people access and
						interact with professional service providers. By
						providing a safe and reliable marketplace platform,
						Fixit empowers clients to find and hire the best
						professionals for their needs.
					</p>
				</div>
				<div className="flex items-center justify-center">
					<img
						src={navigation}
						alt="navigation"
						className="w-full mt-16 rounded-xl"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Fixit;
