import styles from "./button.module.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.base}>{children}</button>;
}
