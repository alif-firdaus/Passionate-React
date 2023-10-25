import React from "react";

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
		<div className="pt-20 pb-28 h-fit">
			{/* Tools Title */}
			<h1 className="text-lg text-center text-white">
				Tools and Technologies that I use
			</h1>

			{/* Marquee Row 1 */}
			<Marquee
				className="flex flex-shrink-0 w-full overflow-hidden mt-14 h-fit whitespace-nowrap"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
					maskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
				}}
			>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={figma} alt="figma" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={adobexd} alt="adobexd" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={sketch} alt="sketch" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={studio} alt="studio" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={figma} alt="figma" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={adobexd} alt="adobexd" className="h-7 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={sketch} alt="sketch" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={studio} alt="studio" className="h-6 " />
				</div>
			</Marquee>

			{/* Marquee Row 2 */}
			<Marquee
				className="flex flex-shrink-0 w-full mt-5 overflow-hidden h-fit whitespace-nowrap"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
					maskImage:
						"linear-gradient(to right, hsla(0 0% 0% / 0), hsla(0 0% 0% / 1) 10%, hsla(0 0% 0% / 1) 90%, hsla(0 0% 0% / 0))",
				}}
			>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={react} alt="react" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={tailwind} alt="tailwind" className="h-5 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={miro} alt="miro" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={notion} alt="notion" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={react} alt="react" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={tailwind} alt="tailwind" className="h-5 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={miro} alt="miro" className="h-6 " />
				</div>
				<div className="flex justify-center py-[18px] mx-2 w-[190px] rounded-xl bg-accent h-fit">
					<img src={notion} alt="notion" className="h-6 " />
				</div>
			</Marquee>
		</div>
	);
};

export default Tools;
