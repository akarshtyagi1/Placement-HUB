import styles from "../styles/companyCard.module.scss";

export default function CompanyCard(props) {
  return (
    <div className={styles.companyCard}>
      <p className={styles.companyName}>{props.name}</p>
      <p className={styles.qCount}>{props.count}</p>
    </div>
  );
}
