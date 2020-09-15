import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Kohli StartUp</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>750</strong>
        </p>
      </div>

      <div className="product__rating">
        <p>⭐</p>
      </div>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR90uO2BtTD1j_ktPAT86Q6wLDYWwzrBHsyZeLF5gyxPJ3kM0WYXtFZV-UKuFEt-DowMBFhkVBZ&usqp=CAc" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
