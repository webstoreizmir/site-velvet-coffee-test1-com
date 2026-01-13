/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                background: 'rgb(var(--color-background) / <alpha-value>)',
                text: 'rgb(var(--color-text) / <alpha-value>)',
            },
            fontFamily: {
                heading: 'var(--font-heading)',
                body: 'var(--font-body)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
