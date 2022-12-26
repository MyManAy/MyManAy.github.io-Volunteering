// import React, {
//   KeyboardEventHandler,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import "./App.css";
// import { sdk } from "./backend/client/sdk";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";

// function App() {
//   const { user, isAuthenticated } = useAuth0();

//   return <div className="App"></div>;
// }

// export default App;

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/LandingPage/FrameComponent";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="MyManAy.github.io-Volunteering/"
        element={<FrameComponent />}
      />
    </Routes>
  );
}
export default App;
