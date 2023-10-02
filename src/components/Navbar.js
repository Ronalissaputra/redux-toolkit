import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams();

  return (
    <div className="bg-green-500 my-5 h-10 lg:mx-80 mx-10 rounded-full flex items-center px-20 justify-center text-slate-200 font-semibold sticky top-5 z-50">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-900" : ""
        }
      >
        Beranda
      </NavLink>
      <span className="px-2">/</span>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-900" : ""
        }
      >
        About
      </NavLink>

      <span className="px-2">/</span>
      <NavLink
        to="/add"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-900" : ""
        }
      >
        Add
      </NavLink>
      <span className="px-2">/</span>
      <NavLink
        to={`/detail/${id}`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-slate-900" : ""
        }
      >
        Detail
      </NavLink>
    </div>
  );
};

export default Navbar;
