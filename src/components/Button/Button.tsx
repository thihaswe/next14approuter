"use client";
import Link from "next/link";
import React from "react";
import styles from "@/components/Button/Button.module.css";

interface Prop {
  name: string;
  url: string;
  action?: (para?: any) => void;
}
const Button = ({ name, url, action }: Prop) => {
  return (
    <Link href={url}>
      <button
        className={styles.button}
        onClick={() => {
          {
            action ? action() : console.log("clicked");
          }
        }}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
