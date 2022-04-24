import styles from "../styles/experiences.module.scss";
import ExpCard from "../components/ExpCard";

export default function Experiences({ experiences }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Interview Experiences</h1>
        <div className={styles.expWrapper}>
          {experiences.map((doc) => {
            return (
              <ExpCard
                key={doc.id}
                user={doc.name}
                content={doc.content}
                title={doc.title}
                year={doc.year}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
