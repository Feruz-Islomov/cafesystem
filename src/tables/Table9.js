import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table9 = (props) => {
  const {
    cartItems9,
    starts9,
    burgers9,
    pizzas9,
    drinks9,
    finishes9,
    checks9,
    onAdd9,
    onRemove9,
    moveToStart9,
    deleteStart9,
    fromStartToKitchen9,
    fromKitchenToFinish9,
    fromFinishToCheck9,
    getChecks9,
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
  }, [finishes9]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd9} />

      <CartItems
        data={products}
        cartItems={cartItems9}
        onAdd={onAdd9}
        onRemove={onRemove9}
        moveToStart={moveToStart9}
      />
      <Processing
        starts={starts9}
        deleteStart={deleteStart9}
        burgers={burgers9}
        pizzas={pizzas9}
        drinks={drinks9}
        finishes={finishes9}
        checks={checks9}
        fromStartToKitchen={fromStartToKitchen9}
        fromKitchenToFinish={fromKitchenToFinish9}
        fromFinishToCheck={fromFinishToCheck9}
        getChecks={getChecks9}
      />
    </>
  );
};

export default Table9;
