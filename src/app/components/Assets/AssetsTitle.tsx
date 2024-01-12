// components/AssetsTitle.tsx
import { FC } from 'react'
import AssetsTitleProps from '../interfaces/AssetsTitleProps'

import { AssetsTitleText } from './styles/AssetsStyles'

const AssetsTitle: FC<AssetsTitleProps> = ({ count }) => {
  const title = `4 Sub-groups ${count} assets`
  
  return (
    <AssetsTitleText>
      {title}
    </AssetsTitleText>
  )
}

export default AssetsTitle
