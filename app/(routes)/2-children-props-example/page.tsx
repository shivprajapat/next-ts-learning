import React from "react";
import Parent from "./components/parent";
import Child from "./components/child";

const PropsExample = () => {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default PropsExample;
