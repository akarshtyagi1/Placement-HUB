import styles from "../styles/login.module.scss";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Logo from "../public/app-logo.png";

export default function Login({ providerId }) {
  return (
    <>
      <div className={styles.LoginWrapper}>
        <div className={styles.Loginform}>
          <div className={styles.LogoWrapper}>
            <div className={styles.Logo}>
              <Image src={Logo} />
            </div>
          </div>
          <div className={styles.buttonSection}>
            <p>Enter using your SNU ID</p>
            <button
              onClick={() => {
                signIn(providerId);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
