import React from "react";

const CartItems = (props) => {
  const { cartItems, onAdd, onRemove, moveToStart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <div className="addCartContainer">
        {cartItems.length !== 0
          ? cartItems.map((item, index) => {
              return (
                <div className="listOrders" key={item._id}>
                  <div className="orderLeft">
                    <div className="pmbtns">
                      <h3>{index + 1})</h3>
                      <button className="pmbtn">
                        <i
                          className="fas fa-plus"
                          onClick={() => onAdd(item)}
                        ></i>
                      </button>
                      <h3>{item.qty}</h3>
                      <button className="pmbtn">
                        <i
                          className="fas fa-minus"
                          onClick={() => onRemove(item)}
                        ></i>
                      </button>
                    </div>
                    {/* <img src={item.img} alt="img" /> */}
                    <img
                      src={`https://burgerback.herokuapp.com/${item.img}`}
                      alt="img"
                    />
                    <h3>{item.name}</h3>
                  </div>
                  <div className="orderRight">
                    <h3>
                      {item.qty} x ${item.price}
                    </h3>
                  </div>
                </div>
              );
            })
          : // <div>The cart is empty</div>
            null}
      </div>
      <div className="totalCostOrders">
        <h2>
          total: <i className="fas fa-dollar-sign"></i>
          {itemsPrice}
        </h2>
        <button className="checkbtn" onClick={() => moveToStart()}>
          <i className="fas fa-shopping-cart"></i> checkout
        </button>
      </div>
    </>
  );
};

export default CartItems;
