// components/BoardImage.tsx
import { FC } from 'react'
import Image from 'next/image'
import BoardImageProps from '../../interfaces/BoardImageProps.js'

const BoardImage: FC<BoardImageProps> = ({ src, alt }) => (
  <figure className="mb-4 mx-2 relative group w-[210px] h-[210px] rounded-lg overflow-hidden border-gray-200 border-0 opacity-0 hover:border-8 opacity-100 transition-all duration-200 ">
    <div
      className="w-full h-full bg-cover bg-center rounded-lg relative cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}>
      <div className="absolute z-100 top-2 right-2 text-center hidden group-hover:block rounded-lg bg-black text-white flex justify-center items-center w-8 h-8 opacity-75">
        ...
      </div>
      <div className="absolute inset-0  bg-gradient-to-t from-black to-white opacity-50 rounded-lg"></div>
      <h3 className="absolute bottom-0 left-0 p-4 text-white font-sans text-xl antialiased font-semibold tracking-normal">
        {alt}
      </h3>
    </div>
  </figure>
)

export default BoardImage
