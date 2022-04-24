import styles from "../styles/expCard.module.scss";

export default function ExpCard() {
  return (
    <div className={styles.experience}>
      <h2>GoldMan Sachs Interview Experience </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <p>by Akarsh Tyagi</p>
        <p>2022</p>
      </div>
    </div>
  );
}
