import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  confirmPassword,
  email,
  name,
  password,
  userImg,
} from "../../../Redux/slice/SignupSlice";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { logEmail, logPassword } from "../../../Redux/slice/LoginSlice";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const userSignup = useSelector((state) => state.signup);
  const userLoginData = useSelector((state) => state.login);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [uerImg, setUserImg] = useState("");
  // some state for storing data

  const handelSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    if (userSignup.password !== userSignup.confirmPassword) {
      setPasswordError(`Your password didn't match`);
    } else {
      if (uerImg) {
        const uImg = new FormData();
        uImg.append("image", uerImg);

        fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API_KEY}`,
          {
            method: "POST",
            body: uImg,
          }
        )
          .then((res) => res.json())
          .then((data) => {
            dispatch(userImg(data.data.url));
            registerByData(userSignup);
            setPasswordError("");
            navigate("/newsfeed");
            form.reset();
          });
      }
    }
  };

  const registerByData = async (userData) => {
    const res = await fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    console.log(result);
  };
  // user sign up

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    loginByData(userLoginData);
    form.reset();
    navigate("/newsfeed");
  };

  const loginByData = async (userData) => {
    const res = await fetch("http://localhost:5000/api/v1/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    console.log(result);
  };
  // user login

  const hadnelGoogle = () => {
    navigate("/newsfeed");
  };
  // user login with google

  return (
    <div>
      <div className="wrapper">
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" />
            <input type="radio" name="slide" id="signup" />
            <label
              onClick={() => {
                setToggle(true);
              }}
              htmlFor="login"
              className="slide login"
            >
              Login
            </label>
            <label
              onClick={() => {
                setToggle(false);
              }}
              htmlFor="signup"
              className="slide signup"
            >
              Sign Up
            </label>
            <div className="slider-tab"></div>
          </div>
          {/* login & signup button  */}

          <div className="form-inner">
            <form
              onSubmit={(e) => handelLogin(e)}
              className={`login ${toggle ? "ml-0" : "-ml-[50%]"}`}
            >
              <div className="field">
                <input
                  onChange={(e) => dispatch(logEmail(e.target.value))}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="field">
                <input
                  onChange={(e) => dispatch(logPassword(e.target.value))}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="pass-link">
                <Link>Forgot password?</Link>
              </div>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <button type="submit">Login</button>
              </div>
              <div className="google">
                <button
                  onClick={() => hadnelGoogle()}
                  className="google-btn flex items-center justify-evenly"
                >
                  <FcGoogle size={30} />
                  <span>Sign In With Google</span>
                </button>
              </div>
              <p className="pt-2 text-sm text-center text-gray-800">
                If you don't have any account ? Please SIgn Up frist.
              </p>
            </form>
            {/* login form  */}

            <form onSubmit={(e) => handelSignup(e)} className="signup">
              <div className="field">
                <input
                  onChange={(e) => dispatch(name(e.target.value))}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="field">
                <input
                  onChange={(e) => dispatch(email(e.target.value))}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="field">
                <input
                  type="file"
                  onChange={(e) => setUserImg(e.target.files[0])}
                  className="file-input file-input-bordered file-input-primary w-full"
                  accept="image/png, image/jpeg"
                  required
                />
              </div>

              <div className="field">
                <input
                  onChange={(e) => dispatch(password(e.target.value))}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="field">
                <input
                  onChange={(e) => dispatch(confirmPassword(e.target.value))}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <p className="text-center text-red-700 mt-2">
                {password ? passwordError : ""}
              </p>
              <div className="field btn2">
                <div className="btn-layer"></div>
                <button type="submit">SignUP</button>
              </div>
            </form>
            {/* signup form  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
