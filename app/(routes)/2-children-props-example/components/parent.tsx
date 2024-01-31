import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Hello Parent</h2>
      {children}
    </div>
  );
};

export default Parent;
