import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataLayerValue } from "./DataLayer";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useDataLayerValue();
  const history = useHistory();

  //new change // proceed to pay
  const check_proceedto_pay = (e) => {
    if (user && basket.length > 0) {
      history.push("/payment");
    } else {
      dispatch({
        type: "SET_LOGIN_FLAG",
        flag: true,
      });
      history.push("/login");
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className={`subtotal__button ${
          basket.length == 0 && "subtotal__disabled"
        }`}
        disabled={basket.length == 0}
        onClick={check_proceedto_pay}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
