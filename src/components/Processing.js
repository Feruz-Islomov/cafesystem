import React from "react";
import { v4 as uuidv4 } from "uuid";

const Processing = (props) => {
  const {
    starts,
    burgers,
    pizzas,
    drinks,
    finishes,
    checks,
    fromStartToKitchen,
    deleteStart,
    fromKitchenToFinish,
    fromFinishToCheck,
    getChecks,
  } = props;

  return (
    <>
      <div>
        <h1>PROCESSING</h1>
      </div>
      <div className="processingContainer">
        <div className="processTable">
          <div className="prlists">
            <div className="prlist prFirst prheading">
              <div>ORDER LIST</div>
            </div>
            {starts
              ? starts.map((start) => {
                  return (
                    <div className="prlist prFirst" key={uuidv4()}>
                      <i
                        className="fas fa-check-circle"
                        onClick={() => fromStartToKitchen(start)}
                      ></i>
                      <div>
                        {start.name} {start.qty}ta
                      </div>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteStart(start)}
                      ></i>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="prlists a">
            <div className="prlist prSecond prheading">
              <div>BURGERS</div>
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
          </div>
          <div className="prlists b">
            <div className="prlist prSecond prheading">
              <div>PIZZA</div>
            </div>
            {pizzas
              ? pizzas.map((pizza) => {
                  return (
                    <div className="prlist prSecond" key={uuidv4()}>
                      <div>{pizza.name}</div>
                      <i
                        className="fas fa-check-circle"
                        onClick={() => fromKitchenToFinish(pizza)}
                      ></i>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="prlists c">
            <div className="prlist prSecond prheading">
              <div>DRINKS</div>
            </div>
            {drinks
              ? drinks.map((drink) => {
                  return (
                    <div className="prlist prSecond" key={uuidv4()}>
                      <div>{drink.name}</div>
                      <i
                        className="fas fa-check-circle"
                        onClick={() => fromKitchenToFinish(drink)}
                      ></i>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="prlists">
            <div className="prlist prThird prheading">
              <div>FINISHED</div>
            </div>
            {finishes
              ? finishes.map((finish) => {
                  return (
                    <div className="prlist prThird" key={uuidv4()}>
                      <div>
                        {finish.name} {finish.qty} ta
                      </div>
                      <i
                        className="fas fa-share"
                        onClick={() => fromFinishToCheck(finish)}
                      ></i>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="prlists ">
            <div className="prlist prheading check">
              <div>CHECK</div>
            </div>
            {checks
              ? checks.map((check) => {
                  return (
                    <div className="prlist check" key={uuidv4()}>
                      <div>{check.name}</div>
                      <i>{check.qty} ta</i>
                    </div>
                  );
                })
              : null}
            {checks.length > 0 ? (
              <div className="prlist check" key={uuidv4()}>
                <div>Move to Check</div>
                <i className="fas fa-share" onClick={getChecks}></i>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Processing;
