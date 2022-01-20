import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import Processing from "../components/Processing";
import ProductScreen from "../components/ProductScreen";
import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";
const Table1 = (props) => {
  const {
    cartItems,
    starts,
    burgers,
    pizzas,
    drinks,
    finishes,
    checks,
    onAdd,
    onRemove,
    moveToStart,
    deleteStart,
    fromStartToKitchen,
    fromKitchenToFinish,
    fromFinishToCheck,
    getChecks,
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
  }, [finishes]);
  return (
    <>
      <ProductScreen data={data} onAdd={onAdd} />
      <CartItems
        data={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        moveToStart={moveToStart}
      />
      <Processing
        starts={starts}
        deleteStart={deleteStart}
        burgers={burgers}
        pizzas={pizzas}
        drinks={drinks}
        finishes={finishes}
        checks={checks}
        fromStartToKitchen={fromStartToKitchen}
        fromKitchenToFinish={fromKitchenToFinish}
        fromFinishToCheck={fromFinishToCheck}
        getChecks={getChecks}
      />
    </>
  );
};

export default Table1;
