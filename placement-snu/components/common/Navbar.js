import styles from "../../styles/navbar.module.scss";
import Logo from "../../public/snu-logo.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Navbar() {
  async function getUser() {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      const user = await res.json();
      return user;
    } else {
      return null;
    }
  }

  const user = getUser();

  return (
    <>
      <div className={styles.navbar}>
        <Image
          onClick={() => {
            window.location.href = "/home";
          }}
          src={Logo}
          width="175px"
        />
        <div className={styles.title}>
          <p>PLACEMENTS-SNU</p>
        </div>
        {true && (
          <>
            <div className={styles.user}>
              <button
                onClick={() => {
                  window.location.href = "/share";
                }}
              >
                Share
              </button>
              <button
                onClick={() => {
                  window.location.href = "/experiences";
                }}
              >
                Experience
              </button>
              <h3>Akarsh Tyagi</h3>
              <button onClick={() => signOut()}>Log Out</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
