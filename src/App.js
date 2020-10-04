import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useDataLayerValue } from "./DataLayer";
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// public key so no need to use git ignore for this
const promise = loadStripe(
  "pk_test_51HYBW9BqesX5FyxbwwuZA2FZU2AUJFTiIrrTWrH8q3r42mgSdEK60t1A87WCn3uD3PCV6n0afTXxcoddOOGDzvwk00NTjvqrUK"
);

function App() {
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    // run once only when app component loads

    // as soon as app loads its listen to changes to login
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user  logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
