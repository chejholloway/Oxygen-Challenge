// components/Boards.tsx
import { FC } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import Fetcher from '../Fetcher'
import { headers } from './apiConfig'
import { requestBody } from './apiBody'
import Board from '../../interfaces/Board'
import BoardsData from '../../interfaces/BoardsData'
import BoardImage from './BoardImage'
import BoardsTitle from './BoardsTitle'

// const API_URL = process.env.BOARDS_URL;
const API_URL =
  'https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514'

const Boards: FC = () => {
  return (
    <Fetcher
      apiURL={API_URL}
      headers={headers}
      requestBody={requestBody}
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
