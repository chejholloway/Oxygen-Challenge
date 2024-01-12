// components/AssetImage.tsx
import React from 'react'
import Image from 'next/image'

import AssetImageProps from '../../interfaces/AssetImageProps'
import Ellipses from './Ellipses'
import Caption from './Caption'

import { AssetsImageGrid, ImageStyles } from './styles/AssetsStyles'

const AssetImage: React.FC<AssetImageProps> = ({
  id,
  assets,
  displayName,
  ext,
  height,
  width,
}) => (
  <div key={id} className={AssetsImageGrid}>
    <Image
      src={assets.image}
      alt={displayName}
      width={300}
      height={240}
      style={{ maxHeight: '240px', maxWidth: 'auto' }}
      priority={true}
      className={ImageStyles}
    />
    <Ellipses />
    <Caption />
  </div>
)

export default AssetImage
