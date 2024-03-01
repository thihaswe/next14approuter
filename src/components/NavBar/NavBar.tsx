"use client";
import Link from "next/link";
import React from "react";
import styles from "@/components/NavBar/NavBar.module.css";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "homepage",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "blog",
    url: "/blog",
  },
  { title: "dashboard", url: "/dashboard" },
];
const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <h3>Logo</h3>
      </Link>
      <div className={styles.parent}>
        {links.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.title}
              className={`${styles.link} ${
                pathname === link.url && styles.current
              }`}
            >
              <p>{link.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
