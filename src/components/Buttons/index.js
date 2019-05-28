import styled from 'styled-components'
import { buttonStyle, width } from 'styled-system'

/**
 * You can pass in a variant value such has
 * <Button variant="default" />
 * Check the styles file to see the other button styles
 */
const Button = styled.button`
  ${buttonStyle}
  ${width}
  cursor: pointer;
`

export default Button