import React, { useEffect } from "react";
import PizzaProcessing from "./PizzaProcessing";
import { Howl } from "howler";
import music1 from "../sounds/iphoneding.mp3";
const Pizzarer = (props) => {
  const {
    pizzas,
    finishes,
    fromKitchenToFinish,
    pizzas2,
    finishes2,
    fromKitchenToFinish2,
    pizzas3,
    finishes3,
    fromKitchenToFinish3,
    pizzas4,
    finishes4,
    fromKitchenToFinish4,
    pizzas5,
    finishes5,
    fromKitchenToFinish5,
    pizzas6,
    finishes6,
    fromKitchenToFinish6,
    pizzas7,
    finishes7,
    fromKitchenToFinish7,
    pizzas8,
    finishes8,
    fromKitchenToFinish8,
    pizzas9,
    finishes9,
    fromKitchenToFinish9,
    pizzas10,
    finishes10,
    fromKitchenToFinish10,
  } = props;
  const TableNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
  }, [
    pizzas,
    pizzas2,
    pizzas3,
    pizzas4,
    pizzas5,
    pizzas6,
    pizzas7,
    pizzas8,
    pizzas9,
    pizzas10,
  ]);
  return (
    <div className="burgererPage">
      <PizzaProcessing
        TableNum={TableNum[0]}
        pizzas={pizzas}
        finishes={finishes}
        fromKitchenToFinish={fromKitchenToFinish}
      />

      <PizzaProcessing
        TableNum={TableNum[1]}
        pizzas={pizzas2}
        finishes={finishes2}
        fromKitchenToFinish={fromKitchenToFinish2}
      />

      <PizzaProcessing
        TableNum={TableNum[2]}
        pizzas={pizzas3}
        finishes={finishes3}
        fromKitchenToFinish={fromKitchenToFinish3}
      />

      <PizzaProcessing
        TableNum={TableNum[3]}
        pizzas={pizzas4}
        finishes={finishes4}
        fromKitchenToFinish={fromKitchenToFinish4}
      />

      <PizzaProcessing
        TableNum={TableNum[4]}
        pizzas={pizzas5}
        finishes={finishes5}
        fromKitchenToFinish={fromKitchenToFinish5}
      />

      <PizzaProcessing
        TableNum={TableNum[5]}
        pizzas={pizzas6}
        finishes={finishes6}
        fromKitchenToFinish={fromKitchenToFinish6}
      />

      <PizzaProcessing
        TableNum={TableNum[6]}
        pizzas={pizzas7}
        finishes={finishes7}
        fromKitchenToFinish={fromKitchenToFinish7}
      />

      <PizzaProcessing
        TableNum={TableNum[7]}
        pizzas={pizzas8}
        finishes={finishes8}
        fromKitchenToFinish={fromKitchenToFinish8}
      />

      <PizzaProcessing
        TableNum={TableNum[8]}
        pizzas={pizzas9}
        finishes={finishes9}
        fromKitchenToFinish={fromKitchenToFinish9}
      />

      <PizzaProcessing
        TableNum={TableNum[9]}
        pizzas={pizzas10}
        finishes={finishes10}
        fromKitchenToFinish={fromKitchenToFinish10}
      />
    </div>
  );
};

export default Pizzarer;
