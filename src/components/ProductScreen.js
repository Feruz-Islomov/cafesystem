import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./Products";

const ProductScreen = (props) => {
  const { data, onAdd } = props;
  const menus = data.Menu;
  const [menuName, setMenuName] = useState("");
  // const Menu = data.Menu;
  // console.log(menus[1].name);
  const Mcproducts = data.McProducts;
  const Kfcproducts = data.KfcProducts;
  const Pizzaproducts = data.PizzaProducts;
  const Drinksproducts = data.DrinksProducts;
  const BuggetBurgersProductsproducts = data.BuggetBurgersProducts;

  const getMenuName = (name) => {
    return setMenuName(name);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
    });
  });

  return (
    <>
      <div className="productsContainer">
        <div className="menu">
          <div data-aos="slide-down">
            {menus ? (
              menus.map((menu) => {
                return (
                  <MenuItem
                    key={menu._id}
                    menu={menu}
                    getMenuName={getMenuName}
                  />
                );
              })
            ) : (
              <h1>No Data is provided</h1>
            )}
          </div>
        </div>

        <div className="menuItems aos">
          <div className="menuItems" data-aos="slide-left">
            {Mcproducts && (menuName === menus[0].name || menuName === "")
              ? Mcproducts.map((product) => {
                  return (
                    <Products
                      key={product._id}
                      product={product}
                      onAdd={onAdd}
                    />
                  );
                })
              : menus && menuName === menus[1].name
              ? Kfcproducts.map((product) => {
                  return (
                    <Products
                      key={product._id}
                      product={product}
                      onAdd={onAdd}
                    />
                  );
                })
              : menus && menuName === menus[2].name
              ? Pizzaproducts.map((product) => {
                  return (
                    <Products
                      key={product._id}
                      product={product}
                      onAdd={onAdd}
                    />
                  );
                })
              : menus && menuName === menus[3].name
              ? BuggetBurgersProductsproducts.map((product) => {
                  return (
                    <Products
                      key={product._id}
                      product={product}
                      onAdd={onAdd}
                    />
                  );
                })
              : menus && menuName === menus[4].name
              ? Drinksproducts.map((product) => {
                  return (
                    <Products
                      key={product._id}
                      product={product}
                      onAdd={onAdd}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
