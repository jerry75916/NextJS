import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
const Button = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={() => onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
