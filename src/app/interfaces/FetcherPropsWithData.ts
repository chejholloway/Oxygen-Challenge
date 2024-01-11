export interface FetcherPropsWithData extends FetcherProps {
  children: (
    data: BoardsData,
    isLoading: boolean,
    error: Error | null
  ) => ReactNode;
}
