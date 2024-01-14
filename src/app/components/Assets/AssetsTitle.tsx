// components/AssetsTitle.tsx
import { FC } from 'react'
import AssetsTitleProps from '../interfaces/AssetsTitleProps'

import { AssetsTitleText } from './styles/AssetsStyles'

const AssetsTitle: FC<AssetsTitleProps> = ({ count }) => {
  const title = `assets (${count})`

  return (
    <AssetsTitleText>
      {title}
    </AssetsTitleText>
  )
}

export default AssetsTitle
