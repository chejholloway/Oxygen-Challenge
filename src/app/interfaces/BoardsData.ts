export interface BoardsData {
  data: Board[];
  total: number;
  pagination: {
    hasMore: boolean;
    cursor: null | string;
  };
}
