/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const root = customStyle => css`
  fill: currentColor;
  width: 28px;
  height: 28px;
  max-width: 100%;
  vertical-align: middle;
  ${customStyle};
`

const IconBase = ({ children, customStyle, viewBox }) => (
  <svg
    css={root(customStyle)}
    focusable="false"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {children}
  </svg>
)

IconBase.defaultProps = {
  viewBox: '0 0 200 200'
}

export default IconBase
