import React from "react";
import Logo from "../common/Logo";
import Button from "../ui/button/Button";
import Image from "next/image";

import Link from "next/link";

const Header = () => {
  return (
    <header className='py-5 px-1 sm:px-8 border-b'>
      <div className='my-container'>
        <nav className='flex items-center justify-between'>
          <Logo header />
          <div className='flex items-center gap-6'>
            <Link
              href='/contact'
              className=' hover:text-blue-600 font-medium  rounded-full mt-2'
            >
              Contact
            </Link>

            <div className='h-[3rem] '>
              <Button className='min-h-[52px] max-h-[3rem] !text-lg'>
                <Image src='/chrome.png' height={28} width={28} alt='icon' />
                Add to Chrome
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
