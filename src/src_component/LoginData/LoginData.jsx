import React, { useEffect } from "react";
import { useState } from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

const initialValue = {
  email: "dummyEmail",
  password: "dummyPassword",
};

const LoginData = () => {
  const [data, setData] = useState(initialValue);

  function handleOnClick(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Home />
      <div className="box2">
        <div className="box2">
          <h1>Login Account</h1>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Laudantium natus soluta minima voluptatum blanditiis! Excepturi,{" "}
            <br />
            provident. Ipsa quia neque sequi.
          </p>
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onClick={(e) => handleOnClick(e)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    onClick={(e) => handleOnClick(e)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <Link
                  >
                  <button
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-outline-success my-2"
                    disabled=""
                    onClick={handleOnClick}
                  >
                    Success
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginData;
