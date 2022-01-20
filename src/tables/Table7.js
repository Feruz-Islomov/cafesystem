import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";

import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table7 = (props) => {
  const {
    cartItems7,
    starts7,
    burgers7,
    pizzas7,
    drinks7,
    finishes7,
    checks7,
    onAdd7,
    onRemove7,
    moveToStart7,
    deleteStart7,
    fromStartToKitchen7,
    fromKitchenToFinish7,
    fromFinishToCheck7,
    getChecks7,
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
  }, [finishes7]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd7} />

      <CartItems
        data={products}
        cartItems={cartItems7}
        onAdd={onAdd7}
        onRemove={onRemove7}
        moveToStart={moveToStart7}
      />
      <Processing
        starts={starts7}
        deleteStart={deleteStart7}
        burgers={burgers7}
        pizzas={pizzas7}
        drinks={drinks7}
        finishes={finishes7}
        checks={checks7}
        fromStartToKitchen={fromStartToKitchen7}
        fromKitchenToFinish={fromKitchenToFinish7}
        fromFinishToCheck={fromFinishToCheck7}
        getChecks={getChecks7}
      />
    </>
  );
};

export default Table7;
