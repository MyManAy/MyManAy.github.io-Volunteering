import { FunctionComponent, useEffect, useRef, useState } from "react";
import LoginButton from "./LoginButton";
import styles from "./NavigationBar.module.css";
import defaultProfile from "./images/profile.svg";
import logo from "./images/logo@2x.png";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

const NavigationBar: FunctionComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  const AnimatedProfile = () => (
    <motion.img
      initial={{ left: "100vw" }}
      animate={{ left: "1443px" }}
      transition={{
        type: "spring",
        damping: 12,
      }}
      className={styles.profileIcon}
      alt=""
      src={user?.picture}
    />
  );
  return (
    <nav className={styles.navigationBar}>
      {isAuthenticated ? (
        <AnimatedProfile />
      ) : (
        <img className={styles.profileIcon} alt="" src={defaultProfile} />
      )}

      <LoginButton />
      <img className={styles.logoIcon} alt="" src={logo} />
    </nav>
  );
};

export default NavigationBar;
