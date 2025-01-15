import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ header }: { header?: boolean }) => {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/logo.svg'
        alt='logo'
        height={42}
        width={42}
        className='mr-3'
      />
      <span
        className={cn(
          "uppercase text-[26px] tracking-tighter font-bold",
          header && "sm:inline-block hidden"
        )}
      >
        foxified
      </span>
    </Link>
  );
};

export default Logo;
