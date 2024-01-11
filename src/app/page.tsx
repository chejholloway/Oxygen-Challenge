// page.

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Boards from './components/Boards'
import Assets from './components/Assets'

const queryClient = new QueryClient()

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
