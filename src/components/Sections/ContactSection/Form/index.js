import React, { useState } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-autosize-textarea'

import { colors, fontSizes, space, letterSpacings } from '../../../../utils/tokens'

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
      body: encode({ 'form-name': 'contact', name, }),
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
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot"
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
    </form>
  )
}

export default Form