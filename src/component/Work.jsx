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
    <div className={styles.portfolio} id="work">
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h1>Works</h1>
          </div>
          <div className={styles.second}>
            <a
              href="https://jayasriraam-protfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_5} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a
              href="https://jay-raam.github.io/Movie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_1} alt="Project" className={styles.image} />
            </a>
            <a
              href="https://jayasriraam-weather.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_3} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a
              href="https://github.com/Jay-Raam/Dashboard-Nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_2} alt="Project" className={styles.image} />
            </a>
            <a
              href="https://jay-raam.github.io/Blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_4} alt="Project" className={styles.image} />
            </a>
          </div>
          <div className={styles.second}>
            <a
              href="https://jay-raam.github.io/Book/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myImage_6} alt="Project" className={styles.image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
