import React from "react";
import styles from "@/app/about/about.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum
          maiores numquam harum exercitationem! Beatae hic molestias magni eius
          quos. Molestiae, velit nisi rerum officia iste perferendis assumenda?
          Aliquam, magni.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/about.png"} alt="about img" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutUs;
