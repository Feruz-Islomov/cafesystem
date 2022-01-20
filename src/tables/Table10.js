import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table10 = (props) => {
  const {
    cartItems10,
    starts10,
    burgers10,
    pizzas10,
    drinks10,
    finishes10,
    checks10,
    onAdd10,
    onRemove10,
    moveToStart10,
    deleteStart10,
    fromStartToKitchen10,
    fromKitchenToFinish10,
    fromFinishToCheck10,
    getChecks10,
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
  }, [finishes10]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd10} />

      <CartItems
        data={products}
        cartItems={cartItems10}
        onAdd={onAdd10}
        onRemove={onRemove10}
        moveToStart={moveToStart10}
      />
      <Processing
        starts={starts10}
        deleteStart={deleteStart10}
        burgers={burgers10}
        pizzas={pizzas10}
        drinks={drinks10}
        finishes={finishes10}
        checks={checks10}
        fromStartToKitchen={fromStartToKitchen10}
        fromKitchenToFinish={fromKitchenToFinish10}
        fromFinishToCheck={fromFinishToCheck10}
        getChecks={getChecks10}
      />
    </>
  );
};

export default Table10;
