import { FunctionComponent } from "react";
import LoginButton from "../components/LoginButton";
import styles from "./NavigationBar.module.css";

const NavigationBar: FunctionComponent = () => {
  return (
    <nav className={styles.navigationBar}>
      <img className={styles.profileIcon} alt="" src="../profile.svg" />
      <LoginButton />
      <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
    </nav>
  );
};

export default NavigationBar;
