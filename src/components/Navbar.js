import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams();

  return (
    <div className="w-full bg-white h-10 flex items-center px-20 justify-center text-slate-400 sticky top-0 z-50">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-800" : ""
        }
      >
        Home
      </NavLink>
      <span className="px-2">/</span>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-800" : ""
        }
      >
        About
      </NavLink>
      <span className="px-2">/</span>
      <NavLink
        to={`/detail/${id}`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-800" : ""
        }
      >
        Detail
      </NavLink>
    </div>
  );
};

export default Navbar;
