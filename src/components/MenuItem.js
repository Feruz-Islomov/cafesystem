import React from "react";
import { url } from "./Api";

const MenuItem = (props) => {
  const { menu, getMenuName } = props;
  return (
    <div>
      <img
        src={url + menu.img}
        alt={menu.name}
        onClick={() => getMenuName(menu.name)}
      />
      <h3>{menu.name}</h3>
    </div>
  );
};

export default MenuItem;
