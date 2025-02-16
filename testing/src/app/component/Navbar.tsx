import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="hidden lg:block ">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          <Link rel="stylesheet" href="" className="navbar_link relative">
            HOME
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            CATEGORIES
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            MEN'S
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            WOMEN'S
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            JEWELRY
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            PERFUME
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            BLOG
          </Link>
          <Link rel="stylesheet" href="" className="navbar_link relative">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
