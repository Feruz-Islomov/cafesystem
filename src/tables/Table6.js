import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table6 = (props) => {
  const {
    cartItems6,
    starts6,
    burgers6,
    pizzas6,
    drinks6,
    finishes6,
    checks6,
    onAdd6,
    onRemove6,
    moveToStart6,
    deleteStart6,
    fromStartToKitchen6,
    fromKitchenToFinish6,
    fromFinishToCheck6,
    getChecks6,
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
  }, [finishes6]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd6} />

      <CartItems
        data={products}
        cartItems={cartItems6}
        onAdd={onAdd6}
        onRemove={onRemove6}
        moveToStart={moveToStart6}
      />
      <Processing
        starts={starts6}
        deleteStart={deleteStart6}
        burgers={burgers6}
        pizzas={pizzas6}
        drinks={drinks6}
        finishes={finishes6}
        checks={checks6}
        fromStartToKitchen={fromStartToKitchen6}
        fromKitchenToFinish={fromKitchenToFinish6}
        fromFinishToCheck={fromFinishToCheck6}
        getChecks={getChecks6}
      />
    </>
  );
};

export default Table6;
