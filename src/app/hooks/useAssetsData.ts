import { useQuery } from "@tanstack/react-query";
import { headers } from "../components/Assets/apiAssetsConfig";
import { requestBody } from "../components/Assets/apiAssetsBody";

const API_URL = "https://api.air.inc/shorturl/bDkBvnzpB/clips/search";

const fetchAssets = async () => {
  const res = fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  });

  if (!data.data) {
    throw new Error("Data is not available!");
  }
  console.log(data);
  return data;
};

export const useAssetsData = () => {
  return useQuery({
    queryKey: ["assetsData"],
    queryFn: fetchAssets,
  });
};
