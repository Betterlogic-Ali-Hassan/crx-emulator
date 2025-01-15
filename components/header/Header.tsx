import React from "react";
import Logo from "../common/Logo";
import Button from "../ui/button/Button";
import Image from "next/image";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className='py-5 px-8 border-b'>
      <div className='my-container'>
        <nav className='flex items-center justify-between'>
          <Logo />
          <Menu />
          <div className='h-[3rem]'>
            <Button className='min-h-[52px] max-h-[3rem] !text-lg'>
              <Image src='/chrome.png' height={28} width={28} alt='icon' />
              Add to Chrome
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
