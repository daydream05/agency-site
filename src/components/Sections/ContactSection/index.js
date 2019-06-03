import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

import { colors, fontSizes, mediaQueries, space } from '../../../utils/tokens';

import Form from './Form'

const BgImContainer = styled.div`
  width: 100%;
  position: relative;

  ${mediaQueries.lg} {
    width: 50%;
  }
`
const MainText = styled.h2`
  font-size: ${fontSizes[5]};
  margin-bottom: ${space[5]}px;
`
const SmallText = styled.h5`
  font-size: ${fontSizes[0]};
  color: ${colors.grey.reallyDark};
`
const ContactSection = (props) => {
  const { mainText, makeMainTextH1, backgroundImage } = props
  const data = useStaticQuery(companyInfoQuery)

  return (
    <section css={css`
      display: flex;
      flex-direction: column;

      ${mediaQueries.lg} {
        flex-direction: row;
      }
    `}>
        <BgImContainer>
          <Img
            alt={backgroundImage.title}
            fluid={backgroundImage.fluid}
            css={css`
              height: 100%;
            `}
          />
        <div css={css`
            padding: ${space[3]}px ${space[4]}px;
            z-index: 1;
            font-size: ${fontSizes[0]};
            color: ${colors.white};
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            right: 0;

            ${mediaQueries.xl} {
              background-color: ${colors.black};

              padding: ${space[4]}px ${space[4]}px;
            }
          `}>
          <div css={css`
            display: flex;
            align-items: center;
            font-size: ${fontSizes[2]};
            margin-right: ${space[4]}px;

              > *:not(:last-child) {
                margin-right: ${space[3]}px;
              }
              
            `}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <a css={css`
              color: ${colors.white};
              font-weight: bold;
            `}>{data.contentfulCompanyInformation.email}</a>
        </div>
        </BgImContainer>
        <div css={css`
          padding: ${space[5]}px ${space[4]}px;
          ${mediaQueries.lg} {
            padding: ${space[6]}px ${space[5]}px;
            width: 50%;
          }

          ${mediaQueries.xl} {
            max-width: calc(${space[7]}px * 1.5);
            margin-right: auto;
            margin-left: ${space[6]}px;
            padding: ${space[6]}px 0;
          }
        `}>
          <SmallText>CONTACT</SmallText>
          <MainText
            as={makeMainTextH1 ? `h1` : null}
          >{mainText}</MainText>
          <section>
            <Form />
          </section>
        </div>
    </section>
  )
}

export default ContactSection

const companyInfoQuery = graphql`
  query {
    contentfulCompanyInformation {
      email
    }
  }
`
