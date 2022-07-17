import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white px-6 py-3 navbar-text rounded-xl shadow-lg">
      <Link to="/">
        <p>UPayments Store</p>
      </Link>
      <Link to="/">
        <p>Register</p>
      </Link>
    </div>
  );
};

export default Navbar;
