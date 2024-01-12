export interface FetcherProps<Data> {
  apiURL: string
  headers: Headers
  requestBody: Record<string, any>
  render: (data: Data) => React.ReactNode
}
