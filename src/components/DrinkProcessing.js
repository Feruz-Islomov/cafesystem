import React from "react";
import { v4 as uuidv4 } from "uuid";

const DrinkProcessing = (props) => {
  const { TableNum, drinks, finishes, fromKitchenToFinish } = props;
  return (
    <div className="prlists b burgermargin">
      <div className="prlist prSecond prheading">
        <div>DRINKS {TableNum}</div>
      </div>
      {drinks
        ? drinks.map((drink) => {
            return (
              <div className="prlist prSecond" key={uuidv4()}>
                <div>{drink.name}</div>
                <i>{drink.qty}ta</i>
                <i
                  className="fas fa-check-circle"
                  onClick={() => fromKitchenToFinish(drink)}
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
              return finish.category === "drink" ? (
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

export default DrinkProcessing;
