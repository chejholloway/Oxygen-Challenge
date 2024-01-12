// components/Boards.tsx
import { FC } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import Fetcher from '../Fetcher'

import Board from '../../interfaces/Board'
import BoardsData from '../../interfaces/BoardsData'
import BoardImage from './BoardImage'
import BoardsTitle from './BoardsTitle'

const Boards: FC = () => {
  return (
    <Fetcher
      apiURL={process.env.NEXT_PUBLIC_BOARDS_URL}
      headers={JSON.parse(process.env.NEXT_PUBLIC_BOARDS_HEADER)}
      requestBody={JSON.parse(process.env.NEXT_PUBLIC_BOARDS_BODY)}
      render={(data: BoardsData) => {
        const boards =
          data?.data.map(({ id, title, thumbnails }) => ({
            id,
            title,
            thumbnails,
          })) || []

        return (
          <div className="container mx-auto my-8">
            <BoardsTitle count={boards.length} />
            {boards.length > 0 && (
              <div className="flex flex-wrap pt-6">
                {boards.map(({ id, title, thumbnails }) => (
                  <BoardImage key={id} src={thumbnails[0]} alt={`${title}`} />
                ))}
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

export default Boards
