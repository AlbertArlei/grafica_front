/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'galery':'repeat(auto-fill, minmax(192px, 1fr))'
      },
      minWidth:{
        "desktop":"1260px",
        "tablet":"768px"
      },
      maxWidth:{
        "desktop":"1260px",
        "tablet":"768px"
      },
      boxShadow:{
        "shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      },
      width:{
        "card":"128px"
      },
      height:{
        "card":"181.81px"
      },
      keyframes:{
        "open-menu":{
          "0%":{ right: "-192px"},
          "100%":{ right: "0px"}
        },
        "close-menu":{
          "0%":{ right: "0px"},
          "100%":{ right: "-192px"}
        },
      }
    },
  },
  plugins: [
    function ({addUtilities}){
      const newScrollbars = {
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width: "8px"
          },
          "&::-webkit-scrollbar-track":{
            backgroundColor: "#0f172a",
            borderRadius: "2px"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor: "white",
            borderRadius: "2px"
          },
          '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        }
      }
      addUtilities(newScrollbars, ["responsive", "hover"]);
    }
  ],
}