module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "flower-pink": "#FFB6C1",
                "flower-green": "#90EE90",
                "flower-purple": "#DDA0DD",
                "flower-yellow": "#FFE4B5",
                "leaf-green": "#228B22",
                "soil-brown": "#8B4513",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                bloom: "bloom 2s ease-out forwards",
                sway: "sway 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {transform: "translateY(0px)"},
                    "50%": {transform: "translateY(-20px)"},
                },
                bloom: {
                    "0%": {transform: "scale(0)", opacity: "0"},
                    "50%": {transform: "scale(1.1)", opacity: "0.8"},
                    "100%": {transform: "scale(1)", opacity: "1"},
                },
                sway: {
                    "0%, 100%": {transform: "rotate(-2deg)"},
                    "50%": {transform: "rotate(2deg)"},
                },
            },
        },
    },
    plugins: [],
};