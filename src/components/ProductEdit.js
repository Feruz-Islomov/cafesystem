import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const ProductEdit = (props) => {
  const { showthat } = props;
  const { item } = props.location.state;

  const history = useHistory();

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const update = (e) => {
    e.preventDefault();
    const edit = {
      id: item._id,
      newName: name,
      newPrice: price,
      menu: item.menu,
    };
    Axios.put("/update/product", edit)
      .then((res) => {
        showthat();
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setPrice("");
  };
  return (
    <div>
      <button
        onClick={() => history.push("/productpage/list")}
        className="checkbtn ppbtn"
      >
        back to product page
      </button>
      <div className="wrapper">
        <div className="title">Product Form</div>
        <form className="form" onSubmit={update}>
          <div className="inputfield">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="inputfield">
            <input type="submit" value="Update" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
