// page.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Boards from './components/Boards/Boards'
import Assets from './components/Assets/Assets'
// import { block } from 'million/react-server'

const queryClient = new QueryClient()
// const AssetsBlock = block(Assets)
// const BoardsBlock = block(Boards)

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Boards />
        <Assets />
      </main>
    </QueryClientProvider>
  )
}

export default Home
