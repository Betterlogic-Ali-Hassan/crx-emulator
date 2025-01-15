import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/logo.svg'
        alt='logo'
        height={42}
        width={42}
        className='mr-3'
      />
      <span className='uppercase text-[26px] tracking-tighter font-bold'>
        foxified
      </span>
    </Link>
  );
};

export default Logo;
