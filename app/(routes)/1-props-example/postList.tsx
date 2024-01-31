import React from "react";
import PostCard from "./postCard";
import { PostType } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const PostList = async () => {
  const data: PostType[] = await getData();
  return (
    <section>
      <div className="container py-10 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Post List
        </h1>
        <div className="flex flex-wrap -m-2">
          {data.slice(0, 9).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
