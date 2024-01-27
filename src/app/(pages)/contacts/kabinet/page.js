import Menu from "../components/Menu/Menu";
import styles from "./page.module.css";

export default function kabinet() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div className={styles.center}>
        кабинет
      </div>
    </main>
  );
}
