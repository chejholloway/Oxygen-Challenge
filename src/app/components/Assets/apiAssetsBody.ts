// config/apiBody.ts
export const requestBody = {
  limit: 72,
  type: "all",
  withOpenDiscussionStatus: true,
  filters: {
    board: {
      is: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
    },
  },
  boardId: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
  sortField: {
    direction: "desc",
    name: "dateModified",
  },
  descendantBoardId: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
};
