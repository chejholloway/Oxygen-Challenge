// components/Assets.tsx
import React from 'react'
import Masonry from 'react-layout-masonry'

import Fetcher from '../Fetcher'

import Clip from '../interfaces/Clip'
import AssetsTitle from './AssetsTitle'
import AssetImage from './AssetImage'

import { AssetsContainer } from './styles/AssetsStyles'

const Assets: React.FC = () => {
  return (
    <Fetcher
      apiURL={process.env.NEXT_PUBLIC_ASSETS_URL}
      headers={JSON.parse(process.env.NEXT_PUBLIC_ASSETS_HEADER)}
      requestBody={JSON.parse(process.env.NEXT_PUBLIC_ASSETS_BODY)}
      render={(data: { data: { clips: Clip[] } }) => {
        return (
          <AssetsContainer>
            <AssetsTitle count={String(data?.data.total)} />

            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={10}>
              {data?.data.clips.map((clip) => (
                <AssetImage key={clip.id} {...clip} />
              ))}
            </Masonry>
          </AssetsContainer>
        )
      }}
    />
  )
}

export default Assets
