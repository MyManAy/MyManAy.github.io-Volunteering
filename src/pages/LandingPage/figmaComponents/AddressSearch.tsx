import { FunctionComponent } from "react";
import FormControl from "./FormControl";
import styles from "./AddressSearch.module.css";
import prepend from "../images/inputgroupprepend.svg";

const AddressSearch: FunctionComponent = () => {
  return (
    <div className={styles.addressSearch}>
      <div className={styles.inputGroup}>
        <FormControl />
        <img className={styles.inputGroupPrependIcon} alt="" src={prepend} />
      </div>
    </div>
  );
};

export default AddressSearch;
