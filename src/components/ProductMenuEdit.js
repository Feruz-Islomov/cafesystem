import Axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

const ProductMenuEdit = (props) => {
  const { showthat } = props;
  const currentItem = props.location.state.item;
  const history = useHistory();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const refimg = useRef("");
  const update = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", currentItem._id);
    formData.append("name", name);
    formData.append("img", img);

    Axios.post("/api/menufile", formData)
      .then((res) => {
        showthat();
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setImg("");
    refimg.current.value = "";
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
            <input type="submit" value="Update" className="inputbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductMenuEdit;
