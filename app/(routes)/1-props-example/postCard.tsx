import { PostType } from "@/types/types";
import React from "react";

const PostCard = ({ id, title, body }: PostType) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex flex-col gap-3 border-gray-200 border p-4 rounded-lg">
        <button className="w-8 h-8 bg-gray-100 text-sm font-medium text-red-600 flex-shrink-0 rounded-full mr-4">
          {id}
        </button>

        <div className="flex-grow">
          <h3 className="text-gray-900 text-xl font-medium">{title}</h3>
          <p className="text-gray-500">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
