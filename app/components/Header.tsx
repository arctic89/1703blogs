import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img src="https://pp.userapi.com/c639220/u7650556/video/y_20ce2533.jpg" alt="logo" />
        </Link>
      </div>
      <div>
        <Link href="/">Главная</Link>
        <Link href="/about">О Нас</Link>
        <Link href="/blog">Наш блог</Link>
        <Link href="/ourGuests">Наши гости</Link>
      </div>
    </header>
  );
}
