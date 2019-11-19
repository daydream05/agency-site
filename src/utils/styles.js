import { colors, fontSizes, space } from "./tokens"

// this gets used by the theme object
// which is then used by styled-system as a variant

const buttonInitialStyle = {
  fontSize: fontSizes[1],
  fontWeight: "bold",
  padding: `${space[3]}px ${space[4]}px`,
  border: `none`,
  minHeight: `48px`,
}

export const buttonStyles = {
  default: {
    backgroundColor: colors.accent,
    color: colors.black,
    ...buttonInitialStyle,
  },
  dark: {
    ...buttonInitialStyle,
    color: colors.white,
    backgroundColor: colors.black,
  },
  secondary: {},
  white: {
    ...buttonInitialStyle,
    color: colors.black,
    backgroundColor: colors.white,
  }
}
