import { FunctionComponent } from "react";
import styles from "./LoginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: FunctionComponent = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        isAuthenticated
          ? logout({
              returnTo: "http://localhost:3000/MyManAy.github.io-Volunteering/",
            })
          : loginWithRedirect({
              redirectUri:
                "http://localhost:3000/MyManAy.github.io-Volunteering/",
            });
      }}
    >
      <div className={styles.h6}> {isAuthenticated ? "Logout" : "Login"}</div>
    </button>
  );
};

export default LoginButton;
