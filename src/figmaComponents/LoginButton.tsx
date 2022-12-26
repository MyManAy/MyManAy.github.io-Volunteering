import { FunctionComponent } from "react";
import styles from "./LoginButton.module.css";

const LoginButton: FunctionComponent = () => {
  return (
    <button className={styles.loginButton}>
      <div className={styles.h6}>Login</div>
    </button>
  );
};

export default LoginButton;
