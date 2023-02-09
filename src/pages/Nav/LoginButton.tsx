import { FunctionComponent } from "react";
import styles from "./LoginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: FunctionComponent = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const redirectLink =
    "https://mymanay.github.io/MyManAy.github.io-Volunteering/";
  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        isAuthenticated
          ? logout({
              returnTo: redirectLink,
            })
          : loginWithRedirect({
              redirectUri: redirectLink,
            });
      }}
    >
      <div className={styles.h6}> {isAuthenticated ? "Logout" : "Login"}</div>
    </button>
  );
};

export default LoginButton;
