import Link from "next/link";
//import Image from "next/image";
import styles from "../styles/topics.module.css";

function Card({ title, description, link }) {
  return (
    <li className={styles.card}>
        <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_body}>{description}</p>
        < Link  href={link}>
        <button  target="_blank" className={styles.button}>
            Start practising
        </button>
        </Link>
       
        
      </div>
    </li>
  );
}

export default Card;