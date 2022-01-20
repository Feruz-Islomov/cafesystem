import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <Link to="/table1">
        <div className="homePage">
          <img src="./images/pizzaproducts/r1.jpg" alt="name" />
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
