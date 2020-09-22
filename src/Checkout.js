import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useDataLayerValue } from "./DataLayer";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useDataLayerValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout__basket">
          <h2 className="checkout__title">Your Shopping Basket </h2>

          {/* CheckoutProducta */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              title={item.title}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
