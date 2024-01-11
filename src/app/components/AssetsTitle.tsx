// components/AssetsTitle.tsx
import { FC } from 'react'
import AssetsTitleProps from '../interfaces/AssetsTitleProps'

const AssetsTitle: FC<AssetsTitleProps> = ({ count }) => {
  const title = `4 Sub-groups ${count} assets`
  return (
    <span className="text-xs font-bold ml-2 text-gray-600">
      {title}
    </span>
  )
}

export default AssetsTitle
