import React from "react";
import PostList from "./postList";
import ItemList from "@/components/generic/ItemList";
import ShapeList from "@/components/exclude/ShapeList";

const PropsExample = () => {
  return (
    <div>
      <h2>Hello Props </h2>
      <ItemList />
      <ShapeList />
      <PostList />
    </div>
  );
};

export default PropsExample;
