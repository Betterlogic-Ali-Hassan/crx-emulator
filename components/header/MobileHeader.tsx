import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Button from "../ui/button/Button";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className='lg:hidden block mt-4'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FiMenu size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mt-6 mr-5 px-2 py-2'>
          <DropdownMenuItem className='text-base font-medium'>
            <Link href='/'>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-base font-medium'>
            <Link href='/contact'> Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-base font-medium'>
            <Link href='/contact'> Privacy Policy</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-base font-medium'>
            <Link href='/contact'> Terms Of Service</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-base font-medium mt-5 py-4 border-t sm:hidden block '>
            <div className='h-[3rem]'>
              <Button className='min-h-[52px] max-h-[3rem] !text-lg'>
                <Image src='/chrome.png' height={28} width={28} alt='icon' />
                Add to Chrome
              </Button>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileHeader;
