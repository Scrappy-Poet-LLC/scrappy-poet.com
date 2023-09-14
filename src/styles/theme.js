import '@styles/fonts.css';

import smallCaps from '@utils/smallCaps';

var theme = {
  breakpoints: ['520px', '1000px'],

  colors: {
    text: '#000000',
    // Slightly off-white
    background: '#fffdf9',
    // Nice muted, dusty red
    accent: '#996663',
    heading: '#996663'
  },

  fonts: {
    body: 'triplicate-t4, monospace',
    heading: 'triplicate-t4, monospace',
    monospace: 'triplicate-t3, monospace',
    lightBody: 'triplicate-t3, monospace',
  },

  // Dialed in for my chosen body font.
  fontSizes: ['0.85rem'],

  fontWeights: {
    body: 'normal',
    heading: 'bolder',
    bold: 'bold',
  },

  lineHeights: {
    body: '1.45',
    heading: '1.85',
  },

  styles: {
    root: {
      // Set the baseline for all relative font measurements.
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
        lineHeight: 'body',
      },

      p: {
        marginBottom: '1rem',
      },

      a: {
        textDecoration: 'none',
        '&:link, &:visited': {
          color: 'text'
        },
      },

      h1: { variant: 'text.heading' },
      'h2,h3,h4,h5,h6': { variant: 'text.smallerHeading' },
    },
  },

  text: {
    body: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },

    heading: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      // fontStyle: 'italic',
      lineHeight: 'heading',
      fontSize: '125%',
      marginBottom: '0.4rem',
    },

    smallerHeading: {
      variant: 'text.heading',
      fontStyle: 'normal',
      fontSize: '1rem',
      textTransform: 'lowercase',
      fontFamily: smallCaps('body'),
      paddingTop: ['1rem'],
    },
  },

};

// Theme variant aliases
theme.text.default = theme.text.body;

export default theme;
