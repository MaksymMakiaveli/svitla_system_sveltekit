/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				bodoni: ['Bodoni Moda', 'serif']
			},
			colors: {
				primary: 'rgb(246,233,222, <alpha-value>)'
			}
		}
	},
	plugins: []
};
