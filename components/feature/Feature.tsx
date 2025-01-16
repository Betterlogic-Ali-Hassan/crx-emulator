import React from "react";
import styles from "./feature.module.css";
import Cards from "./Cards";

const Feature = () => {
  return (
    <section className='py-12 pt-[100px]'>
      <div className='my-container'>
        <div className='mb-16 flex items-center justify-center flex-col'>
          <span className={styles.badge}>Services</span>
          <h2 className={styles.heading}>CRXemulator features</h2>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Feature;
