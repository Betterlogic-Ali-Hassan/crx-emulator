import React from "react";
import Logo from "../common/Logo";
import Menu from "../header/Menu";

const Footer = () => {
  return (
    <footer className=' border-t pb-6 pt-8 mt-[100px]'>
      <div className='my-container'>
        <div className='flex flex-col items-center justify-center gap-6 min-[960px]:flex-row'>
          <Menu footer />
        </div>
        <div className='flex items-center justify-center'>
          <p className='my-[40px] w-[75%] text-center text-base font-medium'>
            Copyright © 2025 CRXEmulator. All Rights Reserved. <br />
            Your trusted solution for secure and seamless Chrome
            extension installations
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
