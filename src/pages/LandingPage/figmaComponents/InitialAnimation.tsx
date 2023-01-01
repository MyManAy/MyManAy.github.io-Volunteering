import { duration } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Timer from "./Timer";

export interface IAppProps {
  children?: React.ReactNode;
  duration: number;
  delay: number;
}

export default function App({ children, duration, delay }: IAppProps) {
  const showAnimation = Timer(60); // animation refreshes after one minute
  return (
    <AnimatePresence initial={showAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
