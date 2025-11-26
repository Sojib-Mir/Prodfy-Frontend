"use client";

import useAuth from "@/hook/useAuth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logoutUser, loading } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setDropdownOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid ?? null]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logoutUser().then(async () => {
      const token = "";
      Cookies.set("fbToken", token);
      router.push("/login");
    });
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/add-product">Add Product</Link>
      </li>
      <li>
        <Link href="/manage-products">Manage Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );

  if (loading) return <Loading />;
  return (
    <div className="navbar shadow-sm w-full md:max-w-7xl mx-auto ">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href={"/"} className="flex text-pink-500 text-2xl font-bold">
          Prodfy
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        {/* User logged in */}
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="btn btn-ghost btn-circle avatar mx-1"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  alt="User Avatar"
                  src={user?.photoURL || "/default-avatar.png"}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            </div>

            {dropdownOpen && (
              <ul className="menu menu-sm dropdown-content absolute right-0 bg-base-100 rounded-box w-48 p-2 shadow border border-purple-500 z-9999">
                <li className="text-center pb-2">
                  <p className="font-bold text-center text-xs">
                    {user.displayName || "No Name"}
                  </p>
                  <p className="text-xs">{user.email}</p>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
