import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { user, isAuthenticated } = useAuth0();

  return <div className="App"></div>;
}

export default App;
