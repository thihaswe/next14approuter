import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hello This is the title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
          reiciendis debitis quia praesentium voluptas maiores laboriosam,
          doloremque excepturi voluptates rem architecto id numquam sit ipsa vel
          molestiae nihil, nemo consectetur.
        </p>
        <Button name={"Learn More"} url={"/contact-us"} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          fill={true}
          src={"/Lottie Lego.gif"}
          alt="home page image"
        />
      </div>
    </main>
  );
}
