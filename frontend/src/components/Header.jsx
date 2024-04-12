import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-10">

      <div className="text-2xl font-semibold"><Link to={"/"}>Paytm</Link> </div>
      <nav className="flex items-center gap-5">
        <Link
          className="px-3 py-2 text-white rounded-full bg-slate-900"
          to={"/signup"}
        >
          Signup
        </Link>
        <Link
          className="px-3 py-2 border rounded-full border-slate-900"
          to={"/signin"}
        >
          SignIn
        </Link>
      </nav>
    </header>
  );
};

export default Header;
