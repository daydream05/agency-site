import tokens from "./tokens"

let mediaQueries = {}
for (let breakpoint in breakpoints.tokens) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export default mediaQueries