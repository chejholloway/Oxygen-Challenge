// components/Fetcher.tsx
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

interface FetcherProps<Data> {
  apiURL: string
  headers: Headers
  requestBody: Record<string, any>
  render: (data: Data) => React.ReactNode
}

const Fetcher: FC<FetcherProps<any>> = ({
  apiURL,
  headers,
  requestBody,
  render,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [apiURL],
    queryFn: async () => {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      return response.json()
    },
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return <>{render(data)}</>
}

export default Fetcher
