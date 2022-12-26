import { FunctionComponent } from "react";
import styles from "./Title.module.css";

const Title: FunctionComponent = () => {
  return <div className={styles.title}>{`Volunteer Now `}</div>;
};

export default Title;
