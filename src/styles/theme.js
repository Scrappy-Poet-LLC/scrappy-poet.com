import '@styles/fonts.css';

var theme = {
  breakpoints: ['520px', '1000px'],

  colors: {
    body: '#000000',
    // Slightly off-white
    background: '#fffdf9',
    // Nice muted, dusty red
    accent: '#996663',
  },

  fonts: {
    body: 'triplicate-t4, monospace',
    lightBody: 'triplicate-t3, monospace',
  },

  styles: {
    root: {
      fontSize: ['18px', '2.4vw', '24px'],

      // Create a grid background
      backgroundSize: '1.4rem 1.4rem',
      backgroundImage: `linear-gradient(to right, #f4f4f4 1px, transparent 1px),
                        linear-gradient(to bottom, #f4f4f4 1px, transparent 1px)`,

      '*': {
        margin: 0,
        padding: 0,
        /* NOTE(dabrady) Include border and padding in element width and height. Makes math easier. */
        boxSizing: 'border-box',
      },

      body: {
        margin: '0 auto',
        // Prefer the WebKit implementation of filling the viewport, when available.
        minHeight: '100vh; min-height: -webkit-fill-available',
        width: '100vw',
        maxWidth: '1000px',
        fontFamily: 'body',
        // Dialed in for my chosen body font.
        fontSize: '0.85rem',
        lineHeight: '1.45',
      },

      p: {
        marginBottom: '1rem',
      },

      a: {
        textDecoration: 'none',
        '&:link, &:visited': {
          color: 'body'
        },
      },
    },
  },
};
export default theme;
