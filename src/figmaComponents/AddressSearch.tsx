import { FunctionComponent } from "react";
import FormControl from "../components/FormControl";
import styles from "./AddressSearch.module.css";

const AddressSearch: FunctionComponent = () => {
  return (
    <div className={styles.addressSearch}>
      <div className={styles.inputGroup}>
        <FormControl />
        <img
          className={styles.inputGroupPrependIcon}
          alt=""
          src="../inputgroupprepend.svg"
        />
      </div>
    </div>
  );
};

export default AddressSearch;
