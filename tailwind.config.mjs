/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['Noto Sans'],
            'serif': ['Georgia', 'Times New Roman', 'serif']
        }
    },
    plugins: [require('@tailwindcss/typography'),],
}