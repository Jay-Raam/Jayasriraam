import React from "react";
import styles from "./Work.module.css";
import myImage_1 from "../image/img_4.jpg";
import myImage_2 from "../image/gal_6.jpg";
import myImage_3 from "../image/img_7.jpg";
import myImage_4 from "../image/gal_5.jpg";
import myImage_5 from "../image/img_9.jpg";
import myImage_6 from "../image/img_6.jpg";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h1>Works</h1>
          </div>
          <div className={styles.second}>
            <a href="https://jay-raam.github.io/Movies/">
              <img src={myImage_5} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a href="https://github.com/Jay-Raam/My_portfolio.git">
              <img src={myImage_1} alt="Project" className={styles.image} />
            </a>
            <a href="https://jay-raam.github.io/Weather_/">
              <img src={myImage_3} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a href="https://jay-raam.github.io/News/">
              <img src={myImage_2} alt="Project" className={styles.image} />
            </a>
            <a href="https://jay-raam.github.io/Blog-App/">
              <img src={myImage_4} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a href="https://www.figma.com/file/k0J4IIVKLrzDZyAHHGVcqw/%E2%96%B2-HealthCare?type=design&node-id=0%3A1&mode=design&t=eJyFRg72Q3rjzmxg-1">
              <img src={myImage_6} alt="Project" className={styles.image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
