import styles from "../styles/questions.module.scss";
import QuestionCard from "./QuestionCard";

export default function QuesPanel() {
  return (
    <div className={styles.body}>
      <div className={styles.Container}>
        <h1>Questions asked in Amazon Interviews</h1>
        <div className={styles.quesWrapper}>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </div>
  );
}
