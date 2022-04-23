import styles from "../styles/companyCard.module.scss";

export default function CompanyCard(props) {
  return (
    <div
      id={props.companyName}
      className={styles.companyCard}
      onClick={(e) => {
        console.log(e.currentTarget.id);
      }}
    >
      <p className={styles.companyName}>{props.companyName}</p>
      <p className={styles.qCount}>{props.count}</p>
    </div>
  );
}
