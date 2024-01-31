"use client";
import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";

type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "green" | "yellow";

type ItemProps = {
  // color: string;
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};
const Shape = ({ color }: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: TwoDShapeType = "square";
  console.log(shape);
  console.log(twoDShape);

  return <div>Shape Color</div>;
};

export default Shape;
