// components/Caption.tsx
import React from 'react'

import CaptionProps from '../../interfaces/CaptionProps'
import { CaptionStyles, Name, Dimensions } from './styles/AssetsStyles'

const Caption: React.FC<CaptionProps> = ({
  displayName,
  ext,
  height,
  width,
}) => (
  <CaptionStyles>
    <Name>{displayName}</Name>
    <Dimensions>
      {ext} {height} x {width}
    </Dimensions>
  </CaptionStyles>
)

export default Caption
