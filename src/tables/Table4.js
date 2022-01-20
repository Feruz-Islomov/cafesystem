import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table4 = (props) => {
  const {
    cartItems4,
    starts4,
    burgers4,
    pizzas4,
    drinks4,
    finishes4,
    checks4,
    onAdd4,
    onRemove4,
    moveToStart4,
    deleteStart4,
    fromStartToKitchen4,
    fromKitchenToFinish4,
    fromFinishToCheck4,
    getChecks4,
    data,
  } = props;
  const products = data;
  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      //   html5: true,
    });
    sound.play();
  };
  useEffect(() => {
    const renderSounding = () => {
      return soundPlay(music1);
    };
    renderSounding();
  }, [finishes4]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd4} />

      <CartItems
        data={products}
        cartItems={cartItems4}
        onAdd={onAdd4}
        onRemove={onRemove4}
        moveToStart={moveToStart4}
      />
      <Processing
        starts={starts4}
        deleteStart={deleteStart4}
        burgers={burgers4}
        pizzas={pizzas4}
        drinks={drinks4}
        finishes={finishes4}
        checks={checks4}
        fromStartToKitchen={fromStartToKitchen4}
        fromKitchenToFinish={fromKitchenToFinish4}
        fromFinishToCheck={fromFinishToCheck4}
        getChecks={getChecks4}
      />
    </>
  );
};

export default Table4;
