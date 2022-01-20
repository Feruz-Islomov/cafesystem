import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table8 = (props) => {
  const {
    cartItems8,
    starts8,
    burgers8,
    pizzas8,
    drinks8,
    finishes8,
    checks8,
    onAdd8,
    onRemove8,
    moveToStart8,
    deleteStart8,
    fromStartToKitchen8,
    fromKitchenToFinish8,
    fromFinishToCheck8,
    getChecks8,
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
  }, [finishes8]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd8} />

      <CartItems
        data={products}
        cartItems={cartItems8}
        onAdd={onAdd8}
        onRemove={onRemove8}
        moveToStart={moveToStart8}
      />
      <Processing
        starts={starts8}
        deleteStart={deleteStart8}
        burgers={burgers8}
        pizzas={pizzas8}
        drinks={drinks8}
        finishes={finishes8}
        checks={checks8}
        fromStartToKitchen={fromStartToKitchen8}
        fromKitchenToFinish={fromKitchenToFinish8}
        fromFinishToCheck={fromFinishToCheck8}
        getChecks={getChecks8}
      />
    </>
  );
};

export default Table8;
