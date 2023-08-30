import "@styles/fonts.css";

var theme = {
  breakpoints: ["520px", "1000px"],

  globals: {
    '*': {
      padding: 0,
      margin: 0,
    },

    html: {
      fontSize: ['18px', '2.4vw', '24px'],
      // Slightly off-white
      backgroundColor: '#fffdf9',

      // Create a grid background
      backgroundSize: "1.4rem 1.4rem",
      backgroundImage: `linear-gradient(to right, #efefef 1px, transparent 1px),
                        linear-gradient(to bottom, #efefef 1px, transparent 1px)`,

      /* NOTE(dabrady) Use this one for dotted grid instead of lined grid. */
      // backgroundImage: "radial-gradient(circle, #c8c8c8 1px, rgba(0, 0, 0, 0) 1px)",
    },

    body: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      maxWidth: '850px',
      minHeight: '100vh; min-height: -webkit-fill-available',
      fontFamily: "triplicate-t3, monospace",
    },
  },
};
export default theme;
