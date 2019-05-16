export const colors = {
  accent: `#FFC001`,
  black: `#1C1C1C`,
  white: `#FFFFFF`,
  grey: {
    dark: `#D4D4D4`,
    light: `#F8F8F8`,
  }
}

export const breakpoints = {
  xs: `400px`,
  sm: `550px`,
  md: `750px`,
  lg: `1000px`,
  xl: `1200px`,
  xxl: `1600px`,
}

export const lineHeights = {
  solid: 1,
  dense: 1.25,
  default: 1.5,
  loose: 1.75,
}

export const fontSizes =
  [`0.72rem`, `0.83rem`, `1rem`, `1.333rem`, `2rem`, `2.66rem`,`4.6rem`]

export const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

export const maxWidth = {
  lg: `900px`,
  xl: `1200px`,
  xxl: `1440px`,
}

let mediaQueries = {}
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export { mediaQueries }