// components/BoardsTitle.tsx
import { FC } from "react";
import BoardsTitleProps from "../interfaces/BoardsTitleProps";

const BoardsTitle: FC<BoardsTitleProps> = ({ count }) => {
  return (
    <span className="text-xs font-bold uppercase ml-2 text-gray-600">
      Boards ({count})
    </span>
  );
};

export default BoardsTitle;
