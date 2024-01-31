"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const ContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);

  return (
    <div>
      <h2>use Context</h2>
      <div className="mt-4 flex gap-2 mx-auto flex-col w-fit">
        <button
          className="text-center text-white bg-indigo-500 border-0 py-2 px-8 w-full rounded text-base"
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          Change Theme
        </button>
        <button
          className="text-center text-white bg-indigo-500 border-0 py-2 px-8 w-full rounded text-base"
          onClick={() => dispatch({ type: "CHANGE_FONTSIZE" })}>
          Change Font Size
        </button>
      </div>
    </div>
  );
};

export default ContextExample;
