// components/Assets.tsx
import { FC, useEffect, useState } from 'react'
import Masonry from 'react-layout-masonry'
import Image from 'next/image'
import { block } from 'million/react-server'
import Fetcher from '../Fetcher'

import { headers } from './apiAssetsConfig'
import { requestBody } from './apiAssetsBody'
import Clip from '../interfaces/Clip'
import AssetsTitle from './AssetsTitle'

const API_URL = 'https://api.air.inc/shorturl/bDkBvnzpB/clips/search'

const Assets: FC = () => {
  return (
    <Fetcher
      apiURL={API_URL}
      headers={headers}
      requestBody={requestBody}
      render={(data: { data: { clips: Clip[] } }) => {
        return (
          <div className="container mx-auto my-8 pl-2">
            <AssetsTitle count={String(data?.data.total)} />

            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={10}>
              {data?.data.clips.map(
                ({ id, assets, displayName, ext, height, width }) => (
                  <div
                    key={id}
                    className="relative group flex pt-6 overflow-hidden">
                    <Image
                      src={assets.image}
                      alt={displayName}
                      width={300}
                      height={240}
                      style={{ maxHeight: '240px', maxWidth: 'auto' }}
                      priority="true"
                      className="w-full h-[240px] rounded-lg object-cover"
                    />

                    <div className="absolute cursor-pointer z-100 top-8 right-2 text-center hidden group-hover:block rounded-lg bg-black text-white flex justify-center items-center w-8 h-8 opacity-75">
                      ...
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 text-white truncate transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-t from-black via-black to-transparent">
                      <p className="text-sm font-semibold">{displayName}</p>
                      <p className="text-xs uppercase">
                        {ext} {height} x {width}
                      </p>
                    </div>
                  </div>
                )
              )}
            </Masonry>
          </div>
        )
      }}
    />
  )
}

export default Assets
