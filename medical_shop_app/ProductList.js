// ProductList.js
import React, { useState } from "react";
import { useProductContext } from "../store/FormContext";
import classes from "./ProductList.module.css";
import Card from "./Card";

const ProductList = () => {
  const { products = [], addToCart, addToCartModal } = useProductContext();
  console.log("Products:", products);
  const [quantity, setQuantity] = useState(1);

  const quantityChangeHandler = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const addToCartHandler = (product) => {
    addToCart();
    addToCartModal({ ...product, quantity }); // Include quantity in addToCartModal
    setQuantity(1); //
  };

  // const addToCartHandler = (product, quantity) => {
  //   addToCart();
  //   addToCartModal(product, quantity);
  //   console.log(product);
  // };

  return (
    <Card>
      <div className={classes.list}>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <strong>Name:</strong> {product.name},{" "}
              <strong>Description:</strong> {product.description},
              <strong>Price:</strong> {product.price},
              <strong>
                Amount:{" "}
                <input
                  type="number"
                  value={quantity} readOnly
                  onChange={quantityChangeHandler}
                />
              </strong>
              <button onClick={() => addToCartHandler(product)}>
                Add To Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProductList;
