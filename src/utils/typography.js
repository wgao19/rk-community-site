import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,

  googleFonts: [
    {
      name: 'IBM Plex Mono',
      styles: ['700', '700i', '400', '400i'],
    },
  ],
  headerFontFamily: ['IBM Plex Mono', 'monospace'],
  bodyFontFamily: ['IBM Plex Mono', 'monospace'],
  overrideStyles: ({ rhythm, adjustFontSizeTo }, { blockMarginBottom }) => {
    return {
      h1: {
        fontStyle: 'italic',
        marginTop: rhythm(1.2),
        marginBottom: rhythm(1.2),
      },
      h2: {
        marginTop: rhythm(1.1),
        marginBottom: rhythm(1.1),
      },
      h3: {
        marginTop: rhythm(1.03),
        marginBottom: rhythm(1.03),
      },
      h4: {
        marginTop: rhythm(1),
        marginBottom: rhythm(1),
      },
      h5: {
        marginTop: rhythm(0.9),
        marginBottom: rhythm(0.9),
      },
      h6: {
        marginTop: rhythm(0.75),
        marginBottom: rhythm(0.75),
      },
      code: {
        fontSize: '1.2em',
      },

      'header, main, aside': {
        padding: '1em',
      },
      a: {
        color: 'black',
        textDecoration: 'none',
        borderBottom: '1.5px solid #222',
        paddingBottom: '2px',
        transition: 'all .1s ease',
      },
      'a:hover, a:active': {
        borderBottom: '3px solid #222',
      },
      ul: {
        paddingInlineStart: '20px',
      },
      'ul li': {
        marginBottom: '8px',
      },
    };
  },
});

export default typography;