import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <motion.div
        className={styles.loader}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
