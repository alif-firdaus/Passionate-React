import React, { useState, useEffect } from "react";

// Marquee
import Marquee from "react-fast-marquee";

// Marquee Col 1
import figma from "../Assets/figma.png";
import adobexd from "../Assets/adobexd.png";
import sketch from "../Assets/sketch.png";
import studio from "../Assets/studio.png";

// Marquee Col 2
import react from "..//Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import miro from "../Assets/miro.png";
import notion from "../Assets/notion.png";

const Tools = () => {
	return (
		<div id="tools" className="pt-20 lg:pt-24 pb-28 h-fit">
			{/* Tools Title */}
			<h1 className="text-lg lg:text-[20px] text-center text-black dark:text-white px-sectionpl">
				Tools and Tech-stacks that I use
			</h1>

			{/* Marquee Row 1 */}
			<Marquee
				className="flex flex-shrink-0 w-60 mt-14 lg:mt-20 h-fit whitespace-nowrap"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
					maskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
				}}
			>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={figma} alt="figma" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={adobexd} alt="adobexd" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={sketch} alt="sketch" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={studio} alt="studio" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={figma} alt="figma" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={adobexd} alt="adobexd" className="h-7 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={sketch} alt="sketch" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={studio} alt="studio" className="h-6 " />
				</div>
			</Marquee>

			{/* Marquee Row 2 */}
			<Marquee
				className="flex flex-shrink-0 mt-5 h-fit whitespace-nowrap"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
					maskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
				}}
			>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={react} alt="react" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={tailwind} alt="tailwind" className="h-5 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={miro} alt="miro" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={notion} alt="notion" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={react} alt="react" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={tailwind} alt="tailwind" className="h-5 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={miro} alt="miro" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl dark:bg-accent bg-grey h-fit">
					<img src={notion} alt="notion" className="h-6 " />
				</div>
			</Marquee>
		</div>
	);
};

export default Tools;
