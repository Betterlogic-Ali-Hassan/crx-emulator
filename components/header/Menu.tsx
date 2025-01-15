import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Menu = ({ footer }: { footer?: boolean }) => {
  return (
    <ul
      className={cn(
        " items-center ml-6 gap-2 mt-1 lg:flex hidden justify-center flex-wrap",
        footer && "lg:flex flex"
      )}
    >
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
