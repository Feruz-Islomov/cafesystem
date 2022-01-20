import React from "react";
import { v4 as uuidv4 } from "uuid";

const PizzaProcessing = (props) => {
  const { TableNum, pizzas, finishes, fromKitchenToFinish } = props;
  return (
    <div className="prlists b burgermargin">
      <div className="prlist prSecond prheading">
        <div>PIZZA {TableNum}</div>
      </div>
      {pizzas
        ? pizzas.map((pizza) => {
            return (
              <div className="prlist prSecond" key={uuidv4()}>
                <div>{pizza.name}</div>
                <i>{pizza.qty}ta</i>
                <i
                  className="fas fa-check-circle"
                  onClick={() => fromKitchenToFinish(pizza)}
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
              return finish.category === "pizza" ? (
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

export default PizzaProcessing;
