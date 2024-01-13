// components/BoardImage.tsx
import { FC } from 'react'
import Image from 'next/image'

import BoardImageProps from '../../interfaces/BoardImageProps.js'
import { Ellipses, FadeEffect, Title } from './styles/Boards.styles'

const BoardImage: FC<BoardImageProps> = ({ src, alt }) => (
  <figure className="mb-4 mx-2 relative group w-[210px] h-[210px] rounded-lg overflow-hidden border-gray-200 border-0 opacity-0 hover:border-8 opacity-100 transition-all duration-200 ">
    <div
      className="w-full h-full bg-cover bg-center rounded-lg relative cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}>
      <Ellipses>...</Ellipses>
      <div className="absolute inset-0  bg-gradient-to-t from-black to-white opacity-50 rounded-lg"></div>{' '}
      <Title>{alt}</Title>
    </div>
  </figure>
)

export default BoardImage
