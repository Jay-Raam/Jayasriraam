import React from "react";
import myImage from '../image/baner-5.avif'; 
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.one}>
            <div className={styles.text}>
                      <h1 className={styles.text1}>About Us</h1>
          <p className={styles.text2}>
            I am a passionate and skilled web developer with a vision to craft
             seamless and engaging digital experiences. With a love for all things
              technology, I embark on a journey to transform ideas into captivating
               web solutions that leave a lasting impact.
          </p>
            </div>
            <div className={styles.image}>
             <img src={myImage} alt="the men" className="image-1" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
