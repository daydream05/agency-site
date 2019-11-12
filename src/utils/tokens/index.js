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

export const breakpoints = [`320px`, `550px`, `750px`, `1000px`, `1200px`, `1600px`]

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

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
  mediaPlayerModal: 101,
}