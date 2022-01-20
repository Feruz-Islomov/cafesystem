import React from "react";

const MenuItem = (props) => {
  const { menu, getMenuName } = props;
  return (
    <div>
      <img
        src={`https://burgerback.herokuapp.com/${menu.img}`}
        alt={menu.name}
        onClick={() => getMenuName(menu.name)}
      />
      <h3>{menu.name}</h3>
    </div>
  );
};

export default MenuItem;
