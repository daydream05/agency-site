import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { css } from 'theme-ui'
import { FaPlay } from 'react-icons/fa'

import MediaPlayer from './media-player'
import Button from './Buttons'

import { space } from '../utils/tokens'

const WatchVideoButton = (props) => {
  const { url } = props
  const [dialogShown, setDialogShown] = useState(false)

  return (
    <div className={props.className}>
      <Button
        variant="default"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        onClick={() => setDialogShown(true)}
      >
        Watch the video
        <FaPlay
          css={css`
            margin-left: ${space[2]}px;
            font-size: 8px;
          `}
        />
      </Button>
      <MediaPlayer
        showPlayer={dialogShown}
        onClose={() => setDialogShown(false)}
        onDismiss={() => setDialogShown(false)}
        url={url}
      />
    </div>
  )
}

export default WatchVideoButton

WatchVideoButton.propTypes = {
  url: PropTypes.string.isRequired,
}