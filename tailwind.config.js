/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Dark Mode Color Palette //
				darkbg: "var(--darkbg)",
				darkprimary: "var(--darkprimary)",
				darksecondary: "var(--darksecondary)",
				darktertiary: "var(--darktertiary)",

				// Light Mode Color Palette //
				lightbg: "var(--lightbg)",
				lightprimary: "var(--lightprimary)",

				// General Color Palette //
				softblue: "var(--softblue)",
				black: "var(--black)",
				grey: "var(--grey)",
				softgrey: "var(--softgrey)",
				white: "var(--white)",
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
				sectionpxsm: "var(--sectionpxsm)",
				sectionpxlg: "var(--sectionpxlg)",
			},
			fontFamily: {
				outfit: ["Outfit"],
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
