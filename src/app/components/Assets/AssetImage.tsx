// components/AssetImage.tsx
import React from 'react'
import Image from 'next/image'

import AssetImageProps from '../../interfaces/AssetImageProps'
import Ellipses from './Ellipses'
// import Caption from './Caption'

import { AssetsImageGrid } from './styles/AssetsStyles'

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
      width={0}
      height={0}
      sizes="100vw"
      className="w-full rounded-sm"
      style={{ height: 'auto', width: '100%' }}
      priority={true}

    />
    <Ellipses />
    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 text-white transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-t from-black via-black to-transparent cursor-pointer">
      <p className="text-xs font-normal truncate ">{displayName}</p>
      <p className="text-xs uppercase">
        {ext} {height} x {width}
      </p>
    </div>
  </div>
)

export default AssetImage
