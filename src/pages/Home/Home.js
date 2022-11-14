import React from "react";
import Products from "../../components/Products/Products";
import "./Home.css"
const Home = () => {
  return (
    <>
      <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <section>
        <h3 className="heading">Products</h3>
       <Products/>
      </section>
    </>
  );
};

export default Home;
