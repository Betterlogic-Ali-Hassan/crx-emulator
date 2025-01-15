import React from "react";
import Button from "../ui/button/Button";
import Image from "next/image";
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className='my-container'>
      <section className='flex items-center justify-center sm:pt-[100px] pt-[60px] flex-col text-center'>
        <Heading />
        <div className='h-[3rem]'>
          <Button className='min-h-[64px] max-h-[64px]'>
            <Image src='/chrome.png' height={28} width={28} alt='icon' />
            Add to Chrome
          </Button>
        </div>
        <p className='mt-8 text-[#071d2b]'>
          Also available for{" "}
          <a href='#' className='font-bold underline hover:no-underline mr-1'>
            Edge,
          </a>{" "}
          <a href='#' className='font-bold underline hover:no-underline'>
            Opera
          </a>
        </p>
      </section>
    </div>
  );
};

export default Hero;
