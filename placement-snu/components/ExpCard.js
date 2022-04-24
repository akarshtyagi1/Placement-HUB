import styles from "../styles/expCard.module.scss";

export default function ExpCard({ user, title, content, year }) {
  return (
    <div className={styles.experience}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <p>by {user}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}
