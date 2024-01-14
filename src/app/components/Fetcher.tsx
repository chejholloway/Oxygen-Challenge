// components/Fetcher.tsx
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import FetcherProps from '../interfaces/FetcherProps'


const Fetcher: FC<FetcherProps<any>> = ({
  apiURL,
  headers,
  requestBody,
  render,
}) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [apiURL],
    queryFn: async () => {
      const response = await fetch(apiURL, options)

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
