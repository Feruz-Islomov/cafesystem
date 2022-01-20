import React from "react";

const PrintCheck = ({ print, num }) => {
  return (
    <div>
      <div className="prlist check prheading" onClick={() => window.print()}>
        <div>CHECK TABLE {num}</div>
      </div>
      {print.slice(0, -1).map((check) => {
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
          {print.slice(0, -1).reduce((a, c) => a + c.price * c.qty, 0)}
        </div>
      </div>
      <div className="prlist total">
        <div>
          <i></i>
          {print.slice(-1)[0].date}
        </div>
      </div>
      <h3 style={{ marginLeft: "75px" }}>Thank you!</h3>
      <br />
      <br />
      <h1>---------------------</h1>
    </div>
  );
};

export default PrintCheck;
