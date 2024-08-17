"use client";
import { menu } from "@/app/data/data";
import Link from "next/link";
import NavLink from "./navLink";
import Mobile from "./Mobile";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import profile from "../../../public/images/presidential/67.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [opennav, setOpenNav] = useState(false);

  return (
    <div className="navbar">
      <Link href="/" className="font-bold text-sm md:text-lg text-black">
        e-Government
      </Link>
      <div className="navitems">
        {menu.map((e) => {
          return (
            <>
              <NavLink item={e} key={e.id} />
            </>
          );
        })}
      </div>

      <div className="flex space-x-6 ">
        <div className="relative cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-[#e4e6eb]">
          <MdOutlineNotificationsNone className="text-2xl" />
          <span className="absolute bg-red-500 w-4 h-4 rounded-full -top-[10px] -right-[10px] flex items-center justify-center text-[11px] text-white">
            1
          </span>
        </div>

        <div className="relative cursor-pointer flex items-center">
          <Image
            src={profile}
            width={32}
            height={32}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
        
             <IoIosArrowDropdown  className="absolute    -bottom-[7px] -right-[7px] "/>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-[#e4e6eb]">
          <BsMessenger />
        </div>
      </div>

      <div
        onClick={() => setOpenNav((prev) => !prev)}
        className="md:hidden transition-all duration-700"
      >
        {opennav ? <BiX /> : <BiMenu />}
      </div>

      <div
        className={`absolute top-24  md:hidden w-[50%] transition-all duration-700 ${
          opennav ? "right-0" : "hidden"
        } bg-red-600`}
      >
        <Mobile />
      </div>
    </div>
  );
};

export default Navbar;
