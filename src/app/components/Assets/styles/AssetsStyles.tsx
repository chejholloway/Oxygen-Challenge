import tw, { styled } from 'twin.macro'

export const AssetsContainer = styled.div`
  ${tw`container mx-auto mt-8 pl-2`}
`
export const AssetsTitleText = styled.span`
  ${tw`text-xs font-bold text-gray-600 uppercase`}
`

export const EllipsesStyles = styled.span`
  ${tw`absolute cursor-pointer z-10 top-8 right-2 text-center hidden group-hover:block rounded-lg bg-black text-white flex justify-center items-center w-8 h-8 opacity-75`}
`

export const CaptionStyles = styled.div`
  ${tw`absolute bottom-0 left-0 right-0 p-4 opacity-0 text-white truncate transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-t from-black via-black to-transparent`}
`

export const Name = styled.p`
  ${tw`text-sm font-semibold`}
`

export const Dimensions = styled.p`
  ${tw`text-xs uppercase`}
`

export const AssetsImageGrid = `relative group flex pt-2 overflow-hidden`
