"use client";
import React, { ChangeEvent, MouseEvent } from "react";

const EventExample = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("searching !");
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div>
      <h2>hello Event</h2>
      <div>
        <form className="mt-4">
          <div className="w-[500px] flex items-center gap-3">
            <input
              type="text"
              placeholder="Search for anything..."
              onChange={handleChange}
              className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
            />
            <button
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-base"
              onClick={handleClick}
            >
              search
            </button>
          </div>
        </form>
        <div className="flex flex-wrap mt-5">
          <div className="lg:pl-0 p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex flex-col gap-3 border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-medium">
                  qui est esse
                </h3>
                <p className="text-gray-500">
                  est rerum tempore vitae sequi sint nihil reprehenderit dolor
                  beatae ea dolores neque fugiat blanditiis voluptate porro vel
                  nihil molestiae ut reiciendis qui aperiam non debitis possimus
                  qui neque nisi nulla
                </p>
                <button
                  className="px-3 py-2 mt-3 text-white text-sm font-medium bg-red-600 flex-shrink-0 rounded"
                  onClick={(e) => handleDelete(e, 1)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex flex-col gap-3 border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-medium">
                  qui est esse
                </h3>
                <p className="text-gray-500">
                  est rerum tempore vitae sequi sint nihil reprehenderit dolor
                  beatae ea dolores neque fugiat blanditiis voluptate porro vel
                  nihil molestiae ut reiciendis qui aperiam non debitis possimus
                  qui neque nisi nulla
                </p>
                <button
                  className="px-3 py-2 mt-3 text-white text-sm font-medium bg-red-600 flex-shrink-0 rounded"
                  onClick={(e) => handleDelete(e, 2)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex flex-col gap-3 border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-medium">
                  qui est esse
                </h3>
                <p className="text-gray-500">
                  est rerum tempore vitae sequi sint nihil reprehenderit dolor
                  beatae ea dolores neque fugiat blanditiis voluptate porro vel
                  nihil molestiae ut reiciendis qui aperiam non debitis possimus
                  qui neque nisi nulla
                </p>
                <button
                  className="px-3 py-2 mt-3 text-white text-sm font-medium bg-red-600 flex-shrink-0 rounded"
                  onClick={(e) => handleDelete(e, 3)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventExample;
