import React from "react";
import { About } from "../sections/About/About";
import styles from "./page.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <About />
    </div>
  );
};

export default AboutUs;
