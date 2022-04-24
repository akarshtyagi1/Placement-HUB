import styles from "../styles/experiences.module.scss";
import ExpCard from "../components/ExpCard";

export default function Experiences() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Interview Experiences</h1>
        <div className={styles.expWrapper}>
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
          <ExpCard />
        </div>
      </div>
    </div>
  );
}
