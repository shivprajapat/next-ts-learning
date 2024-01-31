import Navbar from "@/components/Navbar";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-5">{children}</div>
    </div>
  );
};

export default PageLayout;
