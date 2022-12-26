import { FunctionComponent } from "react";
import LoginButton from "./LoginButton";
import styles from "./NavigationBar.module.css";
import defaultProfile from "../images/profile.svg";
import logo from "../images/logo@2x.png";
import { useAuth0 } from "@auth0/auth0-react";

const NavigationBar: FunctionComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <nav className={styles.navigationBar}>
      <img
        className={styles.profileIcon}
        alt=""
        src={isAuthenticated ? user?.picture : defaultProfile}
      />
      <LoginButton />
      <img className={styles.logoIcon} alt="" src={logo} />
    </nav>
  );
};

export default NavigationBar;
