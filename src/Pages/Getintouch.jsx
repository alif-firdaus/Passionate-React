import React from "react";

const Getintouch = () => {
	return (
		<div
			id="getintouch"
			className="pt-20 pb-56 h-fit dark:bg-base bg-lightgrey px-sectionpxsm"
		>
			{/* Get in Touch Title */}
			<h1 className="text-5xl font-semibold text-center text-black md:text-6xl dark:text-white">
				Turning your ideas into{" "}
				<span className="text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text">
					real-life
				</span>{" "}
				products is my calling
			</h1>

			{/* Main Button */}
			<div className="flex justify-center mt-14 md:mt-16">
				<button className="pt-3 pb-[15px] text-[17px] font-medium dark:text-black text-white dark:bg-white bg-black rounded-xl w-fit h-fit px-10">
					Let's talk!
				</button>
			</div>
		</div>
	);
};

export default Getintouch;
