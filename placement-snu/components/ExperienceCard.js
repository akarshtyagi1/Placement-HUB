import styles from "../styles/experienceCard.module.scss";

export default function ExperienceCard({ name, title, content, year }) {
  return (
    <div className={styles.experience}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <p>by {name}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}
