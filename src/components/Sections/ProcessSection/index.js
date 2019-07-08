import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"

import { mediaQueries, space, fontSizes, maxWidth, colors } from '../../../utils/tokens'

const Number = styled.span`
  font-weight: bold;
  font-size: ${fontSizes[1]};
  width: calc(${space[5]}px / 1.25);
  height: calc(${space[5]}px / 1.25);
  border: calc(${space[1]}px / 2) solid ${colors.white};
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProcessLoader = props => {
  const { name, number, shortDescription, isActive } = props

  return (
    <div css={css`
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: calc(${space[5]}px / 1.25) auto;
      grid-gap: ${space[2]}px;
      color: ${colors.white};
      text-align: left;
      height: 100%;
      
      ${mediaQueries.xl} {
        color: ${colors.white};
        opacity: ${isActive ? 1 : 0.2};
        
      }
    `}>
        <Number>0{number}</Number>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <h5 css={css`
            font-size: ${fontSizes[1]};
            margin-bottom: 0;
          `}>{name}</h5>
        </div>
      <p css={css`
        grid-column: 2;
        width: 150px;
      `}>{shortDescription}</p>
    </div>
  )
}

const ProcessSection = (props) => {
  const { processList } = props

  const [tabIndex, setTabIndex] = useState(0);
  return (
    <section
      css={css`
        display: grid;
        position: relative;
        padding: 0;
        ${mediaQueries.xl} {
          position: relative;
          padding: 0;
        }
      `}
    >
      <Tabs
        onChange={index => setTabIndex(index)}
      >
        <TabPanels
          css={css`
            top: 0;
            z-index: 1;
          `}
        >
          {processList.map((item) => {
            return (
              <TabPanel
                key={item.id}
              >
                {item.media && item.media.fluid &&
                  <Img
                    key={item.id}
                    fluid={item.media.fluid}
                    alt={item.media.title}
                    css={css`
                      position: absolute !important;
                      width: 100%;
                      height: 100%;

                      ${mediaQueries.xl} {
                        position: relative !important;
                        height: auto;
                      }

                      &::before {
                          content: "";
                          position: absolute;
                          left: 0px;
                          right: 0px;
                          bottom: 0px;
                          width: 100%;
                          height: 100%;
                          z-index: 1;
                          background-color: ${colors.black};
                          opacity: 0.5;

                          ${mediaQueries.xl} {
                            background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) !important;
                            background-color: unset;
                            height: 80%;
                            opacity: 1;
                            z-index: 1;
                          }
                        }
                    `}
                  />}
              </TabPanel>
            )
          })}
        </TabPanels>
        <TabList
          css={css`
            display: flex;
            flex-direction: column;
            list-style: none;
            margin: 0;
            position: relative;
            padding: ${space[5]}px 0;

            ${mediaQueries.lg} {
              padding: ${space[5]}px ${space[5]}px;
            }

            ${mediaQueries.xl} {
              display: flex;
              flex-direction: row;
              justify-content: center;
              position: absolute;
              width: 100%;
              left: 0;
              right: 0;
              margin: 0 auto;
              bottom: ${space[5]}px;
              padding: 0 ${space[5]}px;
              z-index: 1;
            }
          `}>
          {processList.map((item, index) => {
            const isActive = index === tabIndex
            return (
              <Tab
                key={item.id}
                css={css`
                  margin: ${space[2]}px ${space[4]}px;
                  background-color: unset;
                  border: 0;
                  align-items: unset;
                  display: flex;
                  flex-direction: column;
                  cursor: pointer;
                  position: relative;
                  z-index: 2;

                  &::after {
                    content: '';
                    display: ${isActive ? `block` : `none`};
                    position: absolute;
                    left: 0%;
                    transform: translateX(-100%);
                    width: ${space[3]}px;
                    height: 50%;
                    background-color: ${colors.white};
                  }

                  :focus {
                    outline: none;
                    &::after {
                      content: '';
                      position: absolute;
                      left: 0%;
                      transform: translateX(-100%);
                      width: ${space[3]}px;
                      height: 50%;
                      background-color: ${colors.white};
                    }
                  }

                  ${mediaQueries.xl} {
                    margin: 0 ${space[2]}px;
                  } 
              `}
              >
                <ProcessLoader
                  key={item.id}
                  name={item.name}
                  number={index + 1}
                  shortDescription={item.shortDescription}
                  isActive={tabIndex === index}
                />
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </section>
  )
}

export default ProcessSection