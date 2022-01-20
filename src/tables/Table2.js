import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";
import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table2 = (props) => {
  const {
    cartItems2,
    starts2,
    burgers2,
    pizzas2,
    drinks2,
    finishes2,
    checks2,
    onAdd2,
    onRemove2,
    moveToStart2,
    deleteStart2,
    fromStartToKitchen2,
    fromKitchenToFinish2,
    fromFinishToCheck2,
    getChecks2,
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
  }, [finishes2]);

  return (
    <>
      <ProductScreen data={data} onAdd={onAdd2} />

      <CartItems
        data={products}
        cartItems={cartItems2}
        onAdd={onAdd2}
        onRemove={onRemove2}
        moveToStart={moveToStart2}
      />
      <Processing
        starts={starts2}
        deleteStart={deleteStart2}
        burgers={burgers2}
        pizzas={pizzas2}
        drinks={drinks2}
        finishes={finishes2}
        checks={checks2}
        fromStartToKitchen={fromStartToKitchen2}
        fromKitchenToFinish={fromKitchenToFinish2}
        fromFinishToCheck={fromFinishToCheck2}
        getChecks={getChecks2}
      />
    </>
  );
};

export default Table2;
