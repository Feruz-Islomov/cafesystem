import React from "react";

const PaymentData = () => {
  return (
    <>
      <div className="tablesPayment">
        <h1>Tables payment</h1>
        <div className="tablesCart">
          <div className="listOfTables">
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
            <div className="tableList">
              <div>table#</div>
              <div>date</div>
              <div>$totalCost</div>
            </div>
          </div>
          <div className="totalOfDay">
            <h1>
              Day 1 <br />
              total $2134
            </h1>
            <button>
              SAVE <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="dailyPayment">
        <h1>Daily payment</h1>
        <div className="tablesCart">
          <div className="listOfTables">
            <div className="dayList">
              <div>day#</div>
              <div>$totalCost</div>
            </div>
            <div className="dayList">
              <div>day#</div>
              <div>$totalCost</div>
            </div>
            <div className="dayList">
              <div>day#</div>
              <div>$totalCost</div>
            </div>
          </div>
          <div className="totalOfMonth">
            <h1>
              January <br />
              total $21334
            </h1>
            <button>
              SAVE <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="annualPayment">
        <h1>Annual payment</h1>
        <div className="tablesCart">
          <div className="listOfTables">
            <div className="monthList">
              <div>january</div>
              <div>$totalCost</div>
            </div>
            <div className="monthList">
              <div>february</div>
              <div>$totalCost</div>
            </div>
            <div className="monthList">
              <div>march</div>
              <div>$totalCost</div>
            </div>
          </div>
          <div className="totalOfMonth">
            <h1>
              2021 <br />
              total $993334
            </h1>
            <button>
              SAVE <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentData;
