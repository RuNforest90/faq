import Link from "next/link";
import styles from "./Menu.module.css"

export default function Menu() {
  return (
      <ul>
      <li><Link href={'/'}>Домашняя</Link></li>
      <li><Link href={'/kabinet'}>кабинет</Link></li>
      <li><Link href={'/contacts'}>контакты</Link></li>
      </ul>
  );
}
