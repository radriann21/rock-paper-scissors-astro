/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'global': ['"Barlow Semi Condensed", sans-serif']
			},
			colors: {
				neutral: {
					'dark-text': 'hsl(229, 25%, 31%)',
					'score-text': 'hsl(229, 64%, 46%)',
					'header-outline': 'hsl(217, 16%, 45%)'
				},
				primary: {
					'bg-start': 'hsl(214, 47%, 23%)',
					'bg-end': 'hsl(237, 49%, 15%)',
					'cyan-start': 'hsl(189, 59%, 53%)',
					'cyan-end': 'hsl(189, 58%, 57%)',
					'scissors-start': 'hsl(39, 89%, 49%)',
					'scissors-end': 'hsl(40, 84%, 53%)',
					'paper-start': 'hsl(230, 89%, 62%)',
					'paper-end': 'hsl(230, 89%, 65%)',
					'rock-start': 'hsl(349, 71%, 52%)',
					'rock-end': 'hsl(349, 70%, 56%)'
				},
			}
		},
	},
	plugins: [],
}
