import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartValue = useSelector((state)=> state.cart)
  return (
    <div className='nav'>
      <span className="logo">REDUX STORE</span>
      <div className='navLinks'>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartcount">Cart items : {cartValue.length}</span>
      </div>
    </div>
  );
}

export default NavBar