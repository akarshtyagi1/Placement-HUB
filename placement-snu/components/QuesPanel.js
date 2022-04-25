import styles from "../styles/questions.module.scss";
import QuestionCard from "./QuestionCard";

export default function QuesPanel({ companyQues }) {
  return (
    <div className={styles.body}>
      <div className={styles.Container}>
        <h1>Questions asked in Amazon Interviews</h1>
        <div className={styles.quesWrapper}>
          {companyQues.map((ques) => {
            return <QuestionCard problem={ques.problem} topic={ques.topic} />;
          })}
        </div>
      </div>
    </div>
  );
}
