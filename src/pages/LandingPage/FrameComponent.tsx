import Description from "./figmaComponents/Description";
import Title from "./figmaComponents/Title";
import styles from "./FrameComponent.module.css";
import InitialAnimation from "./figmaComponents/InitialAnimation";
import { FunctionComponent } from "react";
import LandingPageBackground from "./figmaComponents/LandingPageBackground";
import NavigationBar from "../Nav/NavigationBar";
import SearchButton from "./figmaComponents/SearchButton";
import AddressSearch from "./figmaComponents/AddressSearch";

const FrameComponent: FunctionComponent = () => {
  const duration = 0.75;
  const delayGenerator = (function* () {
    let delay = 0;
    while (true) {
      yield (delay += duration);
    }
  })();
  return (
    <div className={styles.frameDiv}>
      <div className={styles.landingPage}>
        <div className={styles.background} />
        <div className={styles.imgWithComponents}>
          <InitialAnimation duration={0.5} delay={0}>
            <LandingPageBackground />
          </InitialAnimation>
          <NavigationBar />
          <InitialAnimation
            duration={duration}
            delay={delayGenerator.next().value}
          >
            <Description />
          </InitialAnimation>
          <InitialAnimation
            duration={duration}
            delay={delayGenerator.next().value}
          >
            <Title />
          </InitialAnimation>
          <InitialAnimation
            duration={duration}
            delay={delayGenerator.next().value}
          >
            <SearchButton />
            <AddressSearch />
          </InitialAnimation>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
