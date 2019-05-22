export const colors = {
  accent: `#FFC001`,
  black: `#1C1C1C`,
  white: `#FFFFFF`,
  grey: {
    dark: `#D4D4D4`,
    light: `#F8F8F8`,
    reallyDark: `#979EA6`,
  }
}

export const fontWeights = [400, 700]

export const headerHeight = `120px`

export const breakpoints = {
  xs: `320px`,
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

const system = [
  `-apple-system`,
  `BlinkMacSystemFont`,
  `Segoe UI`,
  `Roboto`,
  `Helvetica Neue`,
  `Arial`,
  `Noto Sans`,
  `sans-serif`,
  `Apple Color Emoji`,
  `Segoe UI Emoji`,
  `Segoe UI Symbol`,
  `Noto Color Emoji`,
]
const header = [`Karla`, ...system]
const body = [`Karlay`, ...system]

export const fonts = { header, system, body }

export const fontSizes =
  [`0.72rem`, `0.83rem`, `1rem`, `1.333rem`, `2rem`, `2.66rem`,`4.667rem`]

export const letterSpacings = {
  normal: `normal`,
  tight: `-0.8px`,
  extraTight: `-1.6px`,
  superTight: `-2px`,
  mega: `1px`,

}
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

export const zIndex = {
  header: 99,
  submitFormModal: 100,
}