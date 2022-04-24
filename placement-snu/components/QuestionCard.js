import styles from "../styles/questionCard.module.scss";

export default function QuestionCard() {
  return (
    <div className={styles.questionCard}>
      <div className={styles.question}>
        <p>
          <strong>Question:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <strong>Topic: </strong>
          Arrays
        </p>
      </div>
    </div>
  );
}
