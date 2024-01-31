"use client";
import { UserType } from "@/types/types";
import React, { ChangeEvent, MouseEvent, useState } from "react";


const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div>
      <h2>use State</h2>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form className="mt-4">
          <div className="w-72 flex flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
            />
            <button
              className="text-center text-white bg-indigo-500 border-0 py-2 px-8 w-full rounded text-base"
              onClick={handleClick}
            >
              login
            </button>
          </div>
        </form>
      )}
      {user?.name}
    </div>
  );
};

export default UseStateExample;
