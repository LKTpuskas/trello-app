import React from 'react'
import IconBase from '../icon-base'

const IconDot = props => (
  <IconBase viewBox="0 0 20 20" {...props}>
    <circle
      stroke="#E4A9A9"
      fill="#E4A9A9"
      cx={10}
      cy={10}
      r={9}
      fillRule="evenodd"
    />
  </IconBase>
)

export default IconDot
