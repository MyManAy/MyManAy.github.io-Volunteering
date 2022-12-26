import { FunctionComponent } from "react";
import styles from "./SearchButton.module.css";

const SearchButton: FunctionComponent = () => {
  return (
    <div>
      <button className={styles.searchButton}>
        <b className={styles.btnText}>Search</b>

        <img
          className={styles.icnArrowRightIcnXs}
          alt=""
          src="../icn-arrowright-icnxs.svg"
        />
      </button>
    </div>
  );
};

export default SearchButton;
