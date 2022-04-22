import styles from "../styles/login.module.scss";
import { signIn } from "next-auth/react";

export default function Login({ providerId }) {
  return (
    <div className={styles.login_wrapper}>
      <div className={styles.login}>
        <div className={styles.logo_wrapper}>{/* <Image /> */}</div>
        <p>Login with your SNU Email only.</p>
        <button onClick={() => signIn(providerId)}>Login</button>
      </div>
    </div>
  );
}