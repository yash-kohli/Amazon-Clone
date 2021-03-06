import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDataLayerValue } from "./DataLayer";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [{ flag }, dispatch] = useDataLayerValue();
  const signIn = (e) => {
    e.preventDefault();

    // firebase login syntx

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //new change with if condition
        if (flag) {
          dispatch({
            type: "SET_LOGIN_FLAG",
            flag: false,
          });
          history.push("/payment");
        } else {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if success then it will console log
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      }) // catch shows error
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing in you agree to the AMAZON-FakeCLONE Conditions of Use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
