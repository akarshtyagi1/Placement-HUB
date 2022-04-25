import styles from "../styles/companyCard.module.scss";

export default function CompanyCard(props) {
  return (
    <div
      id={props.id}
      className={styles.companyCard}
      onClick={(e) => {
        window.location.href = "/questions?id=" + e.currentTarget.id;
      }}
    >
      <p className={styles.companyName}>{props.companyName}</p>
      <p className={styles.qCount}>{props.count}</p>
    </div>
  );
}
