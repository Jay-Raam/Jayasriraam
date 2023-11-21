import styles from "../component/Skill.module.css";
import React from "react";
import myImage from "../image/baner-7.png";
import myImage2 from "../image/baner-7(1).png";

function Skill() {
  return (
    <div className={styles.skill}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
          <div className={styles.title}>
                <h1>Skill</h1>
          </div>
            <div className={styles.container}>
              <div className={styles.zero}>

                <div className={`${styles.second} myClass`}>
                  <h1>Web Development</h1>
                  <ul className={styles.text_list}>
                    <li>Html & Css</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>React</li>
                    <li>Mysql</li>
                    <li>Java</li>
                    <li>Version Control</li>
                  </ul>
                </div>

                <div className={styles.three}>
                  <h1>UI/UX Development</h1>
                  <ul className={styles.text_list}>
                    <li>Interactivity</li>
                    <li>Prototyping</li>
                    <li>A/B Testing</li>
                    <li>Design Elements</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>

                <div className={styles.Main}>
                  <h1>Branding</h1>
                  <ul className={styles.text_list}>
                    <li>Marketing Strategy</li>
                    <li>Logo Design</li>
                    <li>Tadline</li>
                    <li>Customer Experirnce</li>
                  </ul>
                </div>

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
