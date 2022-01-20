import React, { useEffect } from "react";
import BurgerProceccing from "./BurgerProceccing";
import { Howl } from "howler";
import music from "../sounds/chring.mp3";

const Burgerer = (props) => {
  const {
    burgers,
    finishes,
    fromKitchenToFinish,
    burgers2,
    finishes2,
    fromKitchenToFinish2,
    burgers3,
    finishes3,
    fromKitchenToFinish3,
    burgers4,
    finishes4,
    fromKitchenToFinish4,
    burgers5,
    finishes5,
    fromKitchenToFinish5,
    burgers6,
    finishes6,
    fromKitchenToFinish6,
    burgers7,
    finishes7,
    fromKitchenToFinish7,
    burgers8,
    finishes8,
    fromKitchenToFinish8,
    burgers9,
    finishes9,
    fromKitchenToFinish9,
    burgers10,
    finishes10,
    fromKitchenToFinish10,
  } = props;
  const TableNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  useEffect(() => {
    const renderSounding = () => {
      return soundPlay(music);
    };
    renderSounding();
  }, [
    burgers,
    burgers2,
    burgers3,
    burgers4,
    burgers5,
    burgers6,
    burgers7,
    burgers8,
    burgers9,
    burgers10,
  ]);

  return (
    <div className="burgererPage">
      <BurgerProceccing
        TableNum={TableNum[0]}
        burgers={burgers}
        finishes={finishes}
        fromKitchenToFinish={fromKitchenToFinish}
      />
      <BurgerProceccing
        TableNum={TableNum[1]}
        burgers={burgers2}
        finishes={finishes2}
        fromKitchenToFinish={fromKitchenToFinish2}
      />
      <BurgerProceccing
        TableNum={TableNum[2]}
        burgers={burgers3}
        finishes={finishes3}
        fromKitchenToFinish={fromKitchenToFinish3}
      />
      <BurgerProceccing
        TableNum={TableNum[3]}
        burgers={burgers4}
        finishes={finishes4}
        fromKitchenToFinish={fromKitchenToFinish4}
      />
      <BurgerProceccing
        TableNum={TableNum[4]}
        burgers={burgers5}
        finishes={finishes5}
        fromKitchenToFinish={fromKitchenToFinish5}
      />
      <BurgerProceccing
        TableNum={TableNum[5]}
        burgers={burgers6}
        finishes={finishes6}
        fromKitchenToFinish={fromKitchenToFinish6}
      />
      <BurgerProceccing
        TableNum={TableNum[6]}
        burgers={burgers7}
        finishes={finishes7}
        fromKitchenToFinish={fromKitchenToFinish7}
      />
      <BurgerProceccing
        TableNum={TableNum[7]}
        burgers={burgers8}
        finishes={finishes8}
        fromKitchenToFinish={fromKitchenToFinish8}
      />
      <BurgerProceccing
        TableNum={TableNum[8]}
        burgers={burgers9}
        finishes={finishes9}
        fromKitchenToFinish={fromKitchenToFinish9}
      />
      <BurgerProceccing
        TableNum={TableNum[9]}
        burgers={burgers10}
        finishes={finishes10}
        fromKitchenToFinish={fromKitchenToFinish10}
      />
    </div>
  );
};

export default Burgerer;
