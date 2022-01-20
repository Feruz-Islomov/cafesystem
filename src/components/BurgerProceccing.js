import React from "react";
import { v4 as uuidv4 } from "uuid";

const BurgerProceccing = (props) => {
  const { TableNum, burgers, finishes, fromKitchenToFinish } = props;
  return (
    <div className="prlists a burgermargin">
      <div className="prlist prSecond prheading">
        <div>BURGERS {TableNum}</div>
      </div>
      {burgers
        ? burgers.map((burger) => {
            return (
              <div className="prlist prSecond" key={uuidv4()}>
                <div>{burger.name}</div>
                <i>{burger.qty}ta</i>
                <i
                  className="fas fa-check-circle"
                  onClick={() => fromKitchenToFinish(burger)}
                ></i>
              </div>
            );
          })
        : null}

      <div className="prlists">
        <div className="prlist prThird prheading">
          <div>FINISHED</div>
        </div>
        {finishes
          ? finishes.map((finish) => {
              return finish.category === "burger" ? (
                <div className="prlist prThird" key={uuidv4()}>
                  <div>
                    {finish.name} {finish.qty} ta
                  </div>
                  <i></i>
                </div>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};

export default BurgerProceccing;
