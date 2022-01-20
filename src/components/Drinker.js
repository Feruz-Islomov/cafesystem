import React, { useEffect } from "react";
import DrinkProcessing from "./DrinkProcessing";
import { Howl } from "howler";
import music2 from "../sounds/ting.mp3";
const Drinker = (props) => {
  const {
    drinks,
    finishes,
    fromKitchenToFinish,
    drinks2,
    finishes2,
    fromKitchenToFinish2,
    drinks3,
    finishes3,
    fromKitchenToFinish3,
    drinks4,
    finishes4,
    fromKitchenToFinish4,
    drinks5,
    finishes5,
    fromKitchenToFinish5,
    drinks6,
    finishes6,
    fromKitchenToFinish6,
    drinks7,
    finishes7,
    fromKitchenToFinish7,
    drinks8,
    finishes8,
    fromKitchenToFinish8,
    drinks9,
    finishes9,
    fromKitchenToFinish9,
    drinks10,
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
      return soundPlay(music2);
    };
    renderSounding();
  }, [
    drinks,
    drinks2,
    drinks3,
    drinks4,
    drinks5,
    drinks6,
    drinks7,
    drinks8,
    drinks9,
    drinks10,
  ]);
  return (
    <div className="burgererPage">
      <DrinkProcessing
        TableNum={TableNum[0]}
        drinks={drinks}
        finishes={finishes}
        fromKitchenToFinish={fromKitchenToFinish}
      />
      <DrinkProcessing
        TableNum={TableNum[1]}
        drinks={drinks2}
        finishes={finishes2}
        fromKitchenToFinish={fromKitchenToFinish2}
      />

      <DrinkProcessing
        TableNum={TableNum[2]}
        drinks={drinks3}
        finishes={finishes3}
        fromKitchenToFinish={fromKitchenToFinish3}
      />

      <DrinkProcessing
        TableNum={TableNum[3]}
        drinks={drinks4}
        finishes={finishes4}
        fromKitchenToFinish={fromKitchenToFinish4}
      />

      <DrinkProcessing
        TableNum={TableNum[4]}
        drinks={drinks5}
        finishes={finishes5}
        fromKitchenToFinish={fromKitchenToFinish5}
      />

      <DrinkProcessing
        TableNum={TableNum[5]}
        drinks={drinks6}
        finishes={finishes6}
        fromKitchenToFinish={fromKitchenToFinish6}
      />

      <DrinkProcessing
        TableNum={TableNum[6]}
        drinks={drinks7}
        finishes={finishes7}
        fromKitchenToFinish={fromKitchenToFinish7}
      />

      <DrinkProcessing
        TableNum={TableNum[7]}
        drinks={drinks8}
        finishes={finishes8}
        fromKitchenToFinish={fromKitchenToFinish8}
      />

      <DrinkProcessing
        TableNum={TableNum[8]}
        drinks={drinks9}
        finishes={finishes9}
        fromKitchenToFinish={fromKitchenToFinish9}
      />

      <DrinkProcessing
        TableNum={TableNum[9]}
        drinks={drinks10}
        finishes={finishes10}
        fromKitchenToFinish={fromKitchenToFinish10}
      />
    </div>
  );
};

export default Drinker;
