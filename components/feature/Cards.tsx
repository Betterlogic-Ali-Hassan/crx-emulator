import React from "react";
import Card from "../ui/card/Card";
import { feature } from "@/constant/feature";

const Cards = () => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-[30px] gap-y-12'>
      {feature.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          desc={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Cards;
