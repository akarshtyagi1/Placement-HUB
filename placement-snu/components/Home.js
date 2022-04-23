import styles from "../styles/home.module.scss";
import CompanyCard from "./CompanyCard";
import ExperienceCard from "./ExperienceCard";

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
              return <CompanyCard companyName={company} count="2" />;
            })}
          </div>
        </div>
        <div className={styles.mid}>Mid</div>
        <div className={styles.right}>
          <div className={styles.experienceCol}>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </>
  );
}
