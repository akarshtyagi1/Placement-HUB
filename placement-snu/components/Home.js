import styles from "../styles/home.module.scss";

const CompanyCard = (props) => {
  return (
    <div className={styles.companyCard}>
      <p className={styles.companyName}>{props.name}</p>
      <p className={styles.qCount}>{props.count}</p>
    </div>
  );
};

const companies = [
  "Amazon",
  "American Express",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
];

export default function Home(props) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.companyCol}>
            {companies.map((company) => {
              return <CompanyCard key={company} name={company} count="2" />;
            })}
          </div>
        </div>
        <div className={styles.mid}>Mid</div>
        <div className={styles.right}>right</div>
      </div>
    </>
  );
}
