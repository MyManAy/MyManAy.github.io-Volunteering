import { FunctionComponent } from "react";
import styles from "./LandingPageBackground.module.css";
import background from "../images/cleanupthen2x-clipdropenhancetransformed-1@2x.png";

const LandingPageBackground: FunctionComponent = () => {
  return (
    <div className={styles.landingPageBackground}>
      <img
        className={styles.cleanupThen2xClipdropEnhanIcon}
        alt="hey"
        src={background}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
    </div>
  );
};

export default LandingPageBackground;
