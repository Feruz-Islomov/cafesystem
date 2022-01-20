import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table5 = (props) => {
  const {
    cartItems5,
    starts5,
    burgers5,
    pizzas5,
    drinks5,
    finishes5,
    checks5,
    onAdd5,
    onRemove5,
    moveToStart5,
    deleteStart5,
    fromStartToKitchen5,
    fromKitchenToFinish5,
    fromFinishToCheck5,
    getChecks5,
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
  }, [finishes5]);

  return (
    <>
      <ProductScreen data={data} onAdd={onAdd5} />

      <CartItems
        data={products}
        cartItems={cartItems5}
        onAdd={onAdd5}
        onRemove={onRemove5}
        moveToStart={moveToStart5}
      />
      <Processing
        starts={starts5}
        deleteStart={deleteStart5}
        burgers={burgers5}
        pizzas={pizzas5}
        drinks={drinks5}
        finishes={finishes5}
        checks={checks5}
        fromStartToKitchen={fromStartToKitchen5}
        fromKitchenToFinish={fromKitchenToFinish5}
        fromFinishToCheck={fromFinishToCheck5}
        getChecks={getChecks5}
      />
    </>
  );
};

export default Table5;
