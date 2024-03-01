import React from "react";
import styles from "@/app/blog/blog.module.css";
import Image from "next/image";
import imageData from "../../../public/Lottie Lego.gif";
import { blogPost } from "@/data/data";

const Blog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });

  const datas = await response.json();

  return (
    <div className={styles.container}>
      {datas.map((data: any) => {
        return (
          <div className={styles.parent} key={data.id}>
            <div className={styles.imageContainer}>
              <Image
                src={
                  "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
                }
                alt="blog image"
                width={200}
                height={200}
                className={styles.img}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.desc}>{data.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
