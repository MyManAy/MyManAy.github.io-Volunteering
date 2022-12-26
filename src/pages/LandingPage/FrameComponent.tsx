import { FunctionComponent } from "react";
import LandingPageBackground from "./figmaComponents/LandingPageBackground";
import NavigationBar from "../Nav/NavigationBar";
import SearchButton from "./figmaComponents/SearchButton";
import AddressSearch from "./figmaComponents/AddressSearch";
import Description from "./figmaComponents/Description";
import Title from "./figmaComponents/Title";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.landingPage}>
        <div className={styles.background} />
        <div className={styles.imgWithComponents}>
          <LandingPageBackground />
          <NavigationBar />
          <SearchButton />
          <AddressSearch />
          <Description />
          <Title />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
