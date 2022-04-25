import styles from "../styles/questionCard.module.scss";

export default function QuestionCard({ problem, topic }) {
  return (
    <div className={styles.questionCard}>
      <div className={styles.question}>
        <p>
          <strong>Question:</strong>
          {problem}
        </p>
        <p>
          <strong>Topic: </strong>
          {topic}
        </p>
      </div>
    </div>
  );
}
