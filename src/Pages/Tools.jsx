import React from "react";

// Marquee
import Marquee from "react-fast-marquee";

// Marquee Col 1 Dark
import figma from "../Assets/Icons/figma.svg";
import adobexd from "../Assets/Icons/adobexd.svg";
import sketch from "../Assets/Icons/sketch.svg";
import studio from "../Assets/Icons/studio.svg";

// Marquee Col 1 Light
import figmabl from "../Assets/Icons/figma-black.svg";
import adobexdbl from "../Assets/Icons/adobexd-black.svg";
import sketchbl from "../Assets/Icons/sketch-black.svg";
import studiobl from "../Assets/Icons/studio-black.svg";

// Marquee Col 2 Dark
import react from "../Assets/Icons/react.svg";
import tailwind from "../Assets/Icons/tailwind.svg";
import miro from "../Assets/Icons/miro.svg";
import notion from "../Assets/Icons/notion.svg";

// Marquee Col 2 Light
import reactbl from "../Assets/Icons/react-black.svg";
import tailwindbl from "../Assets/Icons/tailwind-black.svg";
import mirobl from "../Assets/Icons/miro-black.svg";
import notionbl from "../Assets/Icons/notion-black.svg";

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
