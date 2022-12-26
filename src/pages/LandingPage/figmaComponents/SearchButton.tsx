import { FunctionComponent } from "react";
import styles from "./SearchButton.module.css";
import right from "../images/icn-arrowright-icnxs.svg";

const SearchButton: FunctionComponent = () => {
  return (
    <div>
      <button className={styles.searchButton}>
        <b className={styles.btnText}>Search</b>

        <img className={styles.icnArrowRightIcnXs} alt="" src={right} />
      </button>
    </div>
  );
};

export default SearchButton;
