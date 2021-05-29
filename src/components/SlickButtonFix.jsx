import React from 'react'

const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <div {...props}>{children}</div>
)

export default SlickButtonFix
