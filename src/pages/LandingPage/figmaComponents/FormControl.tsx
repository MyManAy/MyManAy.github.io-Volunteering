import { FunctionComponent } from "react";
import styles from "./FormControl.module.css";

const FormControl: FunctionComponent = () => {
  return (
    <input className={styles.formControl} type="text" placeholder="Address" />
  );
};

export default FormControl;
