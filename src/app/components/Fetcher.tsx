// components/Fetcher.tsx
import { FC, ReactNode } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import BoardsData from "../interfaces/BoardsData";
import FetcherProps from "../interfaces/FetcherProps";
import FetcherDataWithProps from "../interfaces/FetcherDataWithProps";

const Fetcher: FC<FetcherPropsWithData> = ({ queryKey, queryFn, children }) => {
  const queryClient = new QueryClient();

  const { data, isLoading, error } = useQuery<BoardsData>(queryKey, queryFn, {
    queryClient,
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children(data, isLoading, error)}
    </QueryClientProvider>
  );
};

export default Fetcher;
