import Axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router";

const Login = (props) => {
  const { login, isAdmn } = props;
  const history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [er, setEr] = useState("");

  const update = (e) => {
    e.preventDefault();
    const loginForm = {
      name: name,
      password: password,
    };

    Axios.post("/api/user/login", loginForm)
      .then((res) => {
        Cookies.set("webtoken", res.data.token);
        setName("");
        setPassword("");
        history.push("/");
        login();
        if (res.data.isAdmin === true) {
          isAdmn();
          Cookies.set("admin", res.data.token);
        }
      })
      .catch((err) => setEr("Mavjud emas"));
  };
  return (
    <div>
      <h1>Login page</h1>
      <div className="wrapper">
        <div className="title">Login Form</div>
        <p style={{ color: "red" }}>{er}</p>
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
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputfield">
            <input type="submit" value="Login" className="inputbtn" />
          </div>
          <p>
            No Account ? Register <a href="/signup">here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
