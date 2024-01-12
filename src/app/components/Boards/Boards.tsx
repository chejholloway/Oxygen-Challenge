// components/Boards.tsx
import { FC } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import Fetcher from '../Fetcher'

import Board from '../../interfaces/Board'
import BoardsData from '../../interfaces/BoardsData'
import BoardImage from './BoardImage'
import BoardsTitle from './BoardsTitle'

import { BoardsContainer, BoardsImageList } from './styles/Boards.styles'

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
          <BoardsContainer>
            <BoardsTitle count={boards.length} />
            {boards.length > 0 && (
              <BoardsImageList>
                {boards.map(({ id, title, thumbnails }) => (
                  <BoardImage key={id} src={thumbnails[0]} alt={`${title}`} />
                ))}
              </BoardsImageList>
            )}
          </BoardsContainer>
        )
      }}
    />
  )
}

export default Boards
