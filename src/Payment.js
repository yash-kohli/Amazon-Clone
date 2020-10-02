import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "@material-ui/core";
function Payment() {
  const [{ user, basket }, dispatch] = useDataLayerValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>ABC TYH</p>
            <p>India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe functionality */}</div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
