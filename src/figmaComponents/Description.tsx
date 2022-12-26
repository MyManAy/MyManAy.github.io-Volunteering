import { FunctionComponent } from "react";
import styles from "./Description.module.css";

const Description: FunctionComponent = () => {
  return (
    <div className={styles.description}>
      <span
        className={styles.findYourCommunity}
      >{`Find your community and make a difference `}</span>
      <b>one hand at a time</b>
      <span className={styles.findYourCommunity}>.</span>
    </div>
  );
};

export default Description;
