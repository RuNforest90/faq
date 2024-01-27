import Link from "next/link";
import styles from "./page.module.css";
import Menu from "./components/Menu/Menu";

export default function home() {
  return (
    <main className={styles.main}>
      <Menu/>

      <div className={styles.center}>
        Домашняя
      </div>
    </main>
  );
}
