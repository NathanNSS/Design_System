/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            "2xl": 32,
        },
        colors: {
            transparent: "transparent",

            black: {
                1000: "#000000",
                900: "#121214",
                700: "#202024",
            },

            gray: {
                900: "#7C7C8A",
                500: "#C4C4C4",
            },

            white: {
                800: "#E1E1E6",
            },

            cyan: {
                600: "#61DAFB",
                500: "#81D1F7",
            },
        },
        extend: {
            fontFamily: {
                sans: "Inter, sans-serif"
            },
        },
    },
    plugins: [],
}
