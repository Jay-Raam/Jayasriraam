import styles from "../component/Skill.module.css";
import React from "react";
import myImage from "../image/baner7.png";
import myImage2 from "../image/baner8.png";
import myImage3 from "../image/m3.jpg";
import Carousel from "./carousel";

function Skill() {
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>Skill</h1>
              <h3>The expert in anything was once a beginner</h3>
            </div>
            <div className={styles.six}>
              <div className={styles.three}>
                <Carousel />
              </div>
              <div className={styles.four}>
                <img src={myImage3} alt="the project" className={styles.seven} />
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <h3>Programming Languages</h3>
            <img src={myImage} alt="programming language" />
            <h3>Software</h3>
            <img src={myImage2} alt="software" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
