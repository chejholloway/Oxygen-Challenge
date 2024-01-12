// components/Assets.tsx
import React from 'react'
import Masonry from 'react-layout-masonry'

import Fetcher from '../Fetcher'
import { headers } from './apiAssetsConfig' // externalize to .env
import { requestBody } from './apiAssetsBody' // externalize to .env

import Clip from '../interfaces/Clip'
import AssetsTitle from './AssetsTitle'
import AssetImage from './AssetImage'

import { AssetsContainer } from './styles/AssetsStyles'

const API_URL = process.env.NEXT_PUBLIC_ASSETS_URL

const Assets: React.FC = () => {
  return (
    <Fetcher
      apiURL={API_URL}
      headers={headers}
      requestBody={requestBody}
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
