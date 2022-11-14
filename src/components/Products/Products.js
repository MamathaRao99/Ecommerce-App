import React, { useState, useEffect } from "react";
import "./products.css";
import { add } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ProductSlice";
import { STATUSES } from "../../redux/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status == STATUSES.LOADING) {
    return (
      <h2 style={{ padding: "10px", marginLeft: "10px" }}>Loading.......</h2>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <h2 style={{ padding: "10px", marginLeft: "10px" }}>
        Something Went Wrong!
      </h2>
    );
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h4>${product.price}</h4>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
