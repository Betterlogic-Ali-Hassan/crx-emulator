import { menu } from "@/constant/menu";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className=' items-center ml-6 gap-2 mt-1 flex justify-center flex-wrap '>
      {menu.map((item, i) => (
        <li
          key={i}
          className='py-2 px-3 hover:text-blue-600 font-medium  rounded-full'
        >
          <Link href={item.href} className='capitalize'>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
