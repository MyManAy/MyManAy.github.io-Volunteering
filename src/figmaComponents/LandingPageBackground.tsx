import { FunctionComponent } from "react";
import styles from "./LandingPageBackground.module.css";

const LandingPageBackground: FunctionComponent = () => {
  return (
    <div className={styles.landingPageBackground}>
      <img
        className={styles.cleanupThen2xClipdropEnhanIcon}
        alt=""
        src="../cleanupthen2x-clipdropenhancetransformed-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
    </div>
  );
};

export default LandingPageBackground;
