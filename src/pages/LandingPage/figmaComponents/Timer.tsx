import { useEffect } from "react";

const UseIntro = (seconds: number) => {
  const storage = window.localStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem("timestamp") || "1000");

  const timeLimit = seconds * 1000;

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? storage.setItem("timestamp", currTimestamp.toString())
      : storage.setItem("timestamp", timestamp.toString());
  }, []);

  return hasTimePassed;
};

export default UseIntro;
