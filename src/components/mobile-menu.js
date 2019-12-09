import React, { useState, useRef } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css } from 'styled-components'
import { useSpring, useTransition, a, config, interpolate, useChain } from 'react-spring'

import { space, colors, zIndex, fontSizes, mediaQueries } from '../utils/tokens'

const Burger = (props) => {
  const { toggle, onClick, dark } = props

  const lineStyle = {
    display: `block`,
    width: `100%`,
    height: `3px`,
    backgroundColor: dark ? (toggle ? colors.white : colors.black)  : colors.white,
    borderRadius: `6px,`,
  }

  const { line1r, line1y, line1x } = useSpring({
    config: config.stiff,
    line1r: toggle ? 45 : 0,
    line1x: toggle ? 3 : 0,
    line1y: toggle ? 6 : 0,
  })

  const { line2r } = useSpring({
    config: config.stiff,
    line2r: toggle ? -45 : 0,
  })

  const { line3r, line3y, line3x } = useSpring({
    config: config.stiff,
    line3r: toggle ? 45 : 0,
    line3x: toggle ? -3 : 0,
    line3y: toggle ? -6 : 0,
  })

  return (
    <button
      css={css({
        alignSelf: `end`,
        border: `none`,
        padding: 0,
        outline: `none`,
        display: `inline-block`,
        cursor: `pointer`,
        background: `unset`,
        width: 38,
        height: 28,
        zIndex: zIndex.burger,
      })}
      onClick={onClick}
    >
      <div
        css={css({
          display: `flex`,
          height: `100%`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        })}
      >
        <a.span
          style={{
            ...lineStyle,
            width: `50%`,
            marginRight: `auto`,
            transform: interpolate([line1x, line1y, line1r], (x, y, r) => `translate(${x}px ,${y}px) rotate(${r}deg)`),
          }}
        />
        <a.span
          style={{
            ...lineStyle,
            transform: interpolate([line2r], (r) => `rotate(${r}deg)`)
          }}
        />
        <a.span
          style={{
            ...lineStyle,
            width: `50%`,
            marginLeft: `auto`,
            transform: interpolate([line3x, line3y, line3r], (x, y,r) => `translate(${x}px, ${y}px) rotate(${r}deg)`)
          }}
        />
      </div>
    </button>
  )
}

const Panel = ({ toggle }) => {
  const springRef = useRef()
  const springAnimate = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { opacity: 0, display: `none` },
    to: {
      opacity: toggle ? 1 : 0,
      display: toggle ? `flex` : `none`,
    },
  })

  const data = useStaticQuery(menuQuery)
  const { links } = data.contentfulMenu

  const transRef = useRef()
  const transitions = useTransition(toggle ? links : [], item => item.title, {
    ref: transRef,
    unique: true,
    trail: 400 / links.length,
    from: { opacity: 0, transform: `translateX(-50%)` },
    enter: { opacity: 1, transform: `translateX(0)` },
    leave: { opacity: 0, transform: `translateX(-50%)` },
  })

  useChain(toggle ? [springRef, transRef] : [transRef, springRef], [0.1,0])

  return (
    <a.div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `flex-end`,
        padding: `0 ${space[5]}px`,
        position: `absolute`,
        top: 0,
        left: 0,
        height: `100vh`,
        width: `100%`,
        backgroundColor: colors.black,
        zIndex: zIndex.panel,
        ...springAnimate,
      }}
    >
      {transitions.map(({ item, key, props}) => {
        const path = item.slug === `home` ? `/` : `/${item.slug}/`
        return (
          <a.div key={key} style={{ ...props }}>
            <Link to={path}
              css={css({
                textDecoration: `none`,
                color: colors.white,
                fontSize: fontSizes[4],
                fontWeight: `bold`,
            })}>{item.title}</Link>
          </a.div>
        )
      })}
    </a.div>
  )
}

const menuQuery = graphql`
  query {
    contentfulMenu {
      links {
        slug
        title
        fields {
          path
        }
      }
    }
  }
`

const MobileMenu = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      css={css({
        position: open ? `fixed` : `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100vh`,
        padding: `${space[4]}px`,
        display: `flex`,
        justifyContent: `flex-end`,
        zIndex: open ? zIndex.mobileMenu : 1,
        [mediaQueries.lg]: {
          display: `none`,
        }
      })}
    >
      <Burger dark={props.dark} toggle={open} onClick={() => setOpen(!open)} />
      <Panel toggle={open} />
    </div>
  )
}

export default MobileMenu