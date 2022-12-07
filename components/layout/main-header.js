import React from "react";
import Link from "next/link";
import styles from "./main-header.module.css";
const MainHeader = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/Event_Project">Next Events</Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/events">Browser All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
