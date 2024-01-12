// page.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Boards from './components/Boards/Boards'
import Assets from './components/Assets/Assets'
import { GlobalStyles } from 'twin.macro'

const queryClient = new QueryClient()

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <GlobalStyles />
        <Boards />
        <Assets />
      </main>
    </QueryClientProvider>
  )
}

export default Home
