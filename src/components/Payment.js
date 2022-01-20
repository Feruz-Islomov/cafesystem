import React from "react";

const Payment = () => {
  return (
    <>
      <div className="paymentCart">
        <div className="singlePayment">
          <h1>Single table payment</h1>
          <div className="singleLists">
            <div className="prlists adminFinishList">
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
              <div className="adminFinishOrder">
                <div>1. name 2ta</div>
                <div>$price</div>
              </div>
            </div>
            <div className="payment">
              <h1>
                total: <i className="fas fa-dollar-sign"></i>125
              </h1>
              <button className="paymentbtn">
                <i className="fas fa-money-bill-wave"></i> payment
                <i className="fas fa-level-down-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
