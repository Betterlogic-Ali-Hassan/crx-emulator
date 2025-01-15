import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
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
      </div>
    </div>
  );
};

export default Card;
