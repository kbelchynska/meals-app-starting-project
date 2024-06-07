import logoImg from "@/assets/logo.png";
import Link from "next/link";

import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImg.src} alt="A plate with food" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
