import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AdminChart from "./AdminChart";
import MonthChart from "./MonthChart";

const AdminPage = (props) => {
  const {
    adminChecks1,
    adminChecks2,
    adminChecks3,
    adminChecks4,
    adminChecks5,
    adminChecks6,
    adminChecks7,
    adminChecks8,
    adminChecks9,
    adminChecks10,
    total1,
    total2,
    total3,
    total4,
    total5,
    total6,
    total7,
    total8,
    total9,
    total10,
    moveToDaily,
    allday1,
    sumdata,
    getCheckToPrint,
  } = props;
  const [num, setNum] = useState(1);
  const history = useHistory();
  const params = useParams();

  const btn = () => {
    if (params.id === ":id") {
      return (
        <button
          className="checkbtn"
          onClick={() => history.push("/admin/charts")}
        >
          see the chart <i className="fas fa-chart-bar"></i>
        </button>
      );
    } else if (params.id === "charts") {
      return (
        <button className="checkbtn" onClick={() => history.push("/admin/:id")}>
          hide the chart
        </button>
      );
    }
  };
  return (
    <>
      <div className="tablesContainer">
        <div className="table" onClick={() => setNum(1)}>
          1
        </div>
        <div className="table" onClick={() => setNum(2)}>
          2
        </div>
        <div className="table" onClick={() => setNum(3)}>
          3
        </div>
        <div className="table" onClick={() => setNum(4)}>
          4
        </div>
        <div className="table" onClick={() => setNum(5)}>
          5
        </div>
        <div className="table" onClick={() => setNum(6)}>
          6
        </div>
        <div className="table" onClick={() => setNum(7)}>
          7
        </div>
        <div className="table" onClick={() => setNum(8)}>
          8
        </div>
        <div className="table" onClick={() => setNum(9)}>
          9
        </div>
        <div className="table" onClick={() => setNum(10)}>
          10
        </div>
      </div>
      <div>
        <h1>CHECKS OF TABLES</h1>
      </div>
      <div className="processingContainer">
        <div className="processTable">
          {num === 1
            ? adminChecks1.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 1</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 1)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 2
            ? adminChecks2.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 2</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 2)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 3
            ? adminChecks3.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 3</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 3)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 4
            ? adminChecks4.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 4</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 4)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 5
            ? adminChecks5.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 5</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 5)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 6
            ? adminChecks6.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 6</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 6)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 7
            ? adminChecks7.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 7</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 7)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 8
            ? adminChecks8.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 8</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 8)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 9
            ? adminChecks9.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 9</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 9)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : num === 10
            ? adminChecks10.map((checks) => {
                return (
                  <div className="prlists admin" key={uuidv4()}>
                    <div className="prlist check prheading">
                      <div>CHECK TABLE 10</div>
                    </div>
                    {checks.slice(0, -1).map((check) => {
                      return (
                        <div className="prlist check" key={check.key}>
                          <div>{check.name}</div>
                          <>
                            {check.qty}x ${check.price} ta
                          </>
                        </div>
                      );
                    })}
                    <div className="prlist total">
                      <div>
                        <i className="fas fa-share"></i>total:
                      </div>
                      <div>
                        <i className="fas fa-dollar-sign"></i>
                        {checks
                          .slice(0, -1)
                          .reduce((a, c) => a + c.price * c.qty, 0)}
                      </div>
                    </div>
                    <a href="/print" target="_blank">
                      <div
                        className="prlist total"
                        onClick={() => getCheckToPrint(checks, 10)}
                      >
                        <div>
                          <i></i>
                          {checks.slice(-1)[0].date}
                        </div>
                      </div>
                    </a>
                    <hr />
                  </div>
                );
              })
            : null}
        </div>

        <div className="processTable">
          {num === 1 ? (
            <h1 className="processTable">table1: total ${total1}</h1>
          ) : num === 2 ? (
            <h1 className="processTable">table2: total ${total2}</h1>
          ) : num === 3 ? (
            <h1 className="processTable">table3: total ${total3}</h1>
          ) : num === 4 ? (
            <h1 className="processTable">table4: total ${total4}</h1>
          ) : num === 5 ? (
            <h1 className="processTable">table5: total ${total5}</h1>
          ) : num === 6 ? (
            <h1 className="processTable">table6: total ${total6}</h1>
          ) : num === 7 ? (
            <h1 className="processTable">table7: total ${total7}</h1>
          ) : num === 8 ? (
            <h1 className="processTable">table8: total ${total8}</h1>
          ) : num === 9 ? (
            <h1 className="processTable">table9: total ${total9}</h1>
          ) : num === 10 ? (
            <h1 className="processTable">table10: total ${total10}</h1>
          ) : null}
          {btn()}
          {params.id === "charts" && (
            <>
              <div className="processTable">
                <AdminChart allday1={allday1} />
              </div>
              <button className="checkbtn" onClick={moveToDaily}>
                Kunlik grafikka o'tkazing
                <i className="fas fa-angle-double-down"></i>
              </button>
              <div className="processTable">
                <MonthChart sumdata={sumdata} />
              </div>
            </>
          )}
          <button
            className="checkbtn"
            onClick={() => history.push("/productpage/list")}
          >
            Product Page <i className="fas fa-cart-arrow-down"></i>
          </button>
          <button className="checkbtn" onClick={() => history.push("/signup")}>
            Register Page <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
