import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Главная</Link>
      <Link href="/about">О Нас</Link>
      <Link href="/ourGuests">Наши гости</Link>
    </header>
  )
}
