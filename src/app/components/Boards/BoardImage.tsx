// components/BoardImage.tsx
import { FC } from 'react'
import Image from 'next/image'

import BoardImageProps from '../../interfaces/BoardImageProps.js'
import {
  Ellipses,
  FadeEffect,
  Figure,
  ImageContainer,
  Title,
} from './styles/Boards.styles'

const BoardImage: FC<BoardImageProps> = ({ src, alt }) => (
  <figure className={Figure}>
    <ImageContainer style={{ backgroundImage: `url(${src})` }}>
      <Ellipses>...</Ellipses>
      <FadeEffect />
      <Title>{alt}</Title>
    </ImageContainer>
  </figure>
)

export default BoardImage
