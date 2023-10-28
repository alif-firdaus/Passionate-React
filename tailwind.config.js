/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				black: "var(--black)",
				grey: "var(--grey)",
				lightgrey: "var(--lightgrey)",
				lightblue: "var(--lightblue)",
				white: "var(--white)",
				base: "var(--base)",
				accent: "var(--accent)",
				primary: "var(--primary)",
			},
			animation: {
				marquee: "marquee 30s linear infinite",
				marquee2: "marquee2 30s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX (0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX (100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			backgroundImage: {
				figma: "url('../src/Assets/figma.png')",
				sketch: "url('../src/Assets/sketch.png')",
			},
			padding: {
				sectionpl: "var(--sectionpl)",
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ["dark"],
		},
	},
	plugins: [],
};
