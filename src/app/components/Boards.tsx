// components/Boards.tsx
import { FC } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { headers } from "../config/apiConfig.ts";
import { requestBody } from "../config/apiBody";
import Board from "../interfaces/Board.ts";
import BoardsData from "../interfaces/BoardsData.ts";
// const API_URL = process.env.BOARDS_URL;

const API_URL =
  "https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514";

const fetchBoardsData = async (): Promise<BoardsData> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Boards: FC = () => {
  const { data, isLoading, error } = useQuery<BoardsData>({
    queryKey: ["boardsData"],
    queryFn: fetchBoardsData,
  });

  const boards =
    data?.data.map(({ id, title, thumbnails }) => ({
      id,
      title,
      thumbnails,
    })) || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      {boards.length > 0 && (
        <div className="flex flex-wrap">
          <h2 className="text-xl font-semibold mb-2">Boards</h2>
          {boards.map(({ id, title, thumbnails }) => (
            <figure key={id} className="mb-4 mx-2">
              <Image
                src={thumbnails[0]}
                alt={`Thumbnail for ${title}`}
                width={210}
                height={210}
              />
              <figcaption className="text-center mt-2">{title}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default Boards;
