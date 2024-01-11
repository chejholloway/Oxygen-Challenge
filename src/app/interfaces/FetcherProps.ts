export interface FetcherProps {
  queryKey: string[];
  queryFn: () => Promise<any>;
  children: (data: any, isLoading: boolean, error: Error | null) => ReactNode;
}
