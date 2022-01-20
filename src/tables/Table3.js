import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";
import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";

const Table3 = (props) => {
  const {
    cartItems3,
    starts3,
    burgers3,
    pizzas3,
    drinks3,
    finishes3,
    checks3,
    onAdd3,
    onRemove3,
    moveToStart3,
    deleteStart3,
    fromStartToKitchen3,
    fromKitchenToFinish3,
    fromFinishToCheck3,
    getChecks3,
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
  }, [finishes3]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd3} />

      <CartItems
        data={products}
        cartItems={cartItems3}
        onAdd={onAdd3}
        onRemove={onRemove3}
        moveToStart={moveToStart3}
      />
      <Processing
        starts={starts3}
        deleteStart={deleteStart3}
        burgers={burgers3}
        pizzas={pizzas3}
        drinks={drinks3}
        finishes={finishes3}
        checks={checks3}
        fromStartToKitchen={fromStartToKitchen3}
        fromKitchenToFinish={fromKitchenToFinish3}
        fromFinishToCheck={fromFinishToCheck3}
        getChecks={getChecks3}
      />
    </>
  );
};

export default Table3;
