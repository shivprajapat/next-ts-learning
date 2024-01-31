import React from "react";

type User = {
  id: number;
  username: string;
};

type ItemProps<T extends User> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<{ id: number; username: string }>) => {
  return (
    <div>
      <h2>Generic</h2>
      <button>{props.id}</button>
      <h3>{props.title}</h3>
      <h2>Extra</h2>
      {props.extra.map((item: any) => {
        return (
          <div key={item.id}>
            <button>{item.id}</button>
            <h3>{item.username}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
