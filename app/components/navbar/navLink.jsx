"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const Icon = item.icons;
  const pathName = usePathname();
  return (
    <>
      <Link
        href={item.path}
        className={`group navlink ${pathName === item.path && "active"}`}
      >
        <Icon className="text-2xl text-[#002060]" />
      <div className="hidden absolute  p-2 rounded-md bg-[#002060] text-white group-hover:block">
        {item.title}
      </div>
      </Link>
    </>
  );
};

export default NavLink;
