import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { colors, fontSizes, space, letterSpacings, mediaQueries, zIndex } from '../../../../utils/tokens'

import Button from '../../../Buttons'

const FieldContainer = styled.div`
  margin-bottom: ${space[4]}px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    margin-top: -1px;
    border-width: 0 0 1px;
    border-style: solid;
    color: ${colors.grey.dark};
  }
`

const FormLabel = styled.label`
  font-size: calc(${fontSizes[0]} - 2px);
  letter-spacing: ${letterSpacings.mega};
  color: ${colors.black};
  text-transform: uppercase;
  font-weight: bold;
`

const FormInput = styled.input`
  border: 0;
  outline: none;
  width: 100%;
`

const FormTextArea = styled(TextareaAutosize)`
  border: 0;
  outline: none;
  width: 100%;
  overflow-y: hidden;
  resize: none;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/**
 * Shamlessly taken from this awesome starter
 * https://github.com/ryanwiemer/gatsby-starter-gcn/blob/master/src/components/ContactForm.js#L182
 */

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  
  const handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name, 
        email: email,
        message: message
      }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  const handleSuccess = () => {
    setName('')
    setEmail('')
    setMessage('')
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot"
      css={css`
        margin-bottom: 0;
      `}
    >
      <FieldContainer>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FieldContainer>
      <FieldContainer>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FieldContainer>
      <FieldContainer>
        <FormLabel htmlFor="email">Message</FormLabel>
        <FormTextArea
          id="message"
          name="message"
          rows={3}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </FieldContainer>
      <div css={css`
        ${mediaQueries.lg} {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: ${space[4]}px;
        }
      `}>
        <Button
          variant="default"
          width="100%"
          onClick={handleSubmit}
        >Submit</Button>
        <p css={css`
          color: ${colors.grey.dark};
          font-size: ${fontSizes[0]};
          padding-right: ${space[5]}px;
          margin-bottom: 0;
        `}>We’d love to hear from you!</p>
      </div>
      <DialogOverlay
        isOpen={showModal}
        onDismiss={closeModal}
        css={css`
          position: fixed;
          top: 0%;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding-top: 40%;
          background-color: ${colors.black}d4;
          z-index: ${zIndex.submitFormModal};

          ${mediaQueries.lg} {
            padding-top: 0;
            justify-content: center;
            align-items: center;
          }
        `}
      >
          <DialogContent
            style={{
              padding: `${space[5]}px ${space[4]}px`,
              margin: `0 ${space[3]}px`,
              backgroundColor: colors.white,
              display: `flex`,
              flexDirection: `column`,
              [mediaQueries.lg]: {
                padding: `${space[5]}px ${space[5]}px`,
                margin: `0`,
              },
            }}
          >
            <div css={css`
              margin-bottom: ${space[3]}px;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}>
              <h3>We received your inquiry!</h3>
              <p>We'll get back to you as soon as we can.</p>
            </div>
            <Button
              variant="dark"
              onClick={closeModal}
              css={css`
              width: 50%;
              margin: auto;
            `}
            >Close</Button>
          </DialogContent>
      </DialogOverlay>
    </form>
  )
}

export default Form