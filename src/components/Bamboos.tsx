import styles from "./Bamboos.module.css"

export function Bamboos() {
  return(
  <>
    <div className={styles.bamboos}>
      <img className={styles.bamboo} src="/images/bamboo_large.png" />
    </div>
    <div className={styles.bamboos2}>
      <img className={styles.bamboo} src="/images/bamboo_large.png" />
    </div>
  </> 
  );
}
