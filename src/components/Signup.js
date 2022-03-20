import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Signup = (props) => {
  // const { login, isAdmn } = props;
  const history = useHistory();
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const upload = (e) => {
    e.preventDefault();
    // const signForm = {
    //   name: name,
    //   password: password,
    //   isAdmin: isAdmin,
    // };
    if (password === confirmPassword) {
      Axios.post("/api/user/signup", {
        name: name,
        password: password,
        isAdmin: isAdmin,
      })
        .then((res) => {
          console.log(res);
          setName("");
          setPassword("");
          setConfirmPassword("");
          setIsAdmin("");
          recieveUser();
        })
        .catch((err) => console.log(`${err + isAdmin} Yuz berdi`));
    } else {
      console.log("confirm password");
      setPassword("");
      setConfirmPassword("");
    }
  };
  const deleteUser = (nom) => {
    Axios.post("/deleteSingle/deluser", {
      id: nom,
    })
      .then((res) => {
        console.log(res);
        recieveUser();
      })
      .catch((err) => console.log(err));
  };
  const recieveUser = () => {
    Axios.get("/products/getusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    recieveUser();
  }, []);

  return (
    <div>
      <button className="checkbtn" onClick={() => history.push("/admin/:id")}>
        back
      </button>
      <div className="wrapper">
        <div className="title">Sign up Form</div>
        <form className="form" onSubmit={upload}>
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
            <label>Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          {password !== confirmPassword && confirmPassword.length > 0 ? (
            <p style={{ color: "red" }}>confirm password please</p>
          ) : null}
          <div className="inputfield">
            <label>Admin</label>
            <div className="custom_select">
              <select
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
              >
                <option>lavozimni tanlang</option>
                <option value={true}>admin</option>
                <option value={false}>staff</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <input type="submit" value="Sign up" className="inputbtn" />
          </div>
          <p>
            Already have an Account ? Login <a href="/login">here</a>
          </p>
        </form>
      </div>
      {users.map((user) => {
        return (
          <div className="menuItemsList" key={user._id}>
            <div className="EachProductItem">
              <div className="mid">
                {user.isAdmin ? (
                  <i className="fas fa-user-secret" id="user"></i>
                ) : (
                  <i className="fas fa-user-tie"></i>
                )}
                <h3> {user.name}</h3>
                <h3> {user.isAdmin ? "Admin" : "Staff"}</h3>
              </div>
              <div className="mid">
                <button
                  className="editBtn del"
                  onClick={() => deleteUser(user._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Signup;
