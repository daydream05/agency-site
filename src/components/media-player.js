import React from 'react'
import { css } from 'styled-components'
import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from '@reach/visually-hidden'
import ReactPlayer from "react-player"
import "@reach/dialog/styles.css"

import { zIndex, fontSizes, space } from '../utils/tokens'

const MediaPlayer = (props) => {
  const { url, showPlayer, onDismiss, onClose } = props

  return (
    <DialogOverlay
      isOpen={showPlayer}
      onDismiss={() => {
        console.log("it worked")
        onDismiss()
      }}
      css={css({
        zIndex: zIndex.mediaPlayerModal,
        "&&&": {
          background: `hsla(0,0%,0%,0.85)`,
        },
      })}
    >
      <DialogContent
        css={css({
          "&&&": {
            background: `unset`,
            width: `50vw`,
            position: `relative`,
          },
        })}
      >
        <button
          className="close-button"
          onClick={onClose}
          css={css({
            background: `unset`,
            border: `unset`,
            cursor: `pointer`,
            position: `absolute`,
            right: `-${space[4]}px`,
            top: `-${space[4]}px`,
          })}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span
            aria-hidden
            css={css({
              fontSize: fontSizes[4],
              color: `white`,
            })}
          >
            ×
          </span>
        </button>
        <div
          css={css({
            position: `relative`,
            paddingTop: `56.25%`,
          })}
        >
          <ReactPlayer
            url={url}
            css={css({
              position: `absolute`,
              top: 0,
              left: 0,
            })}
            width="100%"
            height="100%"
          />
        </div>
      </DialogContent>
    </DialogOverlay>
  )
}

export default MediaPlayer