// components/Caption.tsx
import React from 'react'

import CaptionProps from '../../interfaces/CaptionProps'

const Caption: React.FC<CaptionProps> = ({
  displayName,
  ext,
  height,
  width,
}) => (
    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 text-white transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-t from-black via-black to-transparent">
      <p className="text-xs font-normal truncate ">{displayName}</p>
      <p className="text-xs uppercase">
        {ext} {height} x {width}
      </p>
    </div>
)

export default Caption
