import React from "react";
import Logo from "../common/Logo";
import Menu from "../header/Menu";

const Footer = () => {
  return (
    <footer className=' border-t pb-6 pt-8 mt-[100px]'>
      <div className='my-container'>
        <div className='flex flex-col items-center justify-between gap-6 min-[1360px]:flex-row'>
          <Logo />
          <Menu />

          <div className='flex max-w-[220px] items-center rounded-full border border-[#E2E8F0] px-4 py-[10px]'>
            <Logo />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <p className='my-[40px] w-[75%] text-center text-base font-medium'>
            <strong>Use it with caution:</strong> This tool can be helpful, but
            it is not a substitute for your own knowledge and understanding.
            Make sure to use it as a supplement to your own research and
            writing, rather than relying on it exclusively.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex max-w-[220px] items-center rounded-full border border-[#E2E8F0] px-4 py-[10px]'>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
