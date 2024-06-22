import React from "react";
import myImage from "../image/baner-4.png";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container} id="home">
        <div className={styles.one}>
          <div className={styles.text}>
            <h1
              className={styles.text1}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              I'm your Friend
            </h1>
            <p className={styles.text2} data-aos="fade-up" data-aos-delay="200">
              Find the Solution
            </p>
            <a
              href="https://www.linkedin.com/in/jayasriraam/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.alt}
            >
              <button
                type="button"
                className={styles.btn}
                data-aos="zoom-in-up"
                data-aos-delay="150"
              >
                Read More
              </button>
            </a>
          </div>
          <div className={styles.image}>
            <img src={myImage} alt="the men" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
