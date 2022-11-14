import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { remove } from "../../redux/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  if (products.length === 0) {
    return (
      <h3 style={{ padding: "10px", marginLeft: "10px" }}>
        Cart is Empty ! Please add items
      </h3>
    );
  }
  return (
    <div>
      <h3 style={{ padding: "10px", marginLeft: "10px" }}>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button
              className="btn"
              onClick={() => {
                handleRemove(product.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
