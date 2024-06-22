import styles from "../component/Skill.module.css";
import React from "react";
import Carousel from "./carousel";
import MyImage01 from "../image/image 1.png";
import MyImage02 from "../image/image 2.png";
import MyImage03 from "../image/image 3.png";
import MyImage04 from "../image/image 4.png";
import MyImage05 from "../image/image 5.png";
import MyImage06 from "../image/image 6.png";
import MyImage07 from "../image/image 7.png";
import MyImage08 from "../image/image 8.png";
import MyImage09 from "../image/image 9.png";
import MyImage010 from "../image/image 10.png";
import MyImage011 from "../image/image 11.png";
import MyImage012 from "../image/image 12.png";
import MyImage013 from "../image/image 13.png";
import MyImage014 from "../image/image 14.png";
import MyImage015 from "../image/image 15.png";
import MyImage016 from "../image/image 16.png";
import MyImage017 from "../image/image 17.png";
import MyImage018 from "../image/image 18.png";

const data = [
  "Writing and debugging codes",
  "Troubleshooting software issues",
  "Writing a reports regarding the state of software under development",
  "Performing developmental tests",
];

function Skill() {
  return (
    <div className={styles.skill} id="skill">
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>Skill & Experience</h1>
              <h3>The expert in anything was once a beginner</h3>
            </div>

            {/* experience section */}
            <div className={styles.experience}>
              <div className={styles.three}>
                <Carousel />
              </div>
              <div className={styles.experience01}>
                <h5 className={styles.jcompany}>Akkenam Technologies</h5>
                <div className={styles.content}>
                  <h3 className={styles.jname}>Jr.Developer</h3>
                  <p className={styles.jname04}>May 2023 - Till Present</p>
                  <ul className={styles.jname_gal_01}>
                    {data.map((item, index) => {
                      return (
                        <li key={index} className={styles.jname_gal_02}>
                          <span>.</span> {item}
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.akkenamtechnologies.com/"
                    className={styles.jname_gal_03}
                  >
                    <button type="button" className={styles.btn}>
                      Read More...
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skillimagecontainer}>
            <div className="jau-11">
              <div
                className="image-title"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h5 className={styles.text}>Programming Languages</h5>
              </div>
              <div className={styles.image}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://html.com"
                >
                  <img
                    src={MyImage01}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                >
                  <img
                    src={MyImage02}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://javascript.com"
                >
                  <img
                    src={MyImage03}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://react.dev"
                >
                  <img
                    src={MyImage04}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://nodejs.org"
                >
                  <img
                    src={MyImage05}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://nextjs.org/docs"
                >
                  <img
                    src={MyImage06}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.typescriptlang.org/docs/"
                >
                  <img
                    src={MyImage07}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.w3schools.com/cs/index.php"
                >
                  <img
                    src={MyImage08}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://cplusplus.com"
                >
                  <img
                    src={MyImage09}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
              </div>
            </div>

            <div className="jau-12">
              <div
                className="image-title"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h5 className={styles.text}>Software</h5>
              </div>
              <div className={styles.image}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://figma.com"
                >
                  <img
                    src={MyImage010}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.adobe.com/in/products/photoshop.html"
                >
                  <img
                    src={MyImage011}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://helpx.adobe.com/in/xd/get-started.html"
                >
                  <img
                    src={MyImage012}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://linux.org"
                >
                  <img
                    src={MyImage013}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.adobe.com/in/products/aftereffects.html"
                >
                  <img
                    src={MyImage014}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.adobe.com/in/products/indesign.html"
                >
                  <img
                    src={MyImage015}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://www.microsoft.com/en-in/microsoft-365"
                >
                  <img
                    src={MyImage016}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://developer.android.com/studio"
                >
                  <img
                    src={MyImage017}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in-up"
                  data-aos-delay="150"
                  href="https://sketch.com"
                >
                  <img
                    src={MyImage018}
                    alt="programmimg language"
                    className={styles.main001}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
