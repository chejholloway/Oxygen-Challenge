// page.

"use client";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Boards from "./components/Boards";
import Assets from "./components/Assets";

const queryClient = new QueryClient();

function Home({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Boards />
        <Assets />
      </main>
    </QueryClientProvider>
  );
}

export default Home;
