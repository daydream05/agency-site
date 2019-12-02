import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "theme-ui"

import { Box, Flex } from "rebass"

import {
  space,
  fontSizes,
  colors,
  mediaQueries,
  maxWidth,
} from "../utils/tokens"

const Footer = props => {
  const data = useStaticQuery(footerQuery)

  const { tagline } = data.contentfulFooter
  const { name, email, office, phoneNumber } = data.contentfulCompanyInformation

  return (
    <footer>
      <Box
        css={css`
          padding: ${space[5]}px ${space[4]}px;
          ${mediaQueries.lg} {
            padding: ${space[5]}px ${space[6]}px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            grid-column-gap: ${space[5]}px;
            grid-row-gap: ${space[6]}px;
          }

          ${mediaQueries.xl} {
            padding: ${space[6]}px ${space[6]}px ${space[5]}px;
            max-width: ${maxWidth.xxl};
            margin: auto;
          }
        `}
      >
        <Box
          mb={{
            xs: 4,
            lg: 0,
          }}
        >
          <h4>{tagline}</h4>
          <a
            css={css`
              font-size: ${fontSizes[2]};
              color: ${colors.accent};
              font-weight: bold;
              ${mediaQueries.lg} {
                font-size: ${fontSizes[3]};
              }
            `}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </Box>
        <hr
          css={css`
            height: 100%;
            width: 1px;
          `}
        />
        <Flex
          flexDirection={{
            xs: "column",
            lg: "row",
          }}
        >
          <Box
            mb={{
              xs: 4,
              lg: 0,
            }}
          >
            <h5
              css={css`
                font-size: ${fontSizes[2]};
              `}
            >
              OFFICE
            </h5>
            {office && (
              <address
                css={css`
                  font-style: normal;
                  font-size: ${fontSizes[1]};
                  width: 50%;

                  ${mediaQueries.lg} {
                    margin-bottom: 0;
                  }
                `}
              >
                {office.internal.content}
              </address>
            )}
          </Box>
          <Box
            mb={{
              xs: 5,
              lg: 0,
            }}
            css={css`
              font-size: ${fontSizes[1]};
            `}
          >
            <h5
              css={css`
                font-size: ${fontSizes[2]};
              `}
            >
              CONTACTS
            </h5>
            <a
              css={css`
                display: block;
              `}
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>+{phoneNumber}</a>
          </Box>
        </Flex>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            ${mediaQueries.lg} {
              display: block;
            }
          `}
        >
          <span
            css={css({
              fontWeight: `bold`,
              fontSize: 3,
              mb: 3,
            })}
          >
            {name}
          </span>
        </div>
        <Box
          css={css`
            ${mediaQueries.lg} {
              grid-column: 3;
              justify-self: end;
            }
          `}
        >
          <span
            css={css`
              font-size: ${fontSizes[0]};
              color: ${colors.grey.dark};
            `}
          >
            © 2018 All right reserved
          </span>
        </Box>
      </Box>
    </footer>
  )
}

const footerQuery = graphql`
  query {
    contentfulFooter {
      tagline
    }
    contentfulCompanyInformation {
      name
      email
      phoneNumber
      office {
        internal {
          content
        }
      }
    }
  }
`

export default Footer
