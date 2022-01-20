import Axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
  const { data, showthat } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [menu, setMenu] = useState("");
  const [img, setImg] = useState("");
  const refimg = useRef();

  const history = useHistory();
  const params = useParams();
  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", img);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("menu", menu);
    Axios.post("/api/singlefile", formData)
      .then((res) => {
        showthat();
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setPrice("");
    setCategory("");
    setMenu("");
    refimg.current.value = "";
  };
  const deleteSingle = (item) => {
    Axios.delete("/deleteSingle/product", {
      data: item,
    })
      .then((res) => {
        console.log(res);
        showthat();
      })
      .catch((err) => console.log(err));
  };

  const showProductPage = () => {
    if (params.id === "list") {
      return (
        <div className="productContainer">
          <div className="productCatogoryContainer">
            <button
              onClick={() => history.push("/productpage/add")}
              className="checkbtn ppbtn"
            >
              Add Product
            </button>
            <div className="categoryItem">
              <img
                className="imgEditabla"
                src={
                  data.Menu
                    ? `https://burgerback.herokuapp.com/${data.Menu[0].img}`
                    : null
                }
                alt="name"
              />
              <h3>{data.Menu ? data.Menu[0].name : null}</h3>
              <Link
                to={{
                  pathname: "/editmenu",
                  state: { item: data.Menu ? data.Menu[0] : null },
                }}
              >
                <button className="editBtn">EDIT</button>
              </Link>
            </div>
            <div className="menuItemsList">
              {data.McProducts
                ? data.McProducts.map((item, index) => {
                    return (
                      <div key={index} className="EachProductItem">
                        <div className="mid">
                          <img
                            className="imgEditabla"
                            src={`https://burgerback.herokuapp.com/${item.img}`}
                            alt={item.name}
                          />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="mid">
                          <h3> ${item.price}</h3>
                          <h3>{item.category}</h3>
                          <Link
                            to={{
                              pathname: "/editmenuitem",
                              state: { item: item },
                            }}
                          >
                            <button className="editBtn">EDIT</button>
                          </Link>
                          <button
                            className="editBtn del"
                            onClick={() => deleteSingle(item)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="productCatogoryContainer">
            <div className="categoryItem">
              <img
                className="imgEditabla"
                src={
                  data.Menu
                    ? `https://burgerback.herokuapp.com/${data.Menu[1].img}`
                    : null
                }
                alt="name"
              />
              <h3>{data.Menu ? data.Menu[1].name : null}</h3>
              <Link
                to={{
                  pathname: "/editmenu",
                  state: { item: data.Menu ? data.Menu[1] : null },
                }}
              >
                <button className="editBtn">EDIT</button>
              </Link>
            </div>
            <div className="menuItemsList">
              {data.KfcProducts
                ? data.KfcProducts.map((item, index) => {
                    return (
                      <div key={index} className="EachProductItem">
                        <div className="mid">
                          <img
                            className="imgEditabla"
                            src={`https://burgerback.herokuapp.com/${item.img}`}
                            alt={item.name}
                          />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="mid">
                          <h3> ${item.price}</h3>
                          <h3>{item.category}</h3>
                          <Link
                            to={{
                              pathname: "/editmenuitem",
                              state: { item: item },
                            }}
                          >
                            <button className="editBtn">EDIT</button>
                          </Link>
                          <button
                            className="editBtn del"
                            onClick={() => deleteSingle(item)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="productCatogoryContainer">
            <div className="categoryItem">
              <img
                className="imgEditabla"
                src={
                  data.Menu
                    ? `https://burgerback.herokuapp.com/${data.Menu[2].img}`
                    : null
                }
                alt="name"
              />
              <h3>{data.Menu ? data.Menu[2].name : null}</h3>
              <Link
                to={{
                  pathname: "/editmenu",
                  state: { item: data.Menu ? data.Menu[2] : null },
                }}
              >
                <button className="editBtn">EDIT</button>
              </Link>
            </div>
            <div className="menuItemsList">
              {data.PizzaProducts
                ? data.PizzaProducts.map((item, index) => {
                    return (
                      <div key={index} className="EachProductItem">
                        <div className="mid">
                          {" "}
                          <img
                            className="imgEditabla"
                            src={`https://burgerback.herokuapp.com/${item.img}`}
                            alt={item.name}
                          />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="mid">
                          <h3> ${item.price}</h3>
                          <h3>{item.category}</h3>
                          <Link
                            to={{
                              pathname: "/editmenuitem",
                              state: { item: item },
                            }}
                          >
                            <button className="editBtn">EDIT</button>
                          </Link>
                          <button
                            className="editBtn del"
                            onClick={() => deleteSingle(item)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="productCatogoryContainer">
            <div className="categoryItem">
              <img
                className="imgEditabla"
                src={
                  data.Menu
                    ? `https://burgerback.herokuapp.com/${data.Menu[3].img}`
                    : null
                }
                alt="name"
              />
              <h3>{data.Menu ? data.Menu[3].name : null}</h3>
              <Link
                to={{
                  pathname: "/editmenu",
                  state: { item: data.Menu ? data.Menu[3] : null },
                }}
              >
                <button className="editBtn">EDIT</button>
              </Link>
            </div>
            <div className="menuItemsList">
              {data.BuggetBurgersProducts
                ? data.BuggetBurgersProducts.map((item, index) => {
                    return (
                      <div key={index} className="EachProductItem">
                        <div className="mid">
                          {" "}
                          <img
                            className="imgEditabla"
                            src={`https://burgerback.herokuapp.com/${item.img}`}
                            alt={item.name}
                          />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="mid">
                          <h3> ${item.price}</h3>
                          <h3>{item.category}</h3>
                          <Link
                            to={{
                              pathname: "/editmenuitem",
                              state: { item: item },
                            }}
                          >
                            <button className="editBtn">EDIT</button>
                          </Link>
                          <button
                            className="editBtn del"
                            onClick={() => deleteSingle(item)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="productCatogoryContainer">
            <div className="categoryItem">
              <img
                className="imgEditabla"
                src={
                  data.Menu
                    ? `https://burgerback.herokuapp.com/${data.Menu[4].img}`
                    : null
                }
                alt="name"
              />
              <h3>{data.Menu ? data.Menu[4].name : null}</h3>
              <Link
                to={{
                  pathname: "/editmenu",
                  state: { item: data.Menu ? data.Menu[4] : null },
                }}
              >
                <button className="editBtn">EDIT</button>
              </Link>
            </div>
            <div className="menuItemsList">
              {data.DrinksProducts
                ? data.DrinksProducts.map((item, index) => {
                    return (
                      <div key={index} className="EachProductItem">
                        <div className="mid">
                          <img
                            className="imgEditabla"
                            src={`https://burgerback.herokuapp.com/${item.img}`}
                            alt={item.name}
                          />
                          <h3>{item.name}</h3>
                        </div>
                        <div className="mid">
                          <h3> ${item.price}</h3>
                          <h3>{item.category}</h3>
                          <Link
                            to={{
                              pathname: "/editmenuitem",
                              state: { item: item },
                            }}
                          >
                            <button className="editBtn">EDIT</button>
                          </Link>
                          <button
                            className="editBtn del"
                            onClick={() => deleteSingle(item)}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
    } else if (params.id === "add") {
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
            <form className="form" onSubmit={upload}>
              <div className="inputfield">
                <label>Photo</label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  ref={refimg}
                  className="input"
                  required
                />
              </div>
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
                <label>Category</label>
                <div className="custom_select">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>select category</option>
                    <option value="burger">burger</option>
                    <option value="pizza">pizza</option>
                    <option value="drink">drink</option>
                  </select>
                </div>
              </div>
              <div className="inputfield">
                <label>Menu</label>
                <div className="custom_select">
                  <select
                    value={menu}
                    onChange={(e) => setMenu(e.target.value)}
                  >
                    <option>select menu</option>
                    <option value="McDonalds burgers">McDonalds burgers</option>
                    <option value="Kfc chickens">Kfc chickens</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Bugget burgers">Bugget burgers</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>
              </div>
              <div className="inputfield">
                <input type="submit" className="inputbtn" />
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="pPageBtns">
        <button className="checkbtn" onClick={() => history.push("/admin/:id")}>
          back
        </button>
        <h1>Manage Products</h1>
      </div>
      {showProductPage()}
    </div>
  );
};

export default ProductPage;
