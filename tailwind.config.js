module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e1a42b",
        
"secondary": "#ca9326",
        
"accent": "#b48322",
        
"neutral": "#9d721e",
        
"base-100": "#FFFFFF",
        
"info": "#705215",
        
"success": "#5a4111",
        
"warning": "#43310c",
        
"error": "#2d2008",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}