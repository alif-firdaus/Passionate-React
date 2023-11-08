import React from "react";

// Navbar
import Navbar from "../Navbar";

// Import Images
import fixitlogo from "../../Assets/Images/fixit logo.png";
import fixitmockup from "../../Assets/Images/fixit mockup.png";

const Fixit = () => {
	return (
		<div className="bg-lightbg dark:bg-darkbg">
			<Navbar />
			<div className="relative w-full h-auto pt-20 lg:pt-32 pb-44 lg:pb-64 px-sectionpxsm lg:px-sectionpxlg xl:px-sectionpxxl">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col w-full">
						<img src={fixitlogo} alt="fixitlogo" className="w-20" />
						<h1 className="mt-8 text-5xl font-semibold text-black dark:text-white lg:mt-10">
							Connecting people with the best local service
							providers
						</h1>
					</div>
					<div className="flex items-center justify-center w-full mt-32">
						<img src={fixitmockup} className="h-[500px]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fixit;
