import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className='flex items-center ml-6 gap-2 mt-1'>
      {["home", "contact", "privacy policy", "terms of service"].map(
        (item, i) => (
          <li
            key={i}
            className='py-2 px-3 hover:text-blue-600 font-medium  rounded-full'
          >
            <Link
              href={item === "privacy policy" ? "privacy-policy" : item}
              className='capitalize'
            >
              {item}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menu;
