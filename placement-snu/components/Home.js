import styles from "../styles/home.module.scss";
import CompanyCard from "./CompanyCard";
import ExperienceCard from "./ExperienceCard";

export default function Home({ companyNames, experiences }) {
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
        <div className={styles.mid}>
          <div className={styles.carouselWrapper}>
            <h1>Carousel</h1>
          </div>
          <div className={styles.announcementWrapper}>
            <h1>Announcements</h1>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.experienceCol}>
            {experiences.map((exp) => {
              return (
                <ExperienceCard
                  title={exp.title}
                  content={exp.content}
                  name={exp.name}
                  year={exp.year}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
