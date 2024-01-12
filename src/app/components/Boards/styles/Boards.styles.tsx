import tw, { styled } from 'twin.macro'

export const BoardsContainer = styled.div`
  ${tw`container mx-auto my-8`}
`
export const BoardsImageList = styled.div`
  ${tw`flex flex-wrap pt-6`}
`
export const Ellipses = styled.span`
  ${tw`absolute z-10 top-2 right-2 text-center hidden group-hover:block rounded-lg bg-black text-white flex justify-center items-center w-8 h-8 opacity-75`}
`

export const ImageContainer = styled.div`
  ${tw`w-full h-full bg-cover bg-center rounded-lg relative cursor-pointer`}
`

export const FadeEffect = styled.div`
  ${tw`absolute bottom-0 left-0 p-4 text-white font-sans text-xl antialiased font-semibold tracking-normal`}
`

export const Title = styled.h3`
  ${tw`absolute bottom-0 left-0 p-4 text-white font-sans text-xl antialiased font-semibold tracking-normal`}
`

export const Figure = `mb-4 mx-2 relative group w-[210px] h-[210px] rounded-lg overflow-hidden border-gray-200 border-0 opacity-0 hover:border-8 opacity-100 transition-all duration-200`
