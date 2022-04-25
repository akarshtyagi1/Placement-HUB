import styles from "../styles/home.module.scss";
import CompanyCard from "./CompanyCard";
import ExperienceCard from "./ExperienceCard";

export default function Home({ companyNames }) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.companyCol}>
            {companyNames.map((company) => {
              return (
                <CompanyCard
                  key={company.id}
                  id={company.id}
                  companyName={company.name}
                  count={company.count}
                />
              );
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
