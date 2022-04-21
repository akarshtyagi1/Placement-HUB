import styles from "../../styles/navbar.module.scss";
import Logo from "../../public/snu-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <Image src={Logo} width="175px" />
        <div>
          <p>PLACEMENTS-SNU</p>
        </div>
      </div>
    </>
  );
}
