import logoImg from "@/assets/logo.png";
import Link from "next/link";
import NavLink from "@/components/main-header/nav-link";

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
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
