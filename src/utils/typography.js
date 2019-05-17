import Typography from "typography"
import {
  colors,
  fontWeights,
  fontSizes,
  fonts,
  lineHeights,
  letterSpacings,
  mediaQueries
} from './tokens'

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [{
    name: 'Karla',
    styles: fontWeights,
  }],
  headerFontFamily: fonts.header,
  bodyFontFamily: fonts.body,
  bodyColor: colors.black,
  headerColor: colors.black,
  overrideStyles: ({ rhythm }) => {
    return {
      a: {
        textDecoration: `none`,
      },
      h1: {
        fontSize: fontSizes[5],
        lineHeight: lineHeights.solid,
        letterSpacing: letterSpacings.superTight,
        color: 'inherit',
      },
      h2: {
        fontSize: fontSizes[4],
        lineHeight: lineHeights.dense,
        letterSpacing: letterSpacings.superTight,
      },
      h3: {
        fontSize: fontSizes[4],
        letterSpacing: letterSpacings.extraTight,
      },
      h4: {
        fontSize: fontSizes[3],
        letterSpacing: letterSpacings.tight,
      },
      h5: {
        fontSize: fontSizes[0],
        letterSpacing: letterSpacings.mega,
        color: 'inherit',
      },
      p: {
        lineHeight: lineHeights.loose,
      },
      [mediaQueries.lg]: {
        h1: {
          fontSize: fontSizes[6],
        },
        h2: {
          fontSize: fontSizes[5],
        },
        h3: {
          fontSize: fontSizes[4],
        },
        h4: {
          fontSize: fontSizes[3],
        },
        h5: {
          fontSize: fontSizes[0],
        },
      }
    }
  }
})

export default typography