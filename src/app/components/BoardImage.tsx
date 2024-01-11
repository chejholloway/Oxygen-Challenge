// components/BoardImage.tsx
import { FC } from "react";
import Image from "next/image";
import BoardImageProps from "../interfaces/BoardImageProps.ts";

const BoardImage: FC<BoardImageProps> = ({ src, alt }) => (
  <figure className="mb-4 mx-2 relative w-[210px] h-[210px] rounded-lg overflow-hidden">
    <div
      className="w-full h-full bg-cover bg-center rounded-lg relative"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute inset-0  bg-gradient-to-t from-black to-white opacity-50 rounded-lg"></div>
      <h3 className="absolute bottom-0 left-0 p-4 text-white font-sans text-xl antialiased font-semibold tracking-normal">
        {alt}
      </h3>
    </div>
  </figure>
);

export default BoardImage;
