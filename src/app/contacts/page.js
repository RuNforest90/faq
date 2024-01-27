
import Menu from "../components/Menu/Menu";
import styles from "./page.module.css";

export default function contacts() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div className={styles.center}>
        контакты
      </div>
    </main>
  );
}
