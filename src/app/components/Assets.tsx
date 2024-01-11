// components/Assets.tsx
import { FC, useEffect, useState } from 'react'
import Masonry from 'react-layout-masonry'
import Image from 'next/image'
import { block } from 'million/react-server'

import { headers } from '../config/apiAssetsConfig'
import { requestBody } from '../config/apiAssetsBody'
import Clip from '../interfaces/Clip'
import AssetsTitle from '../components/AssetsTitle'

const API_URL = 'https://api.air.inc/shorturl/bDkBvnzpB/clips/search'

const fetchAssets = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    if (!data.data) {
      throw new Error('Data is not available!')
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching assets: ${error.message}`)
    }
  }
}

const Assets: FC = () => {
  const [data, setData] = useState<{ data: { clips: Clip[] } } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAssets()
        setData(result)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="container mx-auto my-8 pl-2">
      <AssetsTitle count={String(data?.data.total)} />

      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={10}>
        {data?.data.clips.map(
          ({ id, assets, displayName, ext, height, width }) => (
            <div key={id} className="relative group flex pt-6 overflow-hidden">
              <Image
                src={assets.image}
                alt={displayName}
                width={300}
                height={240}
                style={{ maxHeight: '240px', maxWidth: 'auto' }}
                priority="true"
                className="w-full h-[240px] rounded-lg object-cover"
              />

              <div class="absolute cursor-pointer z-100 top-8 right-2 text-center hidden group-hover:block rounded-lg bg-black text-white flex justify-center items-center w-8 h-8 opacity-75">
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
}

export default Assets
