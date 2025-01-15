import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
interface Props {
  icon: string;
  title: string;
  desc: string;
}
const Card = ({ icon, title, desc }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-icon"]}>
        <span>
          <Image src={icon} alt='no image' height={32} width={32} />
        </span>
      </div>
      <div className={styles.desc}>
        <h5>{title}</h5>
        <p>{desc}</p>
        <Link href='#' className='!m-0 flex items-center gap-0.5'>
          Learn More
          <span>
            <MdArrowOutward size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
